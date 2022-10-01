// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCY2D8GjPAIvpcYMVLovhozAL1hobV0XoM",
  authDomain: "todoapp-db-3d16a.firebaseapp.com",
  projectId: "todoapp-db-3d16a",
  storageBucket: "todoapp-db-3d16a.appspot.com",
  messagingSenderId: "188528963449",
  appId: "1:188528963449:web:4f3775736e712baa0ac9a8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export {db};