// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKon7CQZ3I-0jtmotvrP3cMvHzMlxSpAI",
  authDomain: "flashcard-database-4e56d.firebaseapp.com",
  projectId: "flashcard-database-4e56d",
  storageBucket: "flashcard-database-4e56d.appspot.com",
  messagingSenderId: "660113165117",
  appId: "1:660113165117:web:adb22982c100e9e0c7d354",
  measurementId: "G-DPQ0M95307"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);