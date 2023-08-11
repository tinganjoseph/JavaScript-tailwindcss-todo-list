let todos = [];

const todoList = document.getElementById('todoList');
const todoInput = document.getElementById('todoInput');

function renderTodos() {
  todoList.innerHTML = '';
  todos.forEach((todo, index) => {
    const todoItem = document.createElement('div');
    todoItem.className = 'p-4 m-2 border bg-white rounded shadow';
    
    const todoText = `
      <p class="text-xl">${todo}</p>
      <div class="mt-4 flex justify-end">
        <button onclick="window.deleteTodo(${index})" class="bg-red-500 text-white p-1 rounded">Delete</button>
      </div>`;
    todoItem.innerHTML = todoText;
    todoList.appendChild(todoItem);
  });
}

window.addTodo = function() {
  const value = todoInput.value;
  if (value) {
    todos.push(value);
    todoInput.value = '';
    renderTodos();
  }
}

window.deleteTodo = function(index) {
  todos.splice(index, 1);
  renderTodos();
}

renderTodos();
