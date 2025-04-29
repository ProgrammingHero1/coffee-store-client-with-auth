// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAuRHB6g1ANIqWXPzYDa0HWHHKp60PHLaU",
  authDomain: "coffee-store-app-9234a.firebaseapp.com",
  projectId: "coffee-store-app-9234a",
  storageBucket: "coffee-store-app-9234a.firebasestorage.app",
  messagingSenderId: "987759883689",
  appId: "1:987759883689:web:4a4f96063ff23ddaf4c0b8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);