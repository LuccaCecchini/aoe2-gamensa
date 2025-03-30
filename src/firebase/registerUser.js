import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebaseConfig";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const db = getFirestore();

export async function registerUser(email, password, name) {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Guardamos nombre y UID en Firestore
    await setDoc(doc(db, "users", user.uid), {
      name,
      uid: user.uid,
    });

    return { user, error: null };
  } catch (error) {
    return { user: null, error };
  }
}
