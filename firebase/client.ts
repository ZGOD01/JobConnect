import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyASTW6Sa_RbCqdE3maA45hQa7p6OxwKvd0",
  authDomain: "jobconnect-1c31a.firebaseapp.com",
  projectId: "jobconnect-1c31a",
  storageBucket: "jobconnect-1c31a.firebasestorage.app",
  messagingSenderId: "248499585446",
  appId: "1:248499585446:web:3b14c282b24c0bb0d10f67",
  measurementId: "G-2VL6CQ12YY",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
