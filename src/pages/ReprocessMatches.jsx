import { useState } from "react";

export function ReprocessMatches() {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(false);

  const isAdmin = true; // 🔐 Asegurate de reemplazar por tu sistema real de permisos

  const handleReprocess = async () => {
    setLoading(true);
    setLogs((prev) => [...prev, "⏳ Iniciando reprocesamiento..."]);

    try {
      const response = await fetch("https://us-central1-aoe2-gamensa.cloudfunctions.net/reprocessallreplays", {
        method: "GET",
        headers: {
          "x-admin-key": "654321",
        },
      });

      const result = await response.json();

      if (response.ok) {
        setLogs((prev) => [
          ...prev,
          `✅ Reprocesamiento completo: ${result.success}/${result.total} partidas`,
          ...(result.failed.length
            ? [`❌ Fallaron: ${result.failed.join(", ")}`]
            : ["🎉 Todas las partidas se procesaron correctamente"]),
        ]);
      } else {
        setLogs((prev) => [...prev, `❌ Error: ${result.error || "Algo salió mal"}`]);
      }
    } catch (err) {
      setLogs((prev) => [...prev, `❌ Error inesperado: ${err.message}`]);
    }

    setLoading(false);
  };

  if (!isAdmin) return null;

  return (
    <div className="p-4 border rounded-lg bg-yellow-100 shadow-md max-w-xl mx-auto my-4">
      <h2 className="text-lg font-semibold mb-2">🧪 Herramientas de Admin</h2>
      <button
        className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded"
        onClick={handleReprocess}
        disabled={loading}
      >
        {loading ? "Procesando..." : "🔁 Reprocesar todas las partidas"}
      </button>
      <div className="mt-4 text-sm text-gray-800 whitespace-pre-wrap">
        {logs.map((log, index) => (
          <div key={index}>• {log}</div>
        ))}
      </div>
    </div>
  );
}
