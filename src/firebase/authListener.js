import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "./firebaseConfig";

const auth = getAuth(app);

export const listenToAuthChanges = (callback) => {
  return onAuthStateChanged(auth, callback); // <- Este return es CLAVE
};
