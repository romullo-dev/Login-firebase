// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDLkpfWmQBTRiy55zwKi4bIRPQ5MNnLRdY",
  authDomain: "logistica-21403.firebaseapp.com",
  projectId: "logistica-21403",
  storageBucket: "logistica-21403.firebasestorage.app",
  messagingSenderId: "559830272065",
  appId: "1:559830272065:android:3284e7844d9625ab769ec0",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };
