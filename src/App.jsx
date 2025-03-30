import { useEffect, useState } from "react";
import { auth } from "./firebase"; // Asegurate de tener este archivo configurado
import { GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
    });

    return () => unsubscribe();
  }, []);

  const handleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  return (
    <div className="bg-yellow-100 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-center mb-4">¡Hola AoE2!</h1>
      {user ? (
        <>
          <p className="mb-2">Bienvenido, {user.displayName}</p>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Cerrar sesión
          </button>
        </>
      ) : (
        <button
          onClick={handleLogin}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Iniciar sesión con Google
        </button>
      )}
    </div>
  );
}
