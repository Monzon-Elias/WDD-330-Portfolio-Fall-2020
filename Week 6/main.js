import { getFromLS, saveToLS } from "./LS.js"
import { addNewTodo, listTodos } from "./utilities.js";
import { qs, clearInputs } from "./view.js"


let todos = [];
todos = getFromLS('todos');
console.log(todos);
if (todos != null) listTodos();
else {
    todos = [];
    saveToLS('todos', todos);
}
qs('#addT').addEventListener("click", () => {
    console.log("is working!");
    if (qs('#todoText').value.length > 0) {
        addNewTodo();
        listTodos();
        clearInputs();
    }
});


