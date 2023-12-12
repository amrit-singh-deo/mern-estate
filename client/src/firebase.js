import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-83c72.firebaseapp.com",
  projectId: "mern-estate-83c72",
  storageBucket: "mern-estate-83c72.appspot.com",
  messagingSenderId: "787593239809",
  appId: "1:787593239809:web:b7be6d9a002ee373bb0f00",
};

export const app = initializeApp(firebaseConfig);
