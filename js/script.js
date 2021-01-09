/*============ To Get HTML inputs' values ==========*/
var taskName = document.getElementById("taskName");
var taskDate = document.getElementById("taskDate");
var taskNotes = document.getElementById("taskNotes");

/*============ To Add new task then save all tasks array in the local storage ==========*/
function addNewTask() {
    var task = {
        name: taskName.value,
        date: taskDate.value,
        notes: taskNotes.value,
    };
    tasksContainer.push(task);
    localStorage.setItem("storedTasks", JSON.stringify(tasksContainer))
    displayTasks();
    clearForm();//reset form
    downFunction();//scrolling down to the last task 
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
            <span class="badge badge-light">`+ (i + 1) +`</span>
            <h4 class="card-title">`+ tasksContainer[i].name + `</h4>
             <p>`+ tasksContainer[i].notes + `</p></div>
            <div class="card-footer text-muted">
            <button onclick="editTaskInputs(`+ i + `)" class="btn btn-light"><i class="far fa-edit editIcon"></i></button>
            <button onclick="deleteTask(`+ i + `)" class="btn btn-light"><i class="far fa-calendar-minus deleteIcon"></i></button></div></div>`
    }
    document.getElementById("todoList").innerHTML = displayedTasks;
};

function deleteTask(taskIndex) {
    tasksContainer.splice(taskIndex, 1);
    localStorage.setItem("storedTasks", JSON.stringify(tasksContainer))
    displayTasks();
};

function deleteAll() {
    tasksContainer = [];
    localStorage.setItem("storedTasks", JSON.stringify(tasksContainer))
    displayTasks();
};

function editTaskInputs(taskIndex) {
    taskName.value = tasksContainer[taskIndex].name;
    taskDate.value = tasksContainer[taskIndex].date;
    taskNotes.value = tasksContainer[taskIndex].notes;
    document.getElementById("addOrEditBtn").innerHTML = `<i class="far fa-save editIcon"></i>save`;
    topFunction();
    editTask();
};


function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};
function downFunction() {
    window.scrollTo(0, document.body.scrollHeight);
};

/*============ Saving data to local storage ==========*/
if (localStorage.getItem("storedTasks") == null) {
    tasksContainer = [];
}
else {
    var tasksContainer = JSON.parse(localStorage.getItem("storedTasks"));
    displayTasks();
}