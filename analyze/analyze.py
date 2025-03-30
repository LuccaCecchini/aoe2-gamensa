import firebase_admin
from firebase_admin import credentials, firestore, storage
import os
import sys
from datetime import datetime
from pathlib import Path

# === CONFIG ===
KEY_PATH = "firebase-key.json"
RECORDINGS_FOLDER = "./recordings"
AGEALYSER_SRC = "../functions/agealyser/src"
BUCKET_NAME = "aoe2-gamensa.firebasestorage.app"
STORAGE_FOLDER = "recordings"

# === SETUP ===
sys.path.append(os.path.abspath(AGEALYSER_SRC))
from agealyser.main import analyze_record

cred = credentials.Certificate(KEY_PATH)
firebase_admin.initialize_app(cred, {
    'storageBucket': BUCKET_NAME
})
db = firestore.client()
bucket = storage.bucket()

# === PROCESAR ARCHIVOS ===
recordings = [f for f in os.listdir(RECORDINGS_FOLDER) if f.endswith(".aoe2record")]

if not recordings:
    print("⚠️  No se encontraron archivos .aoe2record en esta carpeta.")
    sys.exit()

for file in recordings:
    file_path = os.path.join(RECORDINGS_FOLDER, file)
    blob_path = f"{STORAGE_FOLDER}/{file}"

    # 📦 Verificar si ya está en Storage
    if bucket.blob(blob_path).exists():
        print(f"⏭️  Ya existe en Storage, omitiendo: {file}")
        continue

    # ☁️ Subir archivo a Storage
    blob = bucket.blob(blob_path)
    blob.upload_from_filename(file_path)
    print(f"📤 Subido a Firebase Storage: {file}")

    # 🧠 Analizar con AgeAlyser
    try:
        result = analyze_record(file_path)
    except Exception as e:
        print(f"❌ Error al analizar {file}: {e}")
        continue

    # 🧾 Subir a Firestore
    try:
        if "players" not in result or "map" not in result:
            print(f"❌ Resultado inválido para {file}, faltan campos esenciales.")
            continue

        match_data = {
            "fileName": file,
            "map": result.get("map", "Unknown"),
            "duration": result.get("duration", 0),
            "started": result.get("started", int(datetime.utcnow().timestamp() * 1000)),
            "uploadedAt": datetime.utcnow().isoformat(),
            "players": result.get("players", [])
        }

        # Guardar también como JSON local para depuración
        with open("result.json", "w", encoding="utf-8") as f:
            import json
            json.dump(match_data, f, ensure_ascii=False, indent=2)

        db.collection("matches").add(match_data)
        print(f"✅ Partida subida con éxito: {file}")

    except Exception as e:
        print(f"❌ Error procesando datos de {file}: {e}")
        continue

print("🏁 Finalizado.")
