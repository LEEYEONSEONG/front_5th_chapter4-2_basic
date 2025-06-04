let products = [];
let currentPage = 1;
const pageSize = 8;
let isLoading = false;

async function loadProducts() {
  const response = await fetch("https://fakestoreapi.com/products");
  products = await response.json();
  displayProducts();
  setupInfiniteScroll();
}

function displayProducts() {
  const container = document.querySelector("#all-products .container");
  const start = (currentPage - 1) * pageSize;
  const end = start + pageSize;
  products.slice(start, end).forEach((product) => {
    const productElement = document.createElement("div");
    productElement.classList.add("product");

    const pictureDiv = document.createElement("div");
    pictureDiv.classList.add("product-picture");
    const img = document.createElement("img");
    img.src = product.image;
    img.alt = `product: ${product.title}`;
    img.width = 250;
    img.loading = "lazy";
    pictureDiv.appendChild(img);

    const infoDiv = document.createElement("div");
    infoDiv.classList.add("product-info");

    const category = document.createElement("h5");
    category.classList.add("categories");
    category.textContent = product.category;

    const title = document.createElement("h4");
    title.classList.add("title");
    title.textContent = product.title;

    const price = document.createElement("h3");
    price.classList.add("price");
    const priceSpan = document.createElement("span");
    priceSpan.textContent = `US$ ${product.price}`;
    price.appendChild(priceSpan);

    const button = document.createElement("button");
    button.textContent = "Add to bag";

    infoDiv.appendChild(category);
    infoDiv.appendChild(title);
    infoDiv.appendChild(price);
    infoDiv.appendChild(button);

    productElement.appendChild(pictureDiv);
    productElement.appendChild(infoDiv);
    container.appendChild(productElement);
  });
  isLoading = false;
}

function setupInfiniteScroll() {
  window.addEventListener("scroll", async () => {
    if (isLoading) return;
    const container = document.querySelector("#all-products .container");
    const scrollY = window.scrollY || window.pageYOffset;
    const viewportHeight = window.innerHeight;
    const containerBottom = container.getBoundingClientRect().bottom + scrollY;
    if (scrollY + viewportHeight + 100 >= containerBottom) {
      // 다음 페이지 로드
      const totalPages = Math.ceil(products.length / pageSize);
      if (currentPage < totalPages) {
        isLoading = true;
        currentPage++;
        displayProducts();
      }
    }
  });
}

loadProducts();
