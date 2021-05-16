import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyADEFwKikB7HqSPHJBAI4A7X_H-lBVR_ig",
  authDomain: "whatsapp-2-9e2eb.firebaseapp.com",
  projectId: "whatsapp-2-9e2eb",
  storageBucket: "whatsapp-2-9e2eb.appspot.com",
  messagingSenderId: "369113307955",
  appId: "1:369113307955:web:94307adc6ad8bc1ea27c46",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
