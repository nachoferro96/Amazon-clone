import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBMGb3lpabNl5AGdnuaQBEqd8R7CLqe92Q",
    authDomain: "remake-536cb.firebaseapp.com",
    databaseURL: "https://remake-536cb.firebaseio.com",
    projectId: "remake-536cb",
    storageBucket: "remake-536cb.appspot.com",
    messagingSenderId: "1003237977735",
    appId: "1:1003237977735:web:7c5914fc1fe16674dfd222",
    measurementId: "G-91JTHSEKL9"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };
  