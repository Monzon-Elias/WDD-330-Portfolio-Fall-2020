
//get list element
export function qs(selector) {
    return document.querySelector(selector);
}
//clear user input
export function clearInputs(input) {
    qs(input).value = '';
}