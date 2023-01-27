import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = process.env.FIREBASE_CONFIG;
console.log(firebaseConfig);
const firebaseApp = firebase.initializeApp(JSON.parse(firebaseConfig));
const db = firebaseApp.firestore();
const auth = firebase.auth(); 
const provider = new GoogleAuthProvider();
const firebaseUtil ={
    db,
    auth,
    provider
}
export default firebaseUtil;
