import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  // Your Firebase SDK configuration here
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const db = firebase.firestore();
