// src/pages/UploadGame.jsx
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

export default function UploadGame() {
  const [file, setFile] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userRef = doc(db, "users", user.uid);
        const userSnap = await getDoc(userRef);
        const data = userSnap.data();
        setIsAdmin(data?.isAdmin === true);
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    setErrorMsg("");
    setSuccessMsg("");

    if (!file) {
      setErrorMsg("Por favor selecciona un archivo.");
      return;
    }

    const auth = getAuth();
    const currentUser = auth.currentUser;

    if (!currentUser) {
      setErrorMsg("Debes iniciar sesión para subir partidas.");
      return;
    }

    if (!isAdmin) {
      setErrorMsg("No tienes permisos para subir partidas.");
      return;
    }

    const storage = getStorage();
    const storageRef = ref(storage, `recordings/${file.name}`);
    await uploadBytes(storageRef, file);

    setSuccessMsg("Archivo subido exitosamente. Pronto se procesará automáticamente.");
    setFile(null);
  };

  if (loading) return <div className="text-center mt-20">Verificando permisos...</div>;

  if (!isAdmin) return <div className="text-center mt-20 text-red-600">No tenés permisos para subir partidas.</div>;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h2 className="text-2xl font-bold mb-4">Subir partida de Age of Empires II</h2>
      {errorMsg && <p className="text-red-500 mb-2">{errorMsg}</p>}
      {successMsg && <p className="text-green-500 mb-2">{successMsg}</p>}
      <input type="file" accept=".aoe2record" onChange={handleFileChange} className="mb-4" />
      <button
        onClick={handleUpload}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Subir Partida
      </button>
    </div>
  );
}
