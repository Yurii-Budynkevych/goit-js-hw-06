const categoriesEl = document.querySelector("#categories");
console.log("Number of categories: ", categoriesEl.children.length);

const itemsEl = categoriesEl.querySelectorAll(".item");
itemsEl.forEach(function (el) {
  console.log("Category:", el.firstElementChild.textContent);
  console.log("Elements:", el.lastElementChild.children.length);
});
