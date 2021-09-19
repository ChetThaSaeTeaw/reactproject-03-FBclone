import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyClJxhNHYZm07ToE-fUKzUpQWfHCAx2Dkw",
    authDomain: "fackbook-clone-9849a.firebaseapp.com",
    projectId: "fackbook-clone-9849a",
    storageBucket: "fackbook-clone-9849a.appspot.com",
    messagingSenderId: "604361779173",
    appId: "1:604361779173:web:495e92256e4f04f77a310c",
    measurementId: "G-2ZM785JZ6W"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth , provider };
  export default db;