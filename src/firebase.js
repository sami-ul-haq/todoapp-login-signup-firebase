import firebase from "firebase";
// Your web app's Firebase configuration
let firebaseConfig = {
  apiKey: "AIzaSyC_a1xyEprXFf3s8KEkvpbi5VsTDalj8G4",
  authDomain: "login-signup-e87ab.firebaseapp.com",
  projectId: "login-signup-e87ab",
  storageBucket: "login-signup-e87ab.appspot.com",
  messagingSenderId: "895988259982",
  appId: "1:895988259982:web:07b6dcb08478e587383ddf",
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };
