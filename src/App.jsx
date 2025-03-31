import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import UploadGame from "./pages/UploadGame"
import StatsPage from "./pages/StatsPage";
import { listenToAuthChanges } from "./firebase/authListener";

export default function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = listenToAuthChanges((currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) return <div className="text-center mt-20">Cargando...</div>;

  return (
    <div className="bg-yellow-100 min-h-screen">
      <Navbar user={user} />
      <Routes>
        <Route path="/" element={<Home user={user} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/upload" element={<UploadGame />} />
        <Route path="/stats" element={<StatsPage />} /> {/* <-- Agregado */}
      </Routes>
    </div>
  );
}
