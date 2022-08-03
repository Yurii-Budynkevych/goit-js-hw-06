let counterValue = 0;
const btnDecEl = document.querySelector('button[data-action="decrement"]');
const btnIncEl = document.querySelector('button[data-action="increment"]');
const valueEl = document.querySelector("#value");
btnDecEl.addEventListener("click", () => {
  counterValue = counterValue - 1;
  valueEl.textContent = counterValue;
});
btnIncEl.addEventListener("click", () => {
  counterValue += 1;
  valueEl.textContent = counterValue;
});
