// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import "firebase/compat/firestore";
import "firebase/auth";
// import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAdzTlCrDXuvkGyNEXUPyTGyET43dbDukY",
  authDomain: "event-management-system-71603.firebaseapp.com",
  projectId: "event-management-system-71603",
  storageBucket: "event-management-system-71603.appspot.com",
  messagingSenderId: "220969227148",
  appId: "1:220969227148:web:23fcb5d3c416881fd7fca9",
  measurementId: "G-JL8SYW8YKG"
};


export const app = firebase.initializeApp(firebaseConfig); 
export const auth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();
export const db = firebase.initializeApp(firebaseConfig).firestore();


 