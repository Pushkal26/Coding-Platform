document.addEventListener("DOMContentLoaded", function() {
    var addButton = document.getElementById("add-button");
    var taskInput = document.getElementById("task-input");
    var taskList = document.getElementById("task-list");

    addButton.addEventListener("click", function() {
        var taskText = taskInput.value.trim();
        if (taskText !== "") {
            addTask(taskText);
            taskInput.value = "";
        }
    });

    function addTask(taskText) {
        var listItem = document.createElement("li");
        listItem.textContent = taskText;
        taskList.appendChild(listItem);
    }
});
