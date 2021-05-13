import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config = {
    apiKey: "AIzaSyCaGiWifhZASlcLKmsQ0dwBP6EBRgclC-s",
    authDomain: "crwn-db-90f83.firebaseapp.com",
    projectId: "crwn-db-90f83",
    storageBucket: "crwn-db-90f83.appspot.com",
    messagingSenderId: "500913481838",
    appId: "1:500913481838:web:5c556e827d18c372d65e7f",
    measurementId: "G-TYS2T5PD6D"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;