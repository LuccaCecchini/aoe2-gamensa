import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebaseConfig";
import { db } from "./firebaseConfig";
import { doc, setDoc } from "firebase/firestore";

export async function registerUser(email, password, name) {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Guardamos en Firestore
    await setDoc(doc(db, "users", user.uid), {
      uid: user.uid,
      name,
      email: user.email,
      isAdmin: false // o true si lo querés promover
    });

    return { user, error: null };
  } catch (error) {
    return { user: null, error };
  }
}
