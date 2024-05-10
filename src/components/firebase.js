// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  
  authDomain: "login-auth-b501d.firebaseapp.com",
  projectId: "login-auth-b501d",
  storageBucket: "login-auth-b501d.appspot.com",
  messagingSenderId: "350332370905",
  appId: "1:350332370905:web:61f49b43d034378a8f23c8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth();
export const db  = getFirestore(app);
export default app;