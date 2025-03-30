import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebaseConfig";

export function listenToAuthChanges(setUser) {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // Usuario autenticado
      setUser(user);
    } else {
      // Usuario no autenticado
      setUser(null);
    }
  });
}
