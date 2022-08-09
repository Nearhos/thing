// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAFgvTEXC1N1O3yBwuUWWphoHSKGt-6B_w",
    authDomain: "flashcardapp-c9bba.firebaseapp.com",
    projectId: "flashcardapp-c9bba",
    storageBucket: "flashcardapp-c9bba.appspot.com",
    messagingSenderId: "906975731006",
    appId: "1:906975731006:web:23529b7e250ea1a955a06f"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);