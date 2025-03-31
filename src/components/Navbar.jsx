// src/components/Navbar.jsx
import { Link } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";

export default function Navbar({ user }) {
  const auth = getAuth();

  const handleLogout = () => {
    signOut(auth).catch((error) => {
      console.error("Error al cerrar sesión:", error);
    });
  };

  return (
    <nav className="bg-yellow-300 p-4 flex justify-between items-center shadow">
      <div className="text-xl font-bold">
        <Link to="/">AoE2 Gamensa</Link>
      </div>
      <div className="flex gap-4">
        <Link to="/" className="hover:underline">Inicio</Link>
        <Link to="/upload" className="hover:underline">Subir Partida</Link>
        <Link to="/stats" className="hover:underline">Estadísticas</Link>

        {user ? (
          <>
            <span className="text-sm">Hola, {user.email}</span>
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
            >
              Cerrar sesión
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="hover:underline">Iniciar sesión</Link>
            <Link to="/register" className="hover:underline">Registrarse</Link>
          </>
        )}
      </div>
    </nav>
  );
}
