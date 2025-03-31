import os
import json
from google.cloud import storage
from firebase_admin import firestore, initialize_app
from agealyser.main import analyze_record

# Inicializar Firebase
initialize_app()
db = firestore.client()

def process_replay(event, context):
    bucket_name = event['bucket']
    file_path = event['name']

    if not file_path.endswith(".aoe2record"):
        print(f"Ignorado: {file_path}")
        return

    print(f"📥 Procesando archivo: {file_path}")

    # Descargar archivo a /tmp/
    local_path = f"/tmp/{os.path.basename(file_path)}"
    storage_client = storage.Client()
    bucket = storage_client.bucket(bucket_name)
    blob = bucket.blob(file_path)
    blob.download_to_filename(local_path)

    try:
        print("⚙️ Ejecutando análisis con AgeAlyser...")
        result = analyze_record(local_path)

        result_data = {
            "fileName": os.path.basename(file_path),
            "uploadedAt": firestore.SERVER_TIMESTAMP,
            **result,
        }

        db.collection("matches").add(result_data)
        print("✅ Partida guardada en Firestore.")

    except Exception as e:
        print(f"❌ Error al analizar la partida: {e}")
