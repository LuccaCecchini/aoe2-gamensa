import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebaseconfig";

export async function registerUser(email, password) {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return { user: userCredential.user, error: null };
  } catch (error) {
    return { user: null, error };
  }
}
