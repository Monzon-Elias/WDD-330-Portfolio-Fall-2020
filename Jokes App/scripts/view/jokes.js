import { qs } from './utilities.js'
import { getFromLS } from '../controller/LS.js'


function getJokesByCategory() {
let jokesOnCat = getFromLS('jokesOnCategory');
let categories = getFromLS('categories');
let catId = getFromLS('categoryId');
console.log(catId);
let catName = categories.find((cat) => cat.catId == catId);
if(jokesOnCat.length < 1) { 
    qs('#joke').innerHTML = `No jokes on -> ${catName.catName}`;
    qs('#goBack').innerHTML = '<a href="categoriesAddMode.html">go add some!</a>';
}
    else qs('#joke').innerHTML = jokesOnCat[0].jokeText;
}

function nextItem() {
    i = i + 1; // increase i by one
    i = i % arr.length; // if we've gone too high, start from `0` again
    return arr[i]; // give us back the item of where we are now
}

function prevItem() {
    if (i === 0) { // i would become 0
        i = arr.length; // so put it at the other end of the array
    }
    i = i - 1; // decrease by one
    return arr[i]; // give us back the item of where we are now
}
getJokesByCategory();