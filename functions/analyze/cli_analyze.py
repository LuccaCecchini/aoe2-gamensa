#!/usr/bin/env python3

import sys
import json
from pathlib import Path
from datetime import datetime

# Agregar el path del parser
sys.path.append(str(Path(__file__).resolve().parent.parent / "agealyser" / "src"))

from agealyser.main import analyze_record

if len(sys.argv) < 2:
    print("❌ Debes proporcionar la ruta al archivo .aoe2record")
    sys.exit(1)

file_path = sys.argv[1]

try:
    result = analyze_record(file_path)

    if "players" not in result or "map_name" not in result:
        print("❌ Resultado incompleto")
        sys.exit(2)

    match_data = {
        "players": [
            {
                "name": name,
                "civ": civ,
                "won": name in result.get("winner_names", [])
            }
            for name, civ in zip(result["players"], result["civilisations"])
        ],
        "map": result["map_name"],
        "duration": result["duration"],
        "started": int(datetime.utcnow().timestamp() * 1000)
    }

    with open("result.json", "w", encoding="utf-8") as f:
        json.dump(match_data, f, ensure_ascii=False, indent=2)

    print("✅ Análisis completado y result.json guardado.")

except Exception as e:
    print(f"❌ Error durante el análisis: {e}")
    sys.exit(3)
