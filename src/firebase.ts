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
  apiKey: "AIzaSyCAL_2QF5X1Jm0KiZFs23u2iAMEhHC8dfg",
  authDomain: "salonhair-8597d.firebaseapp.com",
  projectId: "salonhair-8597d",
  storageBucket: "salonhair-8597d.appspot.com",
  messagingSenderId: "707081897446",
  appId: "1:707081897446:web:0b9045b0a45e391e818227",
  measurementId: "G-FVY0G8TEHJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;