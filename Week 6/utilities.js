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

function inputChecked(e) {
    // get id of Todo that was clicked
    let todoId = e.target.value;
    // find the todo that was clicked from the todo array
    let todos = [];
    todos = getFromLS('todos');
    let todo = todos.find((todoItem) => todoItem.id == todoId);
    console.log(todo);
    // change the completed property to its opposite
    todo.completed = !todo.completed;
    //save to LS
    saveToLS('todos', todos);
    //list the todos
    listTodos(todos);
}

function getDoneCount(todos) {
    let done = todos.filter((todoItem) => todoItem.completed == true);
    let unDone = todos.filter((todoItem) => todoItem.completed == false);
    console.log(done.length);
    qs('#doneCount').innerHTML = `You have ${done.length} todos completed`;
    qs('#unDoneCount').innerHTML = `You have ${unDone.length} todos incompleted`;
}

function deleteTodo(e) {
    let todoId = e.target.id;
    let todos = [];
    todos = getFromLS('todos');
    let todo = todos.find((todoItem) => todoItem.id == todoId);
    const index = todos.indexOf(todo);
    todos.splice(index, 1);
    //save to LS
    saveToLS('todos', todos);
    //list the todos
    listTodos(todos);
}

export function listTodos(todos) {
    // clear the table
    qs('#todoList').innerHTML = '';
    // add new li for each Todo item
    todos.forEach(
        (todo) => {
            let li = document.createElement('li');
            let span = document.createElement('span');
            let checkbox = document.createElement('input');
            checkbox.setAttribute('type', 'checkbox');
            checkbox.setAttribute('value', todo.id);
            checkbox.addEventListener('click', inputChecked);
            let trashIcon = document.createElement('img');
            trashIcon.id = todo.id;
            trashIcon.setAttribute('src', 'delete-24px.svg');
            trashIcon.addEventListener('click', deleteTodo);
            if (todo.completed) {
                checkbox.checked = true;
                crossOutTodo(li);
            }
            li.appendChild(checkbox);
            span.textContent = todo.text;
            li.appendChild(span);
            li.appendChild(trashIcon);
            qs('#todoList').appendChild(li);
        }
    );
    //TESTING:
    console.log(todos);
    getDoneCount(todos);
}
