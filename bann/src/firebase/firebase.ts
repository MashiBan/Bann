// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCzlFz1cwQWwrEErgMRT-RWW9z0gNx8YzQ",
  authDomain: "bann-3d4e0.firebaseapp.com",
  projectId: "bann-3d4e0",
  storageBucket: "bann-3d4e0.appspot.com",
  messagingSenderId: "1051601495831",
  appId: "1:1051601495831:web:99a350f8b99717c8293952",
  measurementId: "G-PX7TR1Y1EZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);