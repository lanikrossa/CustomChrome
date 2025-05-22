import { initializeApp } from "./lib/firebase-app.js";
import { getDatabase } from "./lib/firebase-database.js";


const firebaseConfig = {
    apiKey: "AIzaSyAGqWIdXmErid7-GMzP_VuRuk3L_1bpkms",
    authDomain: "valentinechrome-b2e5b.firebaseapp.com",
    databaseURL: "https://valentinechrome-b2e5b-default-rtdb.firebaseio.com",
    projectId: "valentinechrome-b2e5b",
    storageBucket: "valentinechrome-b2e5b.firebasestorage.app",
    messagingSenderId: "1067153186972",
    appId: "1:1067153186972:web:a4efdf39d078fd3c764d59",
  };
  

// // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const db = getDatabase(app);
  

 export {app, db};