// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Paste your Firebase config here from Firebase Console → Project Settings
const firebaseConfig = {
  apiKey: "AIzaSyB3uQic4B_i75az0c4BtmS5f5_KaYrGxIY",
  authDomain: "fir-a064c.firebaseapp.com",
  projectId: "fir-a064c",
  storageBucket: "fir-a064c.firebasestorage.app",
  messagingSenderId: "1098615767638",
  appId: "1:1098615767638:web:f7d3b00ff20f5a2c9671f7",
  measurementId: "G-VSKWG50LCR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firestore Database
export const db = getFirestore(app);

// Firebase Storage
export const storage = getStorage(app);
