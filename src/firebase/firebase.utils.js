import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDtHTE4OFFihp-D1rJ2my4o9UHSAU3Cn-w",
  authDomain: "crown-db-21296.firebaseapp.com",
  databaseURL: "https://crown-db-21296.firebaseio.com",
  projectId: "crown-db-21296",
  storageBucket: "crown-db-21296.appspot.com",
  messagingSenderId: "225998253874",
  appId: "1:225998253874:web:6c2a65a3f4f5e86d20712b"
};

export const createProfileUserDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
