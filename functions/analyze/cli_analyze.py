import sys
import os
import json

# Agregar la carpeta agealyser/src al sys.path
current_dir = os.path.dirname(os.path.abspath(__file__))
agealyser_path = os.path.abspath(os.path.join(current_dir, "..", "agealyser", "src"))
sys.path.insert(0, agealyser_path)

from agealyser.main import analyze_record

# Verificar argumento
if len(sys.argv) < 2:
    print("Uso: python cli_analyze.py <archivo.aoe2record>")
    sys.exit(1)

file_path = sys.argv[1]

# Ejecutar análisis
try:
    result = analyze_record(file_path)
    print(json.dumps(result, indent=2))

    with open("result.json", "w") as f:
        json.dump(result, f, indent=2)

except Exception as e:
    print("🔴 Excepción durante el análisis:")
    print(e)
    with open("result.json", "w") as f:
        json.dump({"error": str(e)}, f, indent=2)
