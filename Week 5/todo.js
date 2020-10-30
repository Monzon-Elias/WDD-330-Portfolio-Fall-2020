import { qs, saveToLS, getFromLS } from "./utilities.js";

let todos = getFromLS("todos");

function saveTodos(key) {
    saveToLS(key, todos);
}

class Todo {
    constructor(parendId, key) {
        this.listElement = qs(parendId);
        this.key = key;
        this.form = qs("#form");
        this.text = qs("#inputField");
        this.addEventListener();
    }

    addEventListener() {
        this.form.addEventListener("submit", (event) => {
            event.preventDefault();
            let something = this.text.value;
            this.addNewTodo(something);
            console.log(something);
        });
    }

    addNewTodo(text) {
        const newTodo = {
            id: new Date(),
            text: text,
            completed: false
        };

        //todos.push(newTodo);
        todos = [...todos, newTodo];
        console.log(todos);
        saveTodos(this.key);
        this.listTodos()
    }
    completeTodo(todo) { }
    listTodos() {
        this.listElement.innerHTML = todos.map(item => `
        <li><i class="glyphicon glyphicon-home"></i> <p>${item.text}</p></li>
        `)
    }
}

export default Todo;