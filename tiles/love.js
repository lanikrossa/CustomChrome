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
    const affirmation = await getRandomAffirmation();
    // Get the google-logo container itself
    const el = document.getElementById("display-choice");
    // Replace its content with the bubble
        el.innerHTML = `
        <div class="bubble">
            ${affirmation || "No affirmation found."}
        </div>
    `;
}
