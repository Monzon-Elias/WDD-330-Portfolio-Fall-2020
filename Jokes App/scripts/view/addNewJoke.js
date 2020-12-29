import { getCatName } from '../controller/controller.js';

let catName = getCatName();
document.getElementById('addJokeBtn').innerHTML = `Create Joke on <strong>${catName}</strong>`;