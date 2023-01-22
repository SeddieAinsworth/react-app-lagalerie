
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBEjzSCbb9bY5ycQYsdVrOBSr3NYZbXfwI",
  authDomain: "lagallery-7dffe.firebaseapp.com",
  projectId: "lagallery-7dffe",
  storageBucket: "lagallery-7dffe.appspot.com",
  messagingSenderId: "890725755949",
  appId: "1:890725755949:web:e2ea6f1ebf0dea90f81ca4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage =  getStorage(app);

export default app;