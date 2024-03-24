import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAEE-73sWCKJCgi1SzTL2Zu-c42-yaPsCg",
    authDomain: "fb-messenger-498e2.firebaseapp.com",
    projectId: "fb-messenger-498e2",
    storageBucket: "fb-messenger-498e2.appspot.com",
    messagingSenderId: "524549182158",
    appId: "1:524549182158:web:1310e64780f7b12583769f",
    measurementId: "G-TX0NG1D31X"
})


const db = firebaseApp.firestore(); //initializing the app using firestore

export default db;
