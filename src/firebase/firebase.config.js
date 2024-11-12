// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAYq02a0o2RdIu7Eabr9Prs4_b1FfTgrc",
  authDomain: "fir-first-concep-project.firebaseapp.com",
  projectId: "fir-first-concep-project",
  storageBucket: "fir-first-concep-project.firebasestorage.app",
  messagingSenderId: "1002224188891",
  appId: "1:1002224188891:web:c064a01b81e5d02b4b7bfe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;