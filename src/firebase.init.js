// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAKeTfuq1ZN_ixAzhNICeOumrojfQ2Zg8",
  authDomain: "jerins-parlour-bc805.firebaseapp.com",
  projectId: "jerins-parlour-bc805",
  storageBucket: "jerins-parlour-bc805.appspot.com",
  messagingSenderId: "93757342587",
  appId: "1:93757342587:web:cf7f278f8a3ffac3af73de"
};
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;