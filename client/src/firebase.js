// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0dJDLZi627ZWsXDOCcOJpbYQJi06DG2o",
  authDomain: "qaymaqtube.firebaseapp.com",
  projectId: "qaymaqtube",
  storageBucket: "qaymaqtube.appspot.com",
  messagingSenderId: "482555447428",
  appId: "1:482555447428:web:c2623583e0a57d091f9ad1",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const provider = new GoogleAuthProvider();

export const auth = getAuth();
