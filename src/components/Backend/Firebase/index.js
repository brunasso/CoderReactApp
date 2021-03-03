import firebase from 'firebase/app'
import '@firebase/firestore'

const APIKEY = process.env.REACT_APP_FIREBASE_APIKEY
const APIID = process.env.REACT_APP_FIREBASE_APIID

const app = firebase.initializeApp({
    apiKey: APIKEY,
    authDomain: "ecommerce-react-11365.firebaseapp.com",
    projectId: "ecommerce-react-11365",
    storageBucket: "ecommerce-react-11365.appspot.com",
    messagingSenderId: "448960095528",
    appId: APIID
  })

  export function getFirebase(){
      return app;
  }

export function getFirestore(){
      return firebase.firestore(app);
  }

