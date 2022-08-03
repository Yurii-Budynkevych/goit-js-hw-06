const inputEl = document.querySelector("#name-input");
const inputSpanEl = document.querySelector("#name-output");
inputEl.addEventListener("input", onInputEl);
function onInputEl(eve) {
  inputSpanEl.textContent = eve.currentTarget.value;
  if (eve.currentTarget.value === "") {
    inputSpanEl.textContent = "Anonymous";
  }
}
