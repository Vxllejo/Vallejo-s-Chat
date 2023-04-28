// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVjsIhgWRG0holry_UMGWHIjRIrnHZV_0",
  authDomain: "react-mychat.firebaseapp.com",
  projectId: "react-mychat",
  storageBucket: "react-mychat.appspot.com",
  messagingSenderId: "743292078699",
  appId: "1:743292078699:web:34494258408ce9e9373f2e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
