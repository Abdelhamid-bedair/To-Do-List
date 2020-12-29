var taskName = document.getElementById("taskName");
var taskDate = document.getElementById("taskDate");
var taskNotes = document.getElementById("taskNotes");

var tasksContainer = [];

function addNewTask() {
    var task = {
        name: taskName.value,
        date: taskDate.value,
        notes: taskNotes.value,
    };
    tasksContainer.push(task);
    displayTasks();
    clearForm();
};

function clearForm() {
    taskName.value = "";
    taskDate.value = "";
    taskNotes.value = "";
};

function displayTasks() {

    var displayedTasks = "";
    for (i = 0; i < tasksContainer.length; i++) {
        displayedTasks +=
            `<div class="card text-center my-3">
            <div class="card-header">`+ tasksContainer[i].date + `</div>
            <div class="card-body">
            <h4 class="card-title">`+ tasksContainer[i].name + `</h4>
             <p>`+ tasksContainer[i].notes + `</p></div>
            <div class="card-footer text-muted">
            <button class="btn btn-outline-dark"><i class="far fa-edit editIcon"></i>Edit</button>
            <button class="btn btn-outline-dark"><i class="far fa-calendar-minus deleteIcon"></i>Delete</button></div></div>`
    }
    document.getElementById("todoList").innerHTML = displayedTasks;
};