# 🎓 Student Management Dashboard

A lightweight, responsive web-based dashboard for managing student records using **HTML**, **CSS**, and **JavaScript**. Perfect for small educational institutions needing an offline, local solution to add, edit, delete, and search student data.

## 📸 Preview

> ![Screenshot of dashboard](https://github.com/ThiriloseJonesNithish-R/WebDevelopmentInternship/blob/f3063e3dcd756a2f79e89a1c8d8cd7e85375aee5/05_StudentDashboard/screenshots/preview.png)  

---

## 📌 Features

- ✅ Add new student records
- 📝 Edit existing records
- 🗑️ Delete individual students
- 🔍 Real-time search by name or registration number
- 📋 Display data in a clean, styled table
- 💾 **LocalStorage support**: All data is saved in the browser and persists across page reloads or server restarts
- 📱 Responsive and mobile-friendly design
- 🎨 Dark-themed UI with a cool blue tone

---

## 📂 Project Structure

```

student-dashboard/
│
├── index.html         # Main HTML page
├── style.css          # Styling for layout and theme
└── script.js          # JavaScript logic (CRUD + search + localStorage)

```

---

## 💾 Data Storage (How it Works)

- Student data is stored using the browser’s built-in **localStorage** API.
- All entries are saved under the key `"students"` as a serialized JSON array.
- Data persists **even if you refresh the page or restart the local server** (as long as it’s the same browser/device).
- You can inspect it via:
  - Chrome/Edge: DevTools > Application tab > Local Storage > `localhost`
  - Firefox: DevTools > Storage > Local Storage

---

## 🧪 How to Use

1. Open `index.html` in any browser (no need for a backend server).
2. Use the form to add student records (Name, Reg No, Dept, Year, Marks).
3. Edit or delete students using the buttons in the table.
4. Use the search box to filter by name or registration number.

---

## ✨ Future Enhancements (Optional)

- Export student data to CSV or PDF
- Add sorting by columns
- Add form validations and highlight errors
- Add pagination for large datasets

---

## 🛠️ Tech Used

- HTML5
- CSS3 (Flexbox, Responsive Design)
- JavaScript (DOM Manipulation, Events, localStorage)

---

## 🧑‍💻 Author

Built with ❤️ as part of a Web Development Internship Project Series.
