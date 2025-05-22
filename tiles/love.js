import {db} from "../firebase/firebase-initializer.js";
import { ref, get } from "../firebase/lib/firebase-database.js";

// Function to get a random affirmation
async function getRandomAffirmation() {
    
    const affirmationsRef = ref(db, "affirmations");
       try {
           const snapshot = await get(affirmationsRef);
           if (snapshot.exists()) {
               const affirmations = snapshot.val(); // Get the list of affirmations
               const keys = Object.keys(affirmations); // Get the keys (if stored as an object)
               const randomKey = keys[Math.floor(Math.random() * keys.length)];
               console.log("Random Affirmation:", affirmations[randomKey]);
               return affirmations[randomKey];
           } else {
               console.log("No affirmations found.");
               return null;
           }
       } catch (error) {
           console.error("Error fetching affirmations:", error);
           return null;
       }
   }

   export async function displayAffirmation() {
    document.getElementById("google-logo").style.display = "none";
    const affirmation = await getRandomAffirmation();
    const el = document.getElementById("display-choice");
    el.innerText = affirmation || "No affirmation found.";
}
