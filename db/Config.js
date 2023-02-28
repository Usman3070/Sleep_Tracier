// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRiNVTetIQZKmmFEvCmorlxtBUnHGUAyA",
  authDomain: "nodetask-58785.firebaseapp.com",
  projectId: "nodetask-58785",
  storageBucket: "nodetask-58785.appspot.com",
  messagingSenderId: "537712452167",
  appId: "1:537712452167:web:1302819099434809138762",
  measurementId: "G-DN3YCXH1C0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

module.exports = { db };
