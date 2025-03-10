// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJIE7gxdQLLt6IrcqmlAt4ZXNkumsQLuM",
  authDomain: "metroavila-b1e42.firebaseapp.com",
  projectId: "metroavila-b1e42",
  storageBucket: "metroavila-b1e42.firebasestorage.app",
  messagingSenderId: "910101319881",
  appId: "1:910101319881:web:92054db0c36b9add003d18",
  measurementId: "G-7J22DQBE85"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);