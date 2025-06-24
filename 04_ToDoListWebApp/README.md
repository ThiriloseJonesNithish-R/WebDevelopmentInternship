# ✅ To-Do List Web App

A simple and responsive to-do list web application built with HTML, CSS, and JavaScript. It allows users to manage daily tasks effectively with features like adding, editing, deleting, and marking tasks as complete. Tasks are saved in the browser using localStorage for offline access.

---

## 📌 Features

- 📝 Add new tasks
- ✏️ Edit existing tasks
- ✅ Mark tasks as complete or pending
- ❌ Delete tasks when done
- 🗂️ Filter tasks by All / Completed / Pending
- 💾 Saves tasks using localStorage (offline support)
- ⏱️ Optional timestamp for each task
- ⚡ Lightweight and fast
- 🌙 Dark mode UI with cool grey & yellow highlights

---

## 🖼️ UI Preview with Screenshots & Video 

![To-Do App Screenshot](https://github.com/ThiriloseJonesNithish-R/WebDevelopmentInternship/blob/25cc253a72a34d98f6b7055d91ad0f898cd289d4/04_ToDoListWebApp/screenshots/preview.png)

---

https://github.com/user-attachments/assets/50d61618-10ae-496e-8b9a-f4f87760ec73

---

## 🛠️ Tech Stack

- **HTML5**
- **CSS3** (Dark Theme: `#121212`, Accent: Cool Grey & Yellow)
- **JavaScript** (DOM manipulation + localStorage)

---

## 📂 Project Structure

```

ToDoList/
│
├── index.html          # Main HTML file
├── style.css           # Styling (dark theme + responsive)
├── script.js           # Core JS logic for task handling
├── screenshots/        # App preview images (optional)
└── README.md           # This file

````

---

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/ToDoList.git
   cd ToDoList
````

2. **Open the app**
   Simply open `index.html` in your browser.

---

## ✅ Usage

* Enter your task in the input field and click the ➕ button.
* Click 🖉 to edit, ✅ to mark done, or 🗑️ to delete.
* Use filter buttons to view **All**, **Completed**, or **Pending** tasks.
* Your tasks are saved automatically and persist after refresh or browser restart.

---

## 📦 Storage Info

All tasks are saved to `localStorage` under the key: `tasks`.

Example format:

```json
[
  {"text": "Complete project", "completed": false},
  {"text": "Call friend", "completed": true}
]
```

---

## 🙌 Acknowledgements

This project was built as part of a Web Development Internship learning track focused on building real-world projects using core web technologies.

---

## 📃 License

This project is open source and free to use under the [MIT License](LICENSE).
