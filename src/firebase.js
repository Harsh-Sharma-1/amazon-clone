import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC7iBzI-g4UV2rIlgc6AHgrDpRSgcGxYKw",
  authDomain: "clone-c3c0f.firebaseapp.com",
  projectId: "clone-c3c0f",
  storageBucket: "clone-c3c0f.appspot.com",
  messagingSenderId: "831295107010",
  appId: "1:831295107010:web:07f0643b04dc411659705b"
};

const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
const auth = app.auth();

export {db, auth};