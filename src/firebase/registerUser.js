import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "./firebaseConfig";
import { db } from "./firebaseConfig";
import { doc, setDoc } from "firebase/firestore";

export async function registerUser(email, password, name) {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Guardar en Firebase Auth el displayName (opcional)
    await updateProfile(user, {
      displayName: name
    });

    // Guardamos en Firestore
    await setDoc(doc(db, "users", user.uid), {
      uid: user.uid,
      inGameName: name, // 💡 cambio aquí
      email: user.email,
      isAdmin: false
    });

    return { user, error: null };
  } catch (error) {
    return { user: null, error };
  }
}
