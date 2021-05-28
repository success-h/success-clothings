/** @format */

import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBfOwEyuNnLcvmBX4hg-TqJJSP0HNWz66Q",
  authDomain: "crown-db-b6075.firebaseapp.com",
  projectId: "crown-db-b6075",
  storageBucket: "crown-db-b6075.appspot.com",
  messagingSenderId: "438122790898",
  appId: "1:438122790898:web:6f899dce3ef0aa0d75f56b",
  measurementId: "G-58F3QSXTZL",
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
