import os
import sys
import json
from pathlib import Path
from datetime import datetime

# === CONFIG ===
AGEALYSER_SRC = "../agealyser/src"
sys.path.append(os.path.abspath(AGEALYSER_SRC))
from agealyser.main import analyze_record

if len(sys.argv) < 2:
    print("❌ Debes pasar la ruta al archivo .aoe2record como argumento")
    sys.exit(1)

file_path = sys.argv[1]

if not os.path.exists(file_path):
    print(f"❌ El archivo no existe: {file_path}")
    sys.exit(1)

try:
    result = analyze_record(file_path)

    if "players" not in result or "map_name" not in result:
        print("❌ Resultado inválido, faltan campos esenciales.")
        sys.exit(1)

    match_data = {
        "fileName": os.path.basename(file_path),
        "map": result.get("map_name", "Unknown"),
        "duration": result.get("duration", 0),
        "started": result.get("started", int(datetime.utcnow().timestamp() * 1000)),
        "uploadedAt": datetime.utcnow().isoformat(),
        "players": []
    }

    for name, civ in zip(result.get("players", []), result.get("civilisations", [])):
        won = name in result.get("winner_names", [])
        match_data["players"].append({
            "name": name,
            "civ": civ,
            "won": won
        })

    with open("result.json", "w", encoding="utf-8") as f:
        json.dump(match_data, f, ensure_ascii=False, indent=2)

    print("✅ Análisis completado")
except Exception as e:
    print(f"❌ Error durante el análisis: {e}")
    sys.exit(1)
