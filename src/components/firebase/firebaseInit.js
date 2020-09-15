import firebase from "firebase/app";
import * as firebaseui from "firebaseui";
import "firebase/firestore"
import "firebase/auth"
import "firebase/storage"
import "firebaseui/dist/firebaseui.css"
import firebaseConfig from "./firebaseConfig"

const firebaseApp = firebase.initializeApp(firebaseConfig)


// export const auth = firebase.auth()
export const storage = firebase.storage()
// export default firebaseui
export default firebaseApp.firestore()