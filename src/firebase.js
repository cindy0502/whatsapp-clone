// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDFAXIvQuGKAPpDsoLBVMasD-_ShYnrnnk",
  authDomain: "whats-app-clone-bfa9e.firebaseapp.com",
  databaseURL: "https://whats-app-clone-bfa9e.firebaseio.com",
  projectId: "whats-app-clone-bfa9e",
  storageBucket: "whats-app-clone-bfa9e.appspot.com",
  messagingSenderId: "96153353171",
  appId: "1:96153353171:web:e1c1cb4223ddfb0906cd26",
  measurementId: "G-CGQ4W2V831",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
