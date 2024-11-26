// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-f53b8.firebaseapp.com",
  projectId: "mern-blog-f53b8",
  storageBucket: "mern-blog-f53b8.firebasestorage.app",
  messagingSenderId: "961876040832",
  appId: "1:961876040832:web:67fa0acdd515fd46485a65"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

