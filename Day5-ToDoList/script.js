// Elementos del DOM
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Cargar tareas desde el LocalStorage al cargar la página
document.addEventListener('DOMContentLoaded', loadTasks);

// Función para cargar tareas desde el LocalStorage
function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task => addTaskToDOM(task));
}

// Función para agregar una tarea
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

// Función para agregar una tarea al DOM
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

// Función para guardar una tarea en el LocalStorage
function saveTaskToLocalStorage(task) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Función para eliminar una tarea
function removeTask(taskId) {
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    tasks = tasks.filter(task => task.id !== taskId);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    reloadTasks(); // Recargar tareas
}

// Función para alternar el estado de una tarea
function toggleTask(taskId) {
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    tasks = tasks.map(task => {
        if (task.id === taskId) {
            task.completed = !task.completed;
        }
        return task;
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
    reloadTasks(); // Recargar tareas
}

// Función para recargar las tareas en el DOM
function reloadTasks() {
    taskList.innerHTML = '';
    loadTasks();
}

// Event Listeners
addTaskBtn.addEventListener('click', addTask);
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});