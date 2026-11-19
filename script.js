
const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Lütfen bir görev yaz!");
        return;
    }

    const li = document.createElement("li");

    const taskName = document.createElement("span");
    taskName.textContent = taskText;

    // Görevi tamamlandı olarak işaretleme
    taskName.addEventListener("click", function () {
        taskName.style.textDecoration =
            taskName.style.textDecoration === "line-through"
                ? "none"
                : "line-through";
    });

    // Silme butonu
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Sil";
    deleteButton.style.background = "#dc2626";
    deleteButton.style.marginLeft = "10px";

    deleteButton.addEventListener("click", function () {
        li.remove();
    });

    li.appendChild(taskName);
    li.appendChild(deleteButton);

    taskList.appendChild(li);

    taskInput.value = "";
}

addTaskButton.addEventListener("click", addTask);

// Enter tuşuyla görev ekleme
taskInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});
