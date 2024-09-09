// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth  } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzVri9YSP1xE7Mvl6iRyj5kUCTNOM3y7U",
  authDomain: "lms-software-b448c.firebaseapp.com",
  projectId: "lms-software-b448c",
  storageBucket: "lms-software-b448c.appspot.com",
  messagingSenderId: "447477382040",
  appId: "1:447477382040:web:3540d7e3947fbf2c9c09ed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);  
const database = getFirestore(app);

export {app,database,auth}