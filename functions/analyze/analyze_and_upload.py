# functions/analyze/analyze_and_upload.py

import sys
import json
from pathlib import Path
from datetime import datetime
import firebase_admin
from firebase_admin import credentials, firestore
from agealyser.main import analyze_record

# Inicializar Firebase una sola vez
app = None
db = None

def initialize_firebase():
    global app, db
    if not firebase_admin._apps:
        cred = credentials.Certificate("functions/serviceAccountKey.json")
        app = firebase_admin.initialize_app(cred)
        db = firestore.client()
    else:
        db = firestore.client()

def main(file_path: str):
    print(f"📂 Analizando: {file_path}")
    result = analyze_record(file_path)

    if "error" in result:
        print("❌ Error en el análisis:", result["error"])
        return

    result["fileName"] = Path(file_path).name
    result["uploadedAt"] = datetime.utcnow().isoformat()

    initialize_firebase()

    db.collection("matches").add(result)
    print(f"✅ Partida subida a Firestore: {result['fileName']}")

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Uso: python analyze_and_upload.py ruta/al/archivo.aoe2record")
    else:
        main(sys.argv[1])
