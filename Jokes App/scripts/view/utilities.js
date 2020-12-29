
//get list element
export function qs(selector) {
    return document.querySelector(selector);
}
//clear user input
export function clearInputs(input) {
    qs(input).value = '';
}

//last visited category effect
export function lastCatVisitedEffect(catId) {
    qs(`.button[data-id="${catId}"]`).classList.add("lastCatVisited");
}