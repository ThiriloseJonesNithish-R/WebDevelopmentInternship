const productGrid = document.getElementById("productGrid");
const categoryFilter = document.getElementById("categoryFilter");
const priceFilter = document.getElementById("priceFilter");
const ratingFilter = document.getElementById("ratingFilter");
const searchBar = document.getElementById("searchBar");

const priceValue = document.getElementById("priceValue");

const modal = document.getElementById("product-modal");
const modalClose = document.getElementById("modal-close");
const modalImg = document.getElementById("modal-img");
const modalTitle = document.getElementById("modal-title");
const modalDesc = document.getElementById("modal-desc");
const modalCategory = document.getElementById("modal-category");
const modalPrice = document.getElementById("modal-price");
const modalRating = document.getElementById("modal-rating");

let allProducts = [];

fetch("products.json")
  .then(res => res.json())
  .then(data => {
    allProducts = data;
    renderProducts(allProducts);
  })
  .catch(err => {
    productGrid.innerHTML = "<p>Error loading products. Please try again.</p>";
    console.error("Error:", err);
  });

function renderProducts(products) {
  productGrid.innerHTML = "";

  if (products.length === 0) {
    productGrid.innerHTML = "<p>No matching products found.</p>";
    return;
  }

  products.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";

    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <div class="product-info">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <p class="product-price">₹${product.price.toFixed(2)}</p>
        <p class="product-rating">⭐ ${product.rating}</p>
      </div>
    `;

    // Modal click
    card.addEventListener("click", () => {
      showProductModal(product);
    });

    productGrid.appendChild(card);
  });
}

function applyFilters() {
  let filtered = [...allProducts];

  const selectedCategory = categoryFilter.value;
  const selectedPrice = parseFloat(priceFilter.value);
  const selectedRating = parseFloat(ratingFilter.value);
  const searchText = searchBar.value.toLowerCase();

  if (selectedCategory !== "All") {
    filtered = filtered.filter(p => p.category === selectedCategory);
  }

  filtered = filtered.filter(p => p.price <= selectedPrice);

  if (selectedRating > 0) {
    filtered = filtered.filter(p => p.rating >= selectedRating);
  }

  if (searchText) {
    filtered = filtered.filter(p =>
      p.name.toLowerCase().includes(searchText)
    );
  }

  renderProducts(filtered);
}

// Update price label
priceFilter.addEventListener("input", () => {
  priceValue.textContent = `₹${priceFilter.value}`;
  applyFilters();
});

categoryFilter.addEventListener("change", applyFilters);
ratingFilter.addEventListener("change", applyFilters);
searchBar.addEventListener("input", applyFilters);

// Modal logic
modalClose.addEventListener("click", () => {
  modal.classList.add("hidden");
});

function showProductModal(product) {
  modalImg.src = product.image;
  modalTitle.textContent = product.name;
  modalDesc.textContent = product.description;
  modalCategory.textContent = product.category;
  modalPrice.textContent = product.price.toFixed(2);
  modalRating.textContent = product.rating.toFixed(1);
  modal.classList.remove("hidden");
}
