const taskInput = document.getElementById("task-input");
const addBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");
const filterBtns = document.querySelectorAll(".filter-btn");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let currentFilter = "all";

// Render Tasks
function renderTasks() {
  taskList.innerHTML = "";

  const filteredTasks = tasks.filter(task => {
    if (currentFilter === "all") return true;
    if (currentFilter === "completed") return task.completed;
    if (currentFilter === "pending") return !task.completed;
  });

  if (filteredTasks.length === 0) {
    taskList.innerHTML = `<li style="text-align:center; color:#888;">No tasks found.</li>`;
    return;
  }

  filteredTasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.className = `task-item ${task.completed ? "completed" : ""}`;

    li.innerHTML = `
      <span class="task-text">${task.text}</span>
      <div class="task-actions">
        <button title="Complete" onclick="toggleComplete(${index})">
          <i class="fas fa-check-circle"></i>
        </button>
        <button title="Edit" onclick="editTask(${index})">
          <i class="fas fa-edit"></i>
        </button>
        <button title="Delete" onclick="deleteTask(${index})">
          <i class="fas fa-trash-alt"></i>
        </button>
      </div>
    `;

    taskList.appendChild(li);
  });

  saveTasks();
}

// Add Task
addBtn.addEventListener("click", () => {
  const text = taskInput.value.trim();
  if (text === "") {
    alert("Please enter a task.");
    return;
  }

  tasks.push({ text, completed: false });
  taskInput.value = "";
  renderTasks();
});

// Toggle Complete
function toggleComplete(index) {
  tasks[index].completed = !tasks[index].completed;
  renderTasks();
}

// Edit Task
function editTask(index) {
  const newText = prompt("Edit task:", tasks[index].text);
  if (newText !== null && newText.trim() !== "") {
    tasks[index].text = newText.trim();
    renderTasks();
  }
}

// Delete Task
function deleteTask(index) {
  if (confirm("Delete this task?")) {
    tasks.splice(index, 1);
    renderTasks();
  }
}

// Filter Buttons
filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    filterBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    currentFilter = btn.dataset.filter;
    renderTasks();
  });
});

// Save to localStorage
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Initial Load
renderTasks();
