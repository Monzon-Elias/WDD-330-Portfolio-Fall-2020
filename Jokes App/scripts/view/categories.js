//import { displayCategories, displayCategoriesAddMode } from '../controller/controller.js';
import { displayCategories } from '../controller/controller.js';
import { getFromLS, saveToLS } from '../controller/LS.js';

    //getting lists from the LS
    let jokes = getFromLS('jokes');
    let categories = getFromLS('categories');
    console.log(categories);

    //if there is no array on the LS, create one to make the app works
    if (categories === null) {
        categories = [];
        saveToLS('categories', categories);
    } else displayCategories();
    
    if (jokes === null) {
        jokes = [];
        saveToLS('jokes', jokes);
    }

//export let object = {addMode: false};
// (object.addMode == true) 
// ? displayCategoriesAddMode()
// : displayCategories();
