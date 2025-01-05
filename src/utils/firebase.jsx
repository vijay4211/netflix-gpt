// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAyvulLIyKibNt7qYcdlZY1Egjkc-A_Wmo",
  authDomain: "netflixgpt-db1e1.firebaseapp.com",
  projectId: "netflixgpt-db1e1",
  storageBucket: "netflixgpt-db1e1.firebasestorage.app",
  messagingSenderId: "203881878548",
  appId: "1:203881878548:web:d3b3960698006e8db60301",
  measurementId: "G-9FBYD7F4S3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
