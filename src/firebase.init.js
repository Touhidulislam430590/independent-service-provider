// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMCOURfRD_HT6r9qn7jIZ8Z_dTKyAS_eE",
  authDomain: "tutorial-guru.firebaseapp.com",
  projectId: "tutorial-guru",
  storageBucket: "tutorial-guru.appspot.com",
  messagingSenderId: "475335015205",
  appId: "1:475335015205:web:31118f420a39e653bc38cc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;