//get list element
export function qs(selector) {
    return document.querySelector(selector);
}
//save todos to data store
export function saveToLS(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}
//retrieve todos from data store
export function getFromLS(key) {}
//set a listener