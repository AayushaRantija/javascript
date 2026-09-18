
let tasks = [ ];

function updateStorage() {
    const tasklist = document.getElementById('taskList');
    localStorage.setItem("tasks", JSON.stringify(tasks));
}


function addTask() {
     const taskInput = document.getElementById("taskInput");
    const task = taskInput.value;

    if (task === "") {
        alert("Please enter a task.");
        return;
    }

taskInput.value = ''

tasks.push(task);
updateStorage();
displayTasks();
}

    function deleteTask(newTask, index) {
    const deleteButton = document.createElement('button')
    deleteButton.textContent = 'Delete'
        deleteButton.classList.add("delete");

    newTask.appendChild(deleteButton)
    deleteButton.onclick = function () {
        if (confirm("Do you want to delete this task?")) {
        tasks.splice(index, 1);
updateStorage();
displayTasks();
        }
    }
    }

    function editTask(newTask,taskText, index) {
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.classList.add("edit");

        newTask.appendChild(editButton);

        editButton.onclick = function () {
            const updatedTask = prompt("Edit your task", taskText.textContent);
            if (updatedTask !== null && updatedTask.trim() !== "") {
            tasks[index] = updatedTask;
updateStorage();
displayTasks();
    }
        }
    }

    window.onload = function () {
    const savedTasks = localStorage.getItem("tasks");

    if (savedTasks) {
        tasks = JSON.parse(savedTasks);
    }
    displayTasks();
}

function displayTasks() {

const tasklist = document.getElementById('taskList')
 tasklist.innerHTML = "";

 tasks.forEach(function(task, index) {
    const newTask =document.createElement('li')

const taskText = document.createElement("span");
taskText.textContent = task;

newTask.appendChild(taskText)
tasklist.appendChild(newTask);

deleteTask(newTask, index);
editTask(newTask, taskText, index);
});
}