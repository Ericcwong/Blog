import firebase from "firebase/app";
import "firebase/firestore"
import "firebase/auth"
import "firebase/storage"
import firebaseConfig from "./firebaseConfig"

const firebaseApp = firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const storage = firebase.storage()

export default firebaseApp.firestore()