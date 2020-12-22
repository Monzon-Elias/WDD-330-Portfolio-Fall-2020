import { qs } from './utilities.js'
import { getFromLS } from '../controller/LS.js'

let jokes = getFromLS('jokes');
let catId = getFromLS('categoryId');
let cats = getFromLS('categories');
console.log(catId);

//category name
let thisCat = cats.find((cat) => cat.catId == catId);
console.log(thisCat.catName);
//jokes in this category
let jokesOnCat = jokes.filter((jokeOnCat) => jokeOnCat.categoryId == catId);
console.log(jokesOnCat);
if (jokesOnCat.length < 1) {
    qs('#joke').innerHTML = `No jokes on -> ${jokesOnCat.catName}`;
    qs('#goBack').innerHTML = '<a href="categoriesAddMode.html">go add some!</a>';
    qs('img[src*="skip_next"]').style.cursor = "not-allowed";
    qs('img[src*="skip_prev"]').style.cursor = "not-allowed";
}
else {
    qs('#joke').innerHTML = jokesOnCat[0].jokeText;
    //qs('#jokesOnCat').innerHTML = `${jokesOnCat.length - 1} jokes in "${thisCat.catName}"`;
}

//next and previous buttons
let i = 0;

qs('img[src*="skip_prev"]').addEventListener('click', () => {
    console.log('it works');
    if (i > 0) {
        qs('#joke').innerHTML = jokesOnCat[--i].jokeText;
    } else {
        i = jokesOnCat.length; //one step beyond elements on the array
        qs('#joke').innerHTML = jokesOnCat[--i].jokeText;
    }
    console.log(i);
    qs('#n').innerHTML = `${(jokesOnCat.length - 1) - i}`;
    qs('#p').innerHTML = `${i}`;
});

qs('img[src*="skip_next"]').addEventListener('click', () => {
    console.log('it works');
    if (i < jokesOnCat.length - 1) {
        qs('#joke').innerHTML = jokesOnCat[++i].jokeText;
    } else {
        i = -1; //one step beyond elements on the array
        qs('#joke').innerHTML = jokesOnCat[++i].jokeText;
    }
    console.log(i);
    qs('#n').innerHTML = `${(jokesOnCat.length - 1) - i}`;
    qs('#p').innerHTML = `${i}`;
});

qs('#p').innerHTML = `${i}`;
qs('#n').innerHTML = `${jokesOnCat.length - 1}`;