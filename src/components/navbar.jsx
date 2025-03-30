import { Link } from "react-router-dom";

export default function Navbar({ user, onLogout }) {
  return (
    <nav className="bg-yellow-200 p-4 shadow-md flex justify-between items-center">
      <h1 className="text-2xl font-bold text-gray-800">AoE2 Gamensa</h1>
      <div className="space-x-4">
        <Link to="/" className="text-blue-700 hover:underline">Home</Link>
        {!user && (
          <>
            <Link to="/login" className="text-blue-700 hover:underline">Login</Link>
            <Link to="/register" className="text-blue-700 hover:underline">Register</Link>
          </>
        )}
        {user && (
          <button onClick={onLogout} className="text-red-600 hover:underline">
            Logout
          </button>
        )}
      </div>
    </nav>
    
  );


}

