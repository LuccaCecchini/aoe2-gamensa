// src/firebase/authListener.js
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "./firebaseConfig";

const auth = getAuth(app);

export const listenToAuthChanges = (callback) => {
  onAuthStateChanged(auth, callback);
};
