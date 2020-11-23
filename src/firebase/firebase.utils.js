import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCuDF6XnAsOMVTUmtxWduec0PDQXYRGF_Q",
    authDomain: "maxicloth-5f5ba.firebaseapp.com",
    databaseURL: "https://maxicloth-5f5ba.firebaseio.com",
    projectId: "maxicloth-5f5ba",
    storageBucket: "maxicloth-5f5ba.appspot.com",
    messagingSenderId: "304880267062",
    appId: "1:304880267062:web:93bf5d40e802366fe70d97",
    measurementId: "G-RJMS3QWG7F"
  }

  firebase.initializeApp(config);