import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
const firebaseConfig = {
  apiKey: "",
  authDomain: "js-trivia-c6fbd.firebaseapp.com",
  projectId: "js-trivia-c6fbd",
  storageBucket: "js-trivia-c6fbd.appspot.com",
  messagingSenderId: "",
  appId: "",
};
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const google = new firebase.auth.GoogleAuthProvider();
const facebookk = new firebase.auth.FacebookAuthProvider();
export { auth, google, facebookk };
export { db };
export default { firebase };
