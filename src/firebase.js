// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6sNVl_S0NND5QhqlIAnfwk31uiANhIt4",
  authDomain: "superchat-8898d.firebaseapp.com",
  projectId: "superchat-8898d",
  storageBucket: "superchat-8898d.appspot.com",
  messagingSenderId: "749523006657",
  appId: "1:749523006657:web:cddefabc203485d6949040",
  measurementId: "G-B61P2ZZVZF"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export 
const storage = getStorage();
