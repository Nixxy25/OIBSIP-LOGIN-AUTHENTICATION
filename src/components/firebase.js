// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmvJYuQcZgtimd5NEvb4TJYjfZoqSRads",
  authDomain: "login-authentication-b4600.firebaseapp.com",
  projectId: "login-authentication-b4600",
  storageBucket: "login-authentication-b4600.appspot.com",
  messagingSenderId: "353306269138",
  appId: "1:353306269138:web:0b1e07f276f90bddd8e40b",
  measurementId: "G-HVSQPE00PJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);