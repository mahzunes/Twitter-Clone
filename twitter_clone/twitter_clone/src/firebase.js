import { initializeApp } from "firebase/app";
import {  getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB5lVhuXkBWm7lPXe-xgFfhNfj2ce5d9Ao",
    authDomain: "clone-twitter-34519.firebaseapp.com",
    projectId: "clone-twitter-34519",
    storageBucket: "clone-twitter-34519.appspot.com",
    messagingSenderId: "642698556262",
    appId: "1:642698556262:web:1586cc2e39170f35f0cea7"
  };

  const app = initializeApp(firebaseConfig);

  


  const db = getFirestore(app);

  

  export default db;
  

