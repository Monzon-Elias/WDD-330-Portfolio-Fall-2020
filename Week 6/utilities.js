import { Todo } from './Todos.js'

//get list element
export function qs(selector) {
    return document.querySelector(selector);
}
//save todos to local storage
export function saveToLS(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}
//retrieve todos from local storage
export function getFromLS(key) {
    return JSON.parse(localStorage.getItem(key));
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
export function todoCompleted() {
    let checkButton = qs('#complete').checked;
    checkButton == false ?
        newTodo.completed = false :
        newTodo.completed = true;
    return newTodo.completed;
}
//cross-out todo
export function crossOut() {
    qs('li').classList.add('completed');
}
//clear user input
export function clearInputs() {
    qs('#text').value = '';
}
//display todos
export function listTodos(todos) {
    todos.forEach((todo) => {
        qs('#todoList').innerHTML +=
    `<li>
        <input type="checkbox" name="complete" id="complete">
        ${todo.text}
    </li>`;
    })  
}
