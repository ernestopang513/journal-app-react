import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// console.log(process);
// console.log(process.env);

const firebaseConfig = {
    apiKey: process.env.REACT_APP_APIKEY,
    authDomain: process.env.REACT_APP_AUTHDOMAIN,
    projectId: process.env.REACT_APP_PROJECTID,
    storageBucket: process.env.REACT_APP_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
    appId: process.env.REACT_APP_APPID, 
  };

  // //testing
  // const firebaseConfigTesting = {
  //   apiKey: "AIzaSyBlHmNA5sYt2A-rf1KwWO49OiK27kIrO5E",
  //   authDomain: "testing-9c628.firebaseapp.com",
  //   projectId: "testing-9c628",
  //   storageBucket: "testing-9c628.appspot.com",
  //   messagingSenderId: "721794549504",
  //   appId: "1:721794549504:web:53080f4d0194b944c355e5"
  // };
  
  // if(process.env.NODE_ENV === 'test'){

  //   firebase.initializeApp(firebaseConfigTesting);  
  
  // }else{
  //   //dev/prod
  //   firebase.initializeApp(firebaseConfig);
  
  // }
  
    firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}
