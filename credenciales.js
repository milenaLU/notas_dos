// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1hDnv5Um9vQWyqyG7MA500VknoxX6vgE",
  authDomain: "app-notas-df939.firebaseapp.com",
  projectId: "app-notas-df939",
  storageBucket: "app-notas-df939.appspot.com",
  messagingSenderId: "1020755478407",
  appId: "1:1020755478407:web:12129bf45186d4d8cab522"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;