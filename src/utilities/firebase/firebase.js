import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = process.env.REACT_APP_FIREBASE_CONFIG;
const firebaseApp = firebase.initializeApp(JSON.parse(firebaseConfig));
firebaseApp.firestore();
const auth = firebase.auth(); 
const provider = new GoogleAuthProvider();

export  {
    auth,
    provider
};
