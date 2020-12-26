import { qs, clearInputs } from '../view/utilities.js';
import { addJokeCat, addJoke } from '../controller/controller.js'
import { getFromLS } from './LS.js';

//add a category button
if (qs('#addCatBtn')) {
    qs('#addCatBtn').addEventListener('click', () => {
        addJokeCat();
        if (qs('#addCatInp')) clearInputs('#addCatInp');
        window.location.href = "categoriesAddMode.html";
    });
}

//add joke by category
if (qs('#addJokeBtn')) {
    qs('#addJokeBtn').addEventListener('click', () => {
        let catId = getFromLS('categoryId');
        addJoke(catId);
        if (qs('#addJokeInp')) clearInputs('#addJokeInp');
        location.href = "joke.html";
    });
}