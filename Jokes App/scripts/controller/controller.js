import { qs } from '../view/utilities.js'
import Joke from '../model/Joke.js'
import Category from '../model/Category.js';
import { getFromLS, saveToLS } from '../controller/LS.js';

//add a new Joke's category
export function addJokeCat() {
    const cat = new Category();
    cat.catName = qs('#addCatInp').value;
    let categories = [];
    categories = getFromLS('categories');
    console.log(cat);
    console.log(categories);
    categories.push(cat);
    saveToLS('categories', categories);
}

//add a new joke
export function addJoke(catId) {
    const joke = new Joke();
    joke.categoryId = catId;
    joke.jokeText = qs('#addJokeInp').value;
    getSavePush(jokes, 'jokes', joke);
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
                    `<a href="#" id="${category.catId}" class="button">
                        <span></span>
                        ${category.catName}
                        <img class="delete" data-id='${category.catId}' src='images/delete-24px.svg'>
                    </a>`;
            });
            
        //delete category
        let cats = document.querySelectorAll('img[src*="del"]');
        console.log(cats);
        cats.forEach((cat) => {
            cat.addEventListener('click', deleteCategory);
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
            `<a href="addNewCategory.html" class="button submit">
                New Joke Category?</a>`;
        categories.forEach(
            (category) => {
                qs('#catContainerAddMode').innerHTML +=
                    `<a href="joke.html" data-id="${category.catId}" class="button">${category.catName}</a>`;
            });
    }
}

//delete category item
export function deleteCategory(e) {
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
}