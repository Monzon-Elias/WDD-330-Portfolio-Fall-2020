import { saveToLS, getFromLS } from "./LS.js"
import { qs, addNewTodo, listTodos, todoCompleted, inputChecked } from "./utilities.js";
import { clearInputs } from "./view.js"


let todos = [];
todos = getFromLS('todos');
//console.log(todos);
if (todos != null) listTodos(todos);
todos = [];
qs('#addT').addEventListener("click", () => {
    console.log("is working!");
    addNewTodo(todos);
    saveToLS('todos', todos);
    //console.log(todos);
    listTodos(todos);
    clearInputs();
});

let lala = document.getElementsByClassName('.complete');
let lolo = [...lala];
lolo.forEach(() => {console.log(lolo);})


