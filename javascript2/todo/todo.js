const todos =[];

function addTodo(){
    const input = document.getElementById("todoInput");
    const value = input.value.trim();

    if (value){
        todos.push(value);
        input.value="";
        renderTodos();
    }
}

function renderTodos(){
    const list = document.getElementById("todoList");
    list.innerHTML="";

    todos.forEach((todo, index) => {
        const li = document.createElement("li");
        li.textContent=todo;
        li.onclick = () => removeTodo(index);
        list.appendChild(li);
    })
}

function removeTodo(index){
    todos.splice(index, 1);
    renderTodos();
}
