 import { CONFIG } from './config.js';
 import { displayAffirmation } from './tiles/love.js';
 import { displayFortune } from './tiles/fortune.js';
 import { displayFrog } from './tiles/frog.js';

document.getElementById("search").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        window.location.href = "https://www.google.com/search?q=" + encodeURIComponent(this.value);
    }
}); 

const keys = Object.keys(CONFIG.FAVORITE_PLACES);
const randomIndex = Math.floor(Math.random() * keys.length);
const randomKey = keys[randomIndex];
const selectedImage = CONFIG.FAVORITE_PLACES[randomKey];
document.body.style.background = `url('${selectedImage}') center/cover no-repeat`;
document.getElementById("place-name").textContent = randomKey;

  document.addEventListener("DOMContentLoaded", () => {
    const loveTile = document.getElementById("love-tile");
    if (loveTile) {
        loveTile.addEventListener("click", displayAffirmation);
    }
  });

  document.addEventListener("DOMContentLoaded", () => {
    const fortuneTile = document.getElementById("fortune-tile");
    if (fortuneTile) {
        fortuneTile.addEventListener("click", displayFortune);
    }
  });

  document.addEventListener("DOMContentLoaded", () => {
    const frogTile = document.getElementById("frog-tile");
    if (frogTile) {
        frogTile.addEventListener("click", displayFrog);
    }
  });


