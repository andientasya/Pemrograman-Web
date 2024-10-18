let todoList = [];

function addTask() {
    const taskInput = document.getElementById('todoInput');
    const taskText = taskInput.value;

    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    const task = {
        id: Date.now(),
        text: taskText,
        isEditing: false
    };

    todoList.push(task);
    taskInput.value = ''; // Clear input after adding
    renderList();
}

function deleteTask(id) {
    todoList = todoList.filter(task => task.id !== id);
    renderList();
}

function editTask(id) {
    const task = todoList.find(task => task.id === id);
    const newText = prompt('Edit your task:', task.text);

    if (newText) {
        task.text = newText;
    }
    renderList();
}

function renderList() {
    const list = document.getElementById('todoList');
    list.innerHTML = ''; // Clear the list

    todoList.forEach(task => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <span>${task.text}</span>
            <button class="edit" onclick="editTask(${task.id})">Edit</button>
            <button onclick="deleteTask(${task.id})">Delete</button>
        `;
        list.appendChild(listItem);
    });
}