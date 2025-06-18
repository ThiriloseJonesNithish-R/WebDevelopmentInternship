# 📝 Markdown Blog Platform

A clean, dark-themed blogging platform that allows users to write posts using **Markdown syntax** with **live preview**, save them to local storage, and view, edit, or delete them anytime — no backend required.

![Hero Screenshot](https://github.com/ThiriloseJonesNithish-R/WebDevelopmentInternship/blob/e31904b650933a622d3a061bd52b3a51087c4f45/07_blog-markdown/screenshots/Hero.png)

---

## 📌 Features

- 🧠 **Markdown Editor** with real-time live preview using `marked.js`
- 💾 **Save Posts** to localStorage (browser-based persistence)
- 📚 **View Saved Posts** in reverse chronological order
- ✏️ **Edit**, 🗑️ **Delete**, and 🔍 **Search** posts
- 🌙 Dark mode UI with an elegant cyan-accent palette
- 📱 Responsive layout (mobile-friendly)

---

## 📂 Project Structure

```

markdown-blog/
├── index.html          # Markdown editor (write post)
├── posts.html          # View, search, edit, delete posts
├── style.css           # Custom dark theme styles
├── script.js           # Editor logic
├── posts.js            # Post management logic
├── /screenshots        # App screenshots
└── README.md           # You're here

```

---

## 🚀 How to Run

1. **Clone the repository** or [Download ZIP](#).
2. Open `index.html` in any browser.
3. Start writing in Markdown → see live preview instantly.
4. Click 💾 **Save Post** → automatically stored in your browser.
5. Go to **View Posts** to:
   - See previous entries
   - ✏️ Edit existing ones
   - 🗑️ Delete posts
   - 🔍 Search by keyword

> 📌 All data is saved locally — no internet or login required.

---

## 🖼️ Screenshots

### 📝 Write Page  
![Write Page](https://github.com/ThiriloseJonesNithish-R/WebDevelopmentInternship/blob/e31904b650933a622d3a061bd52b3a51087c4f45/07_blog-markdown/screenshots/WritePage.png)

### 📚 View Posts, 🔍 Search, ✏️ Edit, 🗑️ Delete  
![View Page, Features Page](https://github.com/ThiriloseJonesNithish-R/WebDevelopmentInternship/blob/e31904b650933a622d3a061bd52b3a51087c4f45/07_blog-markdown/screenshots/ViewPage.png)

---

## 🛠️ Tech Stack

- **HTML5** + **CSS3**
- **JavaScript (ES6+)**
- **[marked.js](https://github.com/markedjs/marked)** — Markdown parsing

---

## 📌 Notes

- Data is **saved in `localStorage`**, meaning clearing browser data will wipe the posts.
- You can expand this into a full CMS by adding backend (e.g., Firebase, Node.js).
- Responsive UI for writing and reading on any device.

---

## 🧑‍💻 Developed As Part of

**Project 7 – Web Development Internship**  
Markdown Blog Platform | Powered by LocalStorage

---

## 📃 License

MIT License — use freely, improve endlessly. 🚀
