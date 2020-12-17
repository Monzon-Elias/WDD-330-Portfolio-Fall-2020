//import { displayCategories, displayCategoriesAddMode } from '../controller/controller.js';
import { displayCategories } from '../controller/controller.js';
import { getFromLS, saveToLS } from '../controller/LS.js';
import { qs } from './utilities.js';

    //getting lists from the LS
    let jokes = getFromLS('jokes');
    //let jokesOnCategory = getFromLS('jokesOnCategory');
    let categories = getFromLS('categories');
    console.log(categories);

    //if there is no array on the LS, create one to make the app works
    if (categories === null) {
        categories = [];
        saveToLS('categories', categories);
    } else displayCategories();

    //messages to the user
    if (categories.length < 1) qs('.emptyArray').innerHTML = 'No jokes in memory =(';  

    // if (jokes === null) {
    //     jokes = [];
    //     saveToLS('jokes', jokes);
    // }
