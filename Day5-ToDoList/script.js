const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

document.addEventListener('DOMContentLoaded', loadTasks);

function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task => addTaskToDOM(task));
}

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    const task = {
        id: Date.now(),
        text: taskText,
        completed: false
    };

    addTaskToDOM(task);
    saveTaskToLocalStorage(task);
    taskInput.value = '';
}

function addTaskToDOM(task) {
    const li = document.createElement('li');
    li.className = task.completed ? 'completed' : '';
    li.innerHTML = `
        <input type="checkbox" ${task.completed ? 'checked' : ''} onclick="toggleTask(${task.id})">
        <span>${task.text}</span>
        <button onclick="removeTask(${task.id})">🗑️</button>
    `;
    taskList.appendChild(li);
}

function saveTaskToLocalStorage(task) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function removeTask(taskId) {
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    tasks = tasks.filter(task => task.id !== taskId);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    reloadTasks(); 
}

function toggleTask(taskId) {
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    tasks = tasks.map(task => {
        if (task.id === taskId) {
            task.completed = !task.completed;
        }
        return task;
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
    reloadTasks(); 
}

function reloadTasks() {
    taskList.innerHTML = '';
    loadTasks();
}

addTaskBtn.addEventListener('click', addTask);
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});