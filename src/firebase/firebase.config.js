import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAxHVyBUwgXCmIgW36qiwHJUqZpRVBcNNE",
  authDomain: "email-password-firebase-2a0d2.firebaseapp.com",
  projectId: "email-password-firebase-2a0d2",
  storageBucket: "email-password-firebase-2a0d2.firebasestorage.app",
  messagingSenderId: "230656609089",
  appId: "1:230656609089:web:a2885f185a4f8e08616fc0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
