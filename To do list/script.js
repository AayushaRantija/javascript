function addTask() {
     const taskInput = document.getElementById("taskInput");
    const task = taskInput.value;

    if (task === "") {
        alert("Please enter a task.");
        return;
    }
const newTask =document.createElement('li')
const tasklist = document.getElementById('taskList')

const taskText = document.createElement("span");
taskText.textContent = task;

newTask.appendChild(taskText)
tasklist.appendChild(newTask)
taskInput.value = ''

deleteTask(newTask);
editTask(newTask, taskText);

}

    function deleteTask(newTask) {
    const deleteButton = document.createElement('button')
    deleteButton.textContent = 'Delete'
        deleteButton.classList.add("delete");

    newTask.appendChild(deleteButton)
    deleteButton.onclick = function () {
        if (confirm("Do you want to delete this task?")) {
        newTask.remove();
        }
    }
    }

    function editTask(newTask,taskText) {
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.classList.add("edit");

        newTask.appendChild(editButton);

        editButton.onclick = function () {
            const updatedTask = prompt("Edit your task", taskText.textContent);
            if (updatedTask !== null && updatedTask.trim() !== "") {
            taskText.textContent = updatedTask;
    }
        }
    }