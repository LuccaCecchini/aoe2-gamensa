// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import firebaseConfig from "./firebase/firebaseconfig";

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
