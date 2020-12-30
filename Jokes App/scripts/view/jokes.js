import { qs } from './utilities.js'
import { getFromLS } from '../controller/LS.js'
import { deleteJoke } from '../controller/controller.js';
import CircularListWithIndex from '../model/CircularListWithIndex.js';

let jokes = getFromLS('jokes');
let catId = getFromLS('categoryId');
let cats = getFromLS('categories');
console.log('cat id: ' + catId);

//category name
let thisCat = cats.find((cat) => cat.catId == catId);
console.log('cat name: ' + thisCat.catName);
//jokes in this category
let jokesOnCat = jokes.filter((jokeOnCat) => jokeOnCat.categoryId == catId);
console.log(jokesOnCat);

if (jokesOnCat.length == 0) {
    qs('#joke').innerHTML = `<div>No jokes on -> ${thisCat.catName}</div>`;
    qs('#goBack').innerHTML = '<a href="addNewJoke.html">go add some!</a>';
    //qs('img[src*="skip_next"]').style.pointerEvents="none";
    qs('img[src*="skip_next"]').style.cursor = "not-allowed";
    //qs('img[src*="skip_prev"]').style.pointerEvents="none";
    qs('img[src*="skip_prev"]').style.cursor = "not-allowed";
}
else {
    qs('#joke').innerHTML =
        `<div class="flexOnIt" data-id="${jokesOnCat[jokesOnCat.length - 1].jokeId}"> 
            ${jokesOnCat[jokesOnCat.length - 1].jokeText}
            <img src='images/delete-24px.svg'>
        </div>`;
    qs('#goBack').innerHTML =
        `<a href="addNewJoke.html">add more jokes on <strong>${thisCat.catName}</strong>!</a>`;
}

let i = jokesOnCat.length - 1;
console.log(i);

let cl = new CircularListWithIndex(jokesOnCat, i);
//next joke button
qs('img[src*="skip_next"]').addEventListener('click', () => {
    console.log('it works');
    let index = cl.moveIndexNext();
    qs('#joke').innerHTML =
        `<div class="flexOnIt" data-id="${cl.getCurrentItem().jokeId}"> 
            ${cl.getCurrentItem().jokeText}
            <img data-id="${cl.getCurrentItem().jokeId}" src='images/delete-24px.svg'>
        </div>`;
        qs('#n').innerHTML = `${(jokesOnCat.length - 1) - index}`;
        qs('#p').innerHTML = `${index}`;
        
        //delete joke feature
        qs('#joke img').addEventListener('click', (e) => {
            deleteJoke(e);
            console.log(e);
        });
});

//previous joke button 
qs('img[src*="skip_prev"]').addEventListener('click', () => {
    console.log('it works');
    let index = cl.moveIndexPrevious();
    qs('#joke').innerHTML =
        `<div class="flexOnIt" data-id="${cl.getCurrentItem().jokeId}"> 
            ${cl.getCurrentItem().jokeText}
            <img data-id="${cl.getCurrentItem().jokeId}" src='images/delete-24px.svg'>
        </div>`;
        qs('#n').innerHTML = `${(jokesOnCat.length - 1) - index}`;
        qs('#p').innerHTML = `${index}`;

        //delete joke feature
        qs('#joke img').addEventListener('click', (e) => {
            deleteJoke(e);
            console.log(e);
        });
});

//delete joke feature
if (jokesOnCat.length > 0)
    qs('#joke img').addEventListener('click', (e) => { deleteJoke(e); });

//default display little numbers next to next & prev buttons
qs('#p').innerHTML = `${jokesOnCat.length - 1}`;
qs('#n').innerHTML = 0;