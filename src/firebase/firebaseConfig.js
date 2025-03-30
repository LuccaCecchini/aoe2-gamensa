import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBoEvUB9A_1gilFXIS5yClPyI38knZHjFc",
  authDomain: "aoe2-gamensa.firebaseapp.com",
  projectId: "aoe2-gamensa",
  storageBucket: "aoe2-gamensa.firebasestorage.app",
  messagingSenderId: "23855349992",
  appId: "1:23855349992:web:064a14286b2ac93660095d",
  measurementId: "G-NPVTXZMSND"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
