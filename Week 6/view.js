import { qs } from "./utilities.js";

//cross-out todo
export function crossOutTodo(el) {
    return el.classList.add('completed');
}

//clear user input
export function clearInputs() {
    qs('#text').value = '';
}
