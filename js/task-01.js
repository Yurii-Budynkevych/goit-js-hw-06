const categoriesEl = document.querySelector("#categories");
console.log("Number of categories: ", categoriesEl.children.length);

const itemsEl = categoriesEl.querySelectorAll(".item");
for (const el of itemsEl) {
  console.log("Category:", el.firstElementChild.textContent);
  console.log("Elements:", el.lastElementChild.children.length);
}
