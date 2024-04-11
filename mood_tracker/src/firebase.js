// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyC7vgou5KnBsu11zETP0UvnZSgZn9W0gcA",
    authDomain: "mood-tracker-43478.firebaseapp.com",
    projectId: "mood-tracker-43478",
    storageBucket: "mood-tracker-43478.appspot.com",
    messagingSenderId: "1042954226018",
    appId: "1:1042954226018:web:d9190c8e8252bdf2b6c43b",
    measurementId: "G-TY22T39J9Y"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
