const inputEl = document.querySelector("#font-size-control");
const inputElSpan = document.querySelector("#text");
inputEl.addEventListener("input", onInputEl);
function onInputEl(eve) {
  inputElSpan.style.fontSize = eve.target.value + "px";
}
