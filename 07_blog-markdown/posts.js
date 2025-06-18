const postsContainer = document.getElementById("posts-list");
const searchInput = document.getElementById("search-input");

let posts = JSON.parse(localStorage.getItem("markdownPosts")) || [];

function displayPosts(filter = "") {
  postsContainer.innerHTML = "";

  if (posts.length === 0) {
    postsContainer.innerHTML = "<p>No blog posts found. Go write something!</p>";
    return;
  }

  let filteredPosts = posts.filter(post =>
    post.content.toLowerCase().includes(filter.toLowerCase())
  );

  if (filteredPosts.length === 0) {
    postsContainer.innerHTML = "<p>No matching posts found.</p>";
    return;
  }

  filteredPosts.reverse().forEach((post, index) => {
    const postDiv = document.createElement("div");
    postDiv.classList.add("post");

    const time = new Date(post.createdAt).toLocaleString();
    const html = marked.parse(post.content);

    postDiv.innerHTML = `
      <div class="post-meta">
        <time>🕒 ${time}</time>
        <div class="post-actions">
          <button class="edit-btn" data-index="${index}">✏️ Edit</button>
          <button class="delete-btn" data-index="${index}">🗑️ Delete</button>
        </div>
      </div>
      <div class="post-content">${html}</div>
    `;

    postsContainer.appendChild(postDiv);
  });
}

searchInput.addEventListener("input", () => {
  displayPosts(searchInput.value);
});

// Delegated click handler
postsContainer.addEventListener("click", e => {
  if (e.target.classList.contains("delete-btn")) {
    const index = e.target.getAttribute("data-index");
    const realIndex = posts.length - 1 - index;
    posts.splice(realIndex, 1);
    localStorage.setItem("markdownPosts", JSON.stringify(posts));
    displayPosts(searchInput.value);
  }

  if (e.target.classList.contains("edit-btn")) {
    const index = e.target.getAttribute("data-index");
    const realIndex = posts.length - 1 - index;
    const postToEdit = posts[realIndex];

    localStorage.setItem("editingPost", JSON.stringify(postToEdit));
    // Optional: mark that we're editing
    localStorage.setItem("editingIndex", realIndex);
    window.location.href = "index.html";
  }
});

// Initial load
displayPosts();
