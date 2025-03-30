import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login exitoso!");
    } catch (error) {
      alert("Error al iniciar sesión: " + error.message);
    }
  };

  return (
    <form onSubmit={handleLogin} className="p-4">
      <input className="border p-2 mb-2 block" type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
      <input className="border p-2 mb-2 block" type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
      <button className="bg-blue-500 text-white px-4 py-2 rounded">Login</button>
    </form>
  );
}
