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
    categories.push(cat);
    saveToLS('categories', categories);
    console.log(categories);
}

//add a new joke
export function addJoke(catId) {
    const joke = new Joke();
    joke.categoryId = catId;
    joke.jokeText = qs('#addJokeInp').value;
    let jokes = [];
    jokes = getFromLS('jokes');
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
                window.location.href="joke.html";
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
            `<a href="addNewCategory.html" class="button submit">New Joke Category?</a>`;
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
                window.location.href="addNewJoke.html";
            });
        });
    }
}

//delete category item
function deleteCategory(e) {
    let categId = e.target.getAttribute('data-id');
    console.log(categId);
    let categories = [];
    categories = getFromLS('categories');
    let cat = categories.find((cat) => cat.catId == categId);
    const index = categories.indexOf(cat);
    console.log(index);
    categories.splice(index, 1);
    //save to LS
    saveToLS('categories', categories);
    //list the budget items
    displayCategories();
    location.reload();
}

//store filtered jokes by cat on LS & go to joke.html
// export function createJokeOnCatArray(e) {
//     let categId = e.target.getAttribute('data-id');
//     console.log(categId);
//     let jokes = [];
//     jokes = getFromLS('jokes');
//     let jokesOnCat = [];
//     jokesOnCat = jokes.filter((jokeOnCat) => jokeOnCat.categoryId == categId);
//     removeFromLS('jokesOnCategory');
//     saveToLS('jokesOnCategory', jokesOnCat);
//     window.location.href="joke.html";
// }

//store cat id on LS
function storeCatIdOnLS(e) {
    removeFromLS('categoryId');
    let catId = e.target.getAttribute('data-id');
    saveToLS('categoryId', catId);
    console.log(catId);
}
