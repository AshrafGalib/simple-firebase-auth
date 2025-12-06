// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdneTOXc7tdzMBNvLCelSL30nEnBGofH0",
  authDomain: "simple-firebase-auth-fe399.firebaseapp.com",
  projectId: "simple-firebase-auth-fe399",
  storageBucket: "simple-firebase-auth-fe399.firebasestorage.app",
  messagingSenderId: "114534841580",
  appId: "1:114534841580:web:54816b738a6cc29bc5f9c9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);