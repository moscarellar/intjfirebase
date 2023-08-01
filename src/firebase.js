import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtWL-ws1VMOR3ilj3Qwy0a9D_squri2rY",
  authDomain: "intjgrowth.firebaseapp.com",
  projectId: "intjgrowth",
  storageBucket: "intjgrowth.appspot.com",
  messagingSenderId: "748882975649",
  appId: "1:748882975649:web:55f363284c19ac982c09e0",
  measurementId: "G-NNCFKDKBSR"
};

const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth and Google Auth Provider
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };