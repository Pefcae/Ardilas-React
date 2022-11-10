import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyAKbeFNQ3Z_xatuNWdkatwe44B4AAxIoac",
  authDomain: "ardilas-react.firebaseapp.com",
  projectId: "ardilas-react",
  storageBucket: "ardilas-react.appspot.com",
  messagingSenderId: "823220269674",
  appId: "1:823220269674:web:aad6cbc97a30e29d2a9013"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
