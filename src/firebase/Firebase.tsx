// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3MgeKjJKAXrBaAR32m4HI1p12AtA4JPA",
  authDomain: "blackbank-bcb85.firebaseapp.com",
  projectId: "blackbank-bcb85",
  storageBucket: "blackbank-bcb85.appspot.com",
  messagingSenderId: "70270462625",
  appId: "1:70270462625:web:c5b9b9538b121fce58dee0",
};

// Initialize Firebase
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
