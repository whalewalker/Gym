const products = [
  {
    price: 85000,
    itemName: "Wondercore-2",
    image: "/asset/images/pro1.png",
    category: "cardios",
  },
  {
    price: 235000,
    itemName: "Total Fit",
    image: "/asset/images/pro2.jpg",
    category: "cardios",
  },
  {
    price: 100000,
    itemName: "AB King Pro",
    image: "/asset/images/pro3.png",
    category: "cardios",
  },
  {
    price: 50000,
    itemName: "Smart Wondercore",
    image: "/asset/images/pro6.png",
    category: "cardios",
  },
  {
    price: 350000,
    itemName: "Rowing Machine",
    image: "/asset/images/pro5.png",
    category: "cardios",
  },
  {
    price: 180000,
    itemName: "Ab Roller Coaster",
    image: "/asset/images/pro4.png",
    category: "cardios",
  },
];

const productContainer = document.querySelector(".products");
const btns = document.querySelectorAll(".sub-section");

btns.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    productContainer.classList.toggle("collapse");
    const category = event.target.textContent;
    const product = fetchProduct(category);
    displayProduct(product);
  });
});

function fetchProduct(category) {
  const categoryProducts = products.filter(
    (product) => product.category === category
  );
  return categoryProducts;
}

function displayProduct(products) {
  product = products.map((element) => {
    return `<div class="item">
        <img src=${element.image} alt="product" class="product-image">
        <div class="flex">
            <h3 class="product-name">${element.itemName}</h3>
            <h3 class="product-price">₦${element.price}</h3>
        </div>
        <button class="add">Add to Cart</button>
    </div>`;
  });
  productContainer.innerHTML = product;
}


