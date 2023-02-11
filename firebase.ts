import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDVux-i_dFQMpjV0uZFBd5KO6ElSzExrH8",
  authDomain: "chatgpt-messenger-d6bf9.firebaseapp.com",
  projectId: "chatgpt-messenger-d6bf9",
  storageBucket: "chatgpt-messenger-d6bf9.appspot.com",
  messagingSenderId: "746077314269",
  appId: "1:746077314269:web:5ec3704b9e8b3f3a514f34",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
