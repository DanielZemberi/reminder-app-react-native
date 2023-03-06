// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5SzO031CqzVcu3l1uCtwv4qGMu_TQmj4",
  authDomain: "reminder-app-4fe37.firebaseapp.com",
  projectId: "reminder-app-4fe37",
  storageBucket: "reminder-app-4fe37.appspot.com",
  messagingSenderId: "1072738951560",
  appId: "1:1072738951560:web:de516b99c163742a305a3d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { auth, db };
