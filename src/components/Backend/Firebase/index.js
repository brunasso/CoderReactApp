import firebase from 'firebase/app'
import '@firebase/firestore'

const app = firebase.initializeApp({
    apiKey: "AIzaSyDnnbrddtlJtfdcxj9o0rNiUU3UALitcmE",
    authDomain: "ecommerce-react-11365.firebaseapp.com",
    projectId: "ecommerce-react-11365",
    storageBucket: "ecommerce-react-11365.appspot.com",
    messagingSenderId: "448960095528",
    appId: "1:448960095528:web:16fea056b18ef276e41c1d"
  })

  export function getFirebase(){
      return app;
  }

export function getFirestore(){
      return firebase.firestore(app);
  }

