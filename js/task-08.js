const loginFormEl = document.querySelector(".login-form");
loginFormEl.addEventListener("submit", onSubmit);
function onSubmit(eve) {
  eve.preventDefault();
  const {
    elements: { email, password },
  } = eve.currentTarget;
  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
  }
  const formData = { email: email.value, password: password.value };
  console.log(formData);
  this.reset();
}
