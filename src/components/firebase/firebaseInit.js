import firebase from "firebase/app";
import "firebase/firestore"
import "firebase/auth"
import firebaseConfig from "./firebaseConfig"

const firebaseApp = firebase.initializeApp(firebaseConfig)
export const auth = firebase.auth()

export default firebaseApp.firestore()