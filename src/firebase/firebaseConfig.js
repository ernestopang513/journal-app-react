import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCWgJ3VSdi-EhJ0AO7MBRDeGehSpcg35hY",
    authDomain: "journal-app-a1646.firebaseapp.com",
    projectId: "journal-app-a1646",
    storageBucket: "journal-app-a1646.appspot.com",
    messagingSenderId: "112695409011",
    appId: "1:112695409011:web:504613aa3da45ac7c72d06"
  };

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}
