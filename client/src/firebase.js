// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "amrit-estate.firebaseapp.com",
  projectId: "amrit-estate",
  storageBucket: "amrit-estate.appspot.com",
  messagingSenderId: "304249850874",
  appId: "1:304249850874:web:a9d685e8ec371a598f7243",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
