// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyBGfMjurASS-8HR_8y1ymI05bEkXPgqcmI",
    authDomain: "clone-66cd5.firebaseapp.com",
    databaseURL: "https://clone-66cd5.firebaseio.com",
    projectId: "clone-66cd5",
    storageBucket: "clone-66cd5.appspot.com",
    messagingSenderId: "61130919752",
    appId: "1:61130919752:web:0de1c4d0209d7dfec62d7d",
    measurementId: "G-2412VGKG6C"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };