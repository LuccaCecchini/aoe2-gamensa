// src/pages/Home.jsx
import React from "react";

export default function Home({ user }) {
  return (
    <div className="bg-yellow-100 min-h-screen p-6 text-center">
      <h1 className="text-4xl font-bold mb-4">🏆 El Campeón Actual</h1>
      <h2 className="text-2xl font-semibold text-green-700 mb-8">
        🥇 Gringato – ¡Rey absoluto del primer torneo Gamensa!
      </h2>

      <div className="max-w-xl mx-auto bg-white p-6 rounded-2xl shadow-md border-2 border-yellow-400">
        <p className="text-lg mb-4">
          ¡Felicitaciones al campeón! Pero esto no termina acá...
        </p>
        <p className="mb-2 font-semibold text-red-600">
          ⚠️ Atento al resto de los jugadores:
        </p>
        <p className="italic mb-4">
          "Sin tus repeticiones, tu legado no existe..." – Confucio (o quizás yo).
        </p>
        <p className="mb-4">
          Suban sus archivos <code>.aoe2record</code> y dejen que el mundo conozca su gloria (o sus derrotas). 
        </p>
        <p className="text-sm text-gray-700">
          En el futuro, vas a poder generar fixtures directamente desde la app.
          ¡Organizate, desafiá a tus rivales y coronate como nuevo campeón!
        </p>
      </div>

      <div className="mt-8 text-gray-500">
        {user ? (
          <p>👋 Bienvenido, {user.displayName || user.email}.</p>
        ) : (
          <p>Iniciá sesión para ver tus estadísticas o subir tus partidas.</p>
        )}
      </div>
    </div>
  );
}

