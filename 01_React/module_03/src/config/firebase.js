import * as firebase from "firebase"

  // Your web app's Firebase configuration
  
var firebaseConfig = {
    apiKey: "AIzaSyDBkwZoH91V4CD17w6j-p-iUmTxSiJ2Nrg",
    authDomain: "react-modulo-03-736c8.firebaseapp.com",
    databaseURL: "https://react-modulo-03-736c8.firebaseio.com",
    projectId: "react-modulo-03-736c8",
    storageBucket: "react-modulo-03-736c8.appspot.com",
    messagingSenderId: "221696108608",
    appId: "1:221696108608:web:12aca12212eaad521357a5",
    measurementId: "G-T3T5X162RE"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
export default firebase;