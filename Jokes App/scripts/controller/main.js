import { qs, clearInputs } from '../view/utilities.js';
import { addJokeCat } from '../controller/controller.js'

//add a category button
if(qs('#addCatBtn')){
qs('#addCatBtn').addEventListener('click', () => {
    addJokeCat();
    if(qs('#addCatInp')) clearInputs('#addCatInp');
    window.location.href="categories.html";
});
}