# functions/analyze/batch_upload.py

import os
from pathlib import Path
from analyze_and_upload import main as analyze_and_upload

RECORDINGS_DIR = "functions/analyze/recordings"

def run_batch():
    for file in os.listdir(RECORDINGS_DIR):
        if file.endswith(".aoe2record"):
            file_path = os.path.join(RECORDINGS_DIR, file)
            print(f"\n🔁 Analizando {file}...")
            analyze_and_upload(file_path)

if __name__ == "__main__":
    run_batch()
