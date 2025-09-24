import { initializeApp } from "./lib/firebase-app.js";
import { getDatabase } from "./lib/firebase-database.js";
import { CONFIG } from '../config.js';



  

// // Initialize Firebase
 const app = initializeApp(CONFIG.firebaseConfig);
 const db = getDatabase(app);
  

 export {app, db};