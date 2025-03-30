import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 text-white flex justify-between">
      <div className="font-bold">AoE2 Gamensa</div>
      <div className="space-x-4">
        <Link to="/" className="hover:underline">Inicio</Link>
        <Link to="/login" className="hover:underline">Login</Link>
        <Link to="/register" className="hover:underline">Registrarse</Link>
      </div>
    </nav>
  );
}
