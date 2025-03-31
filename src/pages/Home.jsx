// src/pages/Home.jsx

import React from "react";

const Home = ({ user }) => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Bienvenido a AoE2 Gamensa ⚔️</h1>
      {user ? (
        <p className="text-lg">Hola, {user.displayName || user.email} 👋</p>
      ) : (
        <p className="text-lg">Iniciá sesión para ver tus estadísticas o registrar partidas.</p>
      )}
    </div>
  );
};

export default Home;
