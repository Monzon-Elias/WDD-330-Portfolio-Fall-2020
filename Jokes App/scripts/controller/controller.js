import { qs } from '../view/utilities.js'
import Joke from '../model/Joke.js'
import Category from '../model/Category.js';
import { getFromLS, saveToLS, removeFromLS } from '../controller/LS.js';

//add a new Joke's category
export function addJokeCat() {
    const cat = new Category();
    cat.catName = qs('#addCatInp').value;
    let categories = [];
    categories = getFromLS('categories');
    if (categories == null)
        categories = [];
    categories.push(cat);
    saveToLS('categories', categories);
    console.log(categories);
}

//get category name
export function getCatName() {
    let cats = getFromLS('categories');
    let catId = getFromLS('categoryId');
    //category name
    let thisCat = cats.find((cat) => cat.catId == catId);
    console.log(thisCat.catName);
    return thisCat.catName;
}

//add a new joke
export function addJoke(catId) {
    const joke = new Joke();
    joke.categoryId = catId;
    joke.jokeText = qs('#addJokeInp').value;
    let jokes = [];
    jokes = getFromLS('jokes');
    if (jokes == null)
        jokes = [];
    jokes.push(joke);
    saveToLS('jokes', jokes);
    console.log(jokes);
}

//this method prints the joke's categories in the categories.html page
export function displayCategories() {
    if (qs('#catContainerId')) {
        qs('#catContainerId').innerHTML = '';
        let categories = [];
        categories = getFromLS('categories');
        categories.forEach(
            (category) => {
                qs('#catContainerId').innerHTML +=
                    `<div class="flexOnIt">
                        <div class="button" data-id="${category.catId}">
                           ${category.catName}
                           <span class="spanMessage"></span>
                        </div>
                        <div>
                            <img class="delete button" data-id='${category.catId}' src='images/delete-24px.svg'>
                        </div>
                    </div>`;
            });

        //delete category
        let cats = document.querySelectorAll('img[src*="del"]');
        console.log(cats);
        cats.forEach((cat) => {
            cat.addEventListener('click', deleteCategory);
        });

        //store category id on LS
        cats = document.querySelectorAll('div.button');
        cats.forEach((cat) => {
            cat.addEventListener('click', (e) => {
                storeCatIdOnLS(e);
                location.href = "joke.html";
            });
        });
    }
}

//this method prints the joke's categories in the categories.html page on add mode
export function displayCategoriesAddMode() {
    if (qs('#catContainerAddMode')) {
        qs('#catContainerAddMode').innerHTML = '';
        let categories = [];
        categories = getFromLS('categories');
        qs('#catContainerAddMode').innerHTML =
            `<a id="adNeCa" href="addNewCategory.html" class="button submit">New Joke Category?</a>`;
        categories.forEach(
            (category) => {
                qs('#catContainerAddMode').innerHTML +=
                    `<div class="flexOnIt">
                    <div class="button flexOnIt" data-id="${category.catId}">
                        <span></span>
                        ${category.catName}
                        <span class="spanMessage"></span>
                    </div>
                    <div>
                        <img class="delete button" data-id='${category.catId}' src='images/delete-24px.svg'>
                    </div>
                </div>`;
            });

        //delete category
        let cats = document.querySelectorAll('img[src*="del"]');
        cats.forEach((cat) => {
            cat.addEventListener('click', deleteCategory);
        });

        //store category id on LS
        cats = document.querySelectorAll('div.button');
        cats.forEach((cat) => {
            cat.addEventListener('click', (e) => {
                storeCatIdOnLS(e);
                location.href = "addNewJoke.html";
            });
        });
    }
}

//delete category item
function deleteCategory(e) {
    let categId = e.target.getAttribute('data-id');
    console.log(categId);
    let jokes = [];
    jokes = getFromLS('jokes');
    let jokesOnCat = jokes.filter((jokeOnCat) => jokeOnCat.categoryId == categId);
    if (window.confirm(`You will delete ${jokesOnCat.length} elements pertaining to this category`)) {
        let categories = [];
        categories = getFromLS('categories');
        let cat = categories.find((cat) => cat.catId == categId);
        const index = categories.indexOf(cat);
        console.log(index);
        purgeJokeArray(categId);
        categories.splice(index, 1);
        //save new categories array to LS
        saveToLS('categories', categories);
        //list the budget items
        displayCategories();
        location.reload();
    } else return;
}

//delete joke
export function deleteJoke(e) {
    let jId = e.target.getAttribute('data-id');
    console.log(jId);
    let jokes = [];
    jokes = getFromLS('jokes');
    let thisJoke = jokes.find((joke) => joke.jokeId == jId);
    const jIndex = jokes.indexOf(thisJoke);
    console.log(jIndex);
    jokes.splice(jIndex, 1);
    saveToLS('jokes', jokes);
    location.reload();
}

//filter jokes by cat and remove them from the jokes array
function purgeJokeArray(catId) {
    let jokes = [];
    jokes = getFromLS('jokes');
    let purgedJokes = [];
    //mutate the jokes array purging jokes from all jokes with joke.categoryId == catId
    purgedJokes = jokes.filter(joke => joke.categoryId !== catId);
    removeFromLS('jokes');
    saveToLS('jokes', purgedJokes);
}

//store cat id on LS
function storeCatIdOnLS(e) {
    removeFromLS('categoryId');
    let catId = e.target.getAttribute('data-id');
    saveToLS('categoryId', catId);
    console.log('cat id: ' + catId);
}


// let i = 0;
// //previous joke button on jokes.html
// export function nextJokeButton(jokesOnCat) {
//     i = ++i;
//     console.log(i);
//         if (i < jokesOnCat.length - 1) {
//             qs('#joke').innerHTML =
//                 `<div class="flexOnIt" data-id="${jokesOnCat[(jokesOnCat.length - 1) + i].jokeId}"> 
//                     ${jokesOnCat[(jokesOnCat.length - 1) + i].jokeText}
//                     <img data-id="${jokesOnCat[(jokesOnCat.length - 1) + i].jokeId}" src='images/delete-24px.svg'>
//                 </div>`;
//         } else {
//             i = 0; //one step beyond elements on the array
//             qs('#joke').innerHTML =
//                 `<div class="flexOnIt" data-id="${jokesOnCat[(jokesOnCat.length - 1) + i].jokeId}"> 
//                     ${jokesOnCat[(jokesOnCat.length - 1) + i].jokeText}
//                     <img data-id="${jokesOnCat[(jokesOnCat.length - 1) + i].jokeId}" src='images/delete-24px.svg'>
//                 </div>`;
//         }
//         //delete joke feature
//         qs('#joke img').addEventListener('click', (e) => {
//             deleteJoke(e);
//             console.log(e);
//         });

//         console.log(i);
//         qs('#n').innerHTML = `${(jokesOnCat.length - 1) - i}`;
//         qs('#p').innerHTML = `${i}`;
//     }

// //next joke button
// export function prevJokeButton(jokesOnCat) {
    
//         if (i > 0) {
//             qs('#joke').innerHTML =
//                 `<div class="flexOnIt" data-id="${jokesOnCat[i].jokeId}"> 
//                     ${jokesOnCat[i].jokeText}
//                     <img data-id="${jokesOnCat[i].jokeId}" src='images/delete-24px.svg'>
//                 </div>`;
//         } else {
//             i = jokesOnCat.length; //one step beyond elements on the array
//             qs('#joke').innerHTML =
//                 `<div class="flexOnIt" data-id="${jokesOnCat[i].jokeId}"> 
//                     ${jokesOnCat[i].jokeText}
//                     <img data-id="${jokesOnCat[i].jokeId}" src='images/delete-24px.svg'>
//                 </div>`;
//         }
//         //delete joke feature
//         qs('#joke img').addEventListener('click', (e) => {
//             deleteJoke(e);
//             console.log(e);
//         });

//         console.log(i);
//         qs('#n').innerHTML = `${(jokesOnCat.length - 1) - i}`;
//         qs('#p').innerHTML = `${i}`;
//     }




//delete category if jokes on category = 0
// export function deleteCatIfJokeOnCatIsCero() {
//     let jokes = getFromLS('jokes');
//     let categId = getFromLS('categoryId');
//     let jokesOnCat = jokes.filter((jokeOnCat) => jokeOnCat.categoryId == categId);
//     let categId = getFromLS('categoryId');
//     if (jokesOnCat.length == 0) {
//         let categories = getFromLS('categories');
//         let cat = categories.find((cat) => cat.catId == categId);
//         confirm(`Say bye bye to ${cat.catName}`);
//         const index = categories.indexOf(cat);
//         console.log(index);
//         categories.splice(index, 1);
//         //save new categories array to LS
//         saveToLS('categories', categories);
//     }
// }