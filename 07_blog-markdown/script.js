const textarea = document.getElementById("markdown-input");
const preview = document.getElementById("preview-output");
const saveBtn = document.getElementById("save-btn");

let posts = JSON.parse(localStorage.getItem("markdownPosts")) || [];

// Check if editing
let editingIndex = localStorage.getItem("editingIndex");
let editingPost = JSON.parse(localStorage.getItem("editingPost"));

// If editing, load content into textarea
if (editingPost) {
  textarea.value = editingPost.content;
  preview.innerHTML = marked.parse(editingPost.content);
}

textarea.addEventListener("input", () => {
  const content = textarea.value;
  preview.innerHTML = marked.parse(content);
});

saveBtn.addEventListener("click", () => {
  const content = textarea.value.trim();
  const timestamp = new Date().toISOString();

  if (!content) {
    alert("Blog post cannot be empty!");
    return;
  }

  if (editingIndex !== null && editingPost) {
    posts[editingIndex] = { content, createdAt: timestamp };
    localStorage.removeItem("editingPost");
    localStorage.removeItem("editingIndex");
  } else {
    posts.push({ content, createdAt: timestamp });
  }

  localStorage.setItem("markdownPosts", JSON.stringify(posts));

  // Reset
  textarea.value = "";
  preview.innerHTML = "";

  alert("✅ Post saved successfully!");
  window.location.href = "posts.html";
});
