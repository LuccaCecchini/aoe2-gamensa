import firebase_admin
from firebase_admin import credentials, firestore, storage
import os
import sys
from datetime import datetime

# === CONFIG ===
KEY_PATH = "firebase-key.json"
RECORDINGS_FOLDER = "./recordings"
AGEALYSER_SRC = os.path.abspath("../functions/agealyser/src")
BUCKET_NAME = "aoe2-gamensa.appspot.com"
STORAGE_FOLDER = "recordings"

# === AGREGAR RUTA DE PARSER PYTHON ===
sys.path.append(AGEALYSER_SRC)
from agealyser.main import AgeGame  # import absoluto desde carpeta ya agregada a sys.path

# === INICIALIZAR FIREBASE ===
cred = credentials.Certificate(KEY_PATH)
firebase_admin.initialize_app(cred, {
    'storageBucket': BUCKET_NAME
})
db = firestore.client()
bucket = storage.bucket()

# === OBTENER ARCHIVOS A PROCESAR ===
recordings = [f for f in os.listdir(RECORDINGS_FOLDER) if f.endswith(".aoe2record")]

if not recordings:
    print("⚠️  No se encontraron archivos .aoe2record en esta carpeta.")
    sys.exit()

for file in recordings:
    file_path = os.path.join(RECORDINGS_FOLDER, file)
    blob_path = f"{STORAGE_FOLDER}/{file}"

    # ✅ Verificar si el archivo ya existe en Firebase Storage
    if bucket.blob(blob_path).exists():
        print(f"⏭️  Ya existe en Storage, omitiendo: {file}")
        continue

    # ☁️ Subir archivo .aoe2record a Storage
    blob = bucket.blob(blob_path)
    blob.upload_from_filename(file_path)
    print(f"📤 Subido a Firebase Storage: {file}")

    # 🧠 Analizar localmente con AgeAlyser
    try:
        match = AgeGame(file_path)
        parsed = match.advanced_parser(include_map_analyses=True)
        parsed_dict = parsed.to_dict()
    except Exception as e:
        print(f"❌ Error al analizar {file}: {e}")
        continue

    # 🧾 Subir datos a Firestore
    match_data = {
        "fileName": file,
        "uploadedAt": datetime.utcnow().isoformat(),
        **parsed_dict
    }

    db.collection("matches").add(match_data)
    print(f"✅ Partida subida con éxito: {file}")

print("🏁 Finalizado.")
