// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Import Firebase Authentication
import { getFirestore } from "firebase/firestore"; // Import Firestore

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBRaQ5yJ1LUonNbT95H9Sqyuc8lZA19yMQ",
    authDomain: "furniro-280f9.firebaseapp.com",
    projectId: "furniro-280f9",
    storageBucket: "furniro-280f9.appspot.com",
    messagingSenderId: "582174893236",
    appId: "1:582174893236:web:4b44625822d81c335de3e1",
    measurementId: "G-JLTEQFPD4Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
const auth = getAuth(app); 

// Initialize Firestore
const db = getFirestore(app); // Initialize Firestore

// Export the app, auth, and db objects
export { app, auth, db };
