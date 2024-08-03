// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXZ1L-gWixRLVd2_DnSDa_RTVCklhlWZU",
  authDomain: "netflix-62311.firebaseapp.com",
  projectId: "netflix-62311",
  storageBucket: "netflix-62311.appspot.com",
  messagingSenderId: "291960274635",
  appId: "1:291960274635:web:6877e11065bd902aa4654e",
  measurementId: "G-B4K8F4TRYR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);