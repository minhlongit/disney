import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDQUpb2WLlmTYN_end5Hb7MQte7ZjGn9Ek",
  authDomain: "disneyplus-clone-34e2d.firebaseapp.com",
  projectId: "disneyplus-clone-34e2d",
  storageBucket: "disneyplus-clone-34e2d.appspot.com",
  messagingSenderId: "825163122293",
  appId: "1:825163122293:web:6bd616ddb486048b605a3c",
  measurementId: "G-JCZ4RV8G26",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
