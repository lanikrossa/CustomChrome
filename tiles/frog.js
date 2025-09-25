import {db} from "../firebase/firebase-initializer.js";
import { ref, get } from "../firebase/lib/firebase-database.js";

export async function displayFrog() {
    const dbRef = ref(db, 'Frogs');
    const snapshot = await get(dbRef);

    if (snapshot.exists()) {
        const dates = Object.keys(snapshot.val());
        const randomDate = dates[Math.floor(Math.random() * dates.length)];

        const frogs = Object.keys(snapshot.val()[randomDate]);
        const randomFrog = frogs[Math.floor(Math.random() * frogs.length)];

        const frogData = snapshot.val()[randomDate][randomFrog];

        // Update HTML content
        const display = document.getElementById('display-choice');
        display.innerHTML = `<div id="frog">
        <div class="frog-text-content">
            <h2 id="frog-name"></h2>
            <p id="frog-description"></p>
        </div>
        <img id="frog-image" src="" alt="Frog Image">
    </div>`;

        document.getElementById('frog-name').innerText = randomFrog;
        document.getElementById('frog-image').src = frogData.img;
        document.getElementById('frog-description').innerText = frogData.description;

    } else {
        console.log("No data available");
    }
}