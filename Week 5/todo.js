import {qs, saveToLs} from "./utilities.js";
const todos = [];
function saveTodos(key){ 
    saveToLs(key, todos);
}

class Todo {
    constructor (parentId, key) {
    this.listElement = qs(parendId);
    this.key = key;
    }
    addNewTodo(text) {
        const newTodo = {
            id: new Date(),
            text: text,
            completed: false
        };

        todos.push(newTodo);
        saveTodos(this.key);
    }
    completeTodo(todo) {}
        listTodos() {}
    }
    
    export default Todo;

    Math.random()
    Todo.addNewTodo();
    
