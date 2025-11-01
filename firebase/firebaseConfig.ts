// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCaDWmNmoVVHiTqBAO4-j94CND7OXBeFtc",
  authDomain: "notes-app-f2b87.firebaseapp.com",
  projectId: "notes-app-f2b87",
  storageBucket: "notes-app-f2b87.firebasestorage.app",
  messagingSenderId: "321116858652",
  appId: "1:321116858652:web:0c9190743e3c55c5c9b2d9",
  measurementId: "G-P5Y520JFDB",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
