import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDAK88wvJXgbZtsW6oNfm3Y_kXBU2fLuK0",
    authDomain: "urban-db.firebaseapp.com",
    databaseURL: "https://urban-db.firebaseio.com",
    projectId: "urban-db",
    storageBucket: "urban-db.appspot.com",
    messagingSenderId: "44277667646",
    appId: "1:44277667646:web:bfaa648ee0883d3ec1be6f",
    measurementId: "G-KW3KWR4JPV"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;