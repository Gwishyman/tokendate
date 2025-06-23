import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBxyP--69GCgNN0oyDECCFaF7fvr6DwX2s",
  authDomain: "tokendate-62a5f.firebaseapp.com",
  projectId: "tokendate-62a5f",
  storageBucket: "tokendate-62a5f.appspot.com",
  messagingSenderId: "676944206497",
  appId: "1:676944206497:web:f59d7038d5cb228aa16ee0"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
window.firebaseDB = db; // make globally accessible
