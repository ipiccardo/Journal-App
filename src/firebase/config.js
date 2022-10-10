// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCi0VdKX_5fwOsVRsrWOXpBy17P1DufBS4",
  authDomain: "react-cursos-7c333.firebaseapp.com",
  projectId: "react-cursos-7c333",
  storageBucket: "react-cursos-7c333.appspot.com",
  messagingSenderId: "1031499747813",
  appId: "1:1031499747813:web:c170491140e73fe25c9f0c"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);