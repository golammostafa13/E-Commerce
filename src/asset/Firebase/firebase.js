// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAG7SurMyqgEMmVGc5IOe-qAXGdoaId7dA",
  authDomain: "e-commerce-9c67f.firebaseapp.com",
  projectId: "e-commerce-9c67f",
  storageBucket: "e-commerce-9c67f.appspot.com",
  messagingSenderId: "1027609693246",
  appId: "1:1027609693246:web:160593a78e676378cb956f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
let userInfo;
const provider = new GoogleAuthProvider();
export const signUp = () => {

    const auth = getAuth();
    signInWithPopup(auth, provider)
    .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        
        // ...
    }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
    });
}
export const googleSign = {
    signUp,
    userInfo
}