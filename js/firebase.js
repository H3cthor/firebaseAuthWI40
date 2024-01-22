import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js"
import { getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
// import { getFirestore } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore-js"

const firebaseConfig = {
    apiKey: "AIzaSyD2sMRd4rrZnTyhbtUC6QbMoPaGNSrVhmM",
    authDomain: "web40-64817.firebaseapp.com",
    projectId: "web40-64817",
    storageBucket: "web40-64817.appspot.com",
    messagingSenderId: "406928613791",
    appId: "1:406928613791:web:d31613e6f621bc1304ddaa",
    measurementId: "G-TCW3EHRDTC",
  };

  // Initialize Firebase
  export const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
//   export const db = getFirestore(app)