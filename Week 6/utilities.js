import { Todo } from './Todos.js';
import { crossOutTodo } from './view.js';
import { getFromLS, saveToLS } from './LS.js';
//get list element
export function qs(selector) {
    return document.querySelector(selector);
}

//add new todo
export function addNewTodo(todos) {
    const newTodo = new Todo();
        newTodo.todoDate = newTodo.date();
        newTodo.text = qs('#text').value;
        newTodo.completed = false;
    todos.push(newTodo);
    return todos;
}

//fill the completed attribute
export function todoCompleted(todos) {
 
        arry.checked == false ?
        todos.completed = false :
        todos.completed = true;
        todos.push(todos);
        saveToLS('todos', todos);
        todos = getFromLS('todos');
        console.log(todos);
    return todos;
}

//wrapping function for totoCompleted()
export function getSelectedCheckboxValues() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    let values = [];
    checkboxes.forEach((checkbox) => {
        values.push(checkbox.value);
    });
    return values;
}

//edit LS array
export function editTodo(todos) {
    const newTodo = new Todo();
    
}
//display todos
export function listTodos(todos) {
    qs('#todoList').innerHTML = '';
    todos.forEach((todo) => {
        qs('#todoList').innerHTML +=
    `<li>
        <input type="checkbox" name="complete" class="complete">
        ${todo.text}
    </li>`;
    })  
}
