const searchIcon = document.querySelector(".search-icon");
const searchForm = document.querySelector(".search-form");

searchIcon.addEventListener("click", () => {
  searchForm.classList.add("active");
  cartItemContainer.classList.remove("active");
});

const cartIcon = document.querySelector(".cart-icon");
const cartItemContainer = document.querySelector(".cart-items-container");

cartIcon.addEventListener("click", () => {
  cartItemContainer.classList.add("active");
  searchForm.classList.remove("active");
});

function menuicon() {
  const menuicon = document.querySelector(".navbar");
  menuicon.style.display = "flex";
}
function sideberclose() {
  const hidesidebar = document.querySelector(".navbar");
  hidesidebar.style.display = "none";
}
