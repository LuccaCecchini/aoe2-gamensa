// src/pages/UploadGame.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { getAuth } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

export default function UploadGame() {
  const [file, setFile] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const checkAdmin = async (uid) => {
    const userRef = doc(db, "users", uid);
    const userSnap = await getDoc(userRef);
    return userSnap.exists() && userSnap.data().isAdmin === true;
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

    const isAdmin = await checkAdmin(currentUser.uid);
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
