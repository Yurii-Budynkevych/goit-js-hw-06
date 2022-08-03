const inputEl = document.querySelector("#validation-input");
inputEl.addEventListener("blur", onInputEl);
function onInputEl(eve) {
  if (eve.currentTarget.value.length === Number(inputEl.dataset.length)) {
    this.classList.add("valid");
    this.classList.remove("invalid");
  } else {
    this.classList.add("invalid");
    this.classList.remove("valid");
  }
}
