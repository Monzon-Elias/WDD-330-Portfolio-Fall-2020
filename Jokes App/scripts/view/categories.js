//import { displayCategories, displayCategoriesAddMode } from '../controller/controller.js';
import { displayCategories } from '../controller/controller.js';
import { getFromLS, saveToLS } from '../controller/LS.js';
import { qs, lastCatVisitedEffect } from './utilities.js';

    //getting lists from the LS
    let catId = getFromLS('categoryId');
    let categories = getFromLS('categories');
    console.log(categories);

    //if there is no array on the LS, create one to make the app works
    if (categories === null) {
        categories = [];
        saveToLS('categories', categories);
    } else displayCategories();

    //messages to the user
    if (categories.length < 1) {
        qs('.emptyArray').innerHTML = 'No jokes in memory =('; 
        qs('.goBack').innerHTML = '<a href="categoriesAddMode.html">go add some!</a>';
    } 

    //flashing effect on last visited category
    lastCatVisitedEffect(catId);