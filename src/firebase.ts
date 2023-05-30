// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCzjt3v_LT68VzJG-wbL_kibAbz0RCP2o4",
  authDomain: "salon-hair-15abe.firebaseapp.com",
  projectId: "salon-hair-15abe",
  storageBucket: "salon-hair-15abe.appspot.com",
  messagingSenderId: "264927089804",
  appId: "1:264927089804:web:a02b3d0256cad3394057a9",
  measurementId: "G-ZHLQRTSB60"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
