import { qs } from './utilities.js'
import { getFromLS } from '../controller/LS.js'

let jokesOnCat = getFromLS('jokesOnCategory');
let categories = getFromLS('categories');
let catId = getFromLS('categoryId');

function getJokesByCategory() {
console.log(catId);
let catName = categories.find((cat) => cat.catId == catId);
if(jokesOnCat.length < 1) { 
    qs('#joke').innerHTML = `No jokes on -> ${catName.catName}`;
    qs('#goBack').innerHTML = '<a href="categoriesAddMode.html">go add some!</a>';
}
    else { 
        qs('#joke').innerHTML = jokesOnCat[0].jokeText;
        qs('#jokesOnCat').innerHTML = `Number of jokes in  "${catName.catName}" -> ${jokesOnCat.length}`;
    }
}

let i = 0;
function noPrevNext() {
    if(i == jokesOnCat.length) {
        qs('img[src*="skip_next"]').style.cursor = "not-allowed";
    }if (i == 0) qs('img[src*="skip_prev"]').style.cursor = "not-allowed";
}

function next() {
        qs('#joke').innerHTML = jokesOnCat[++i].jokeText;
}

function prev() {
        qs('#joke').innerHTML = jokesOnCat[--i].jokeText;
}
getJokesByCategory();
noPrevNext();

qs('img[src*="skip_prev"]').addEventListener( 'click', () => {
    console.log('it works');
    prev();
});
qs('img[src*="skip_next"]').addEventListener( 'click', () => {
    console.log('it works');
    next();
});
