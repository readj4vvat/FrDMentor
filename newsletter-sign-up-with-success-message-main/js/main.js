const emailInput = document.getElementsByClassName("card__body__email__input")[0];
const emailError = document.getElementsByClassName("card__body__email__error")[0];
const textEmail = document.getElementsByClassName("card__body__text--email")[0];
const cardSignUp = document.getElementById("card-signup");
const cardSuccess = document.getElementById("card-success");
const submitBtn = document.getElementById("submitBtn");
const dismissBtn = document.getElementById("dismissBtn");
const showError = () => {
  if (!(emailInput.checkValidity())) {
    emailError.style.display = "block";
  } else {
    emailError.style.display = "none";
  }
}

emailInput.addEventListener("input", showError);
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (emailInput.checkValidity() && emailInput.value !== "") {
    cardSignUp.classList.toggle("hide");
    cardSuccess.classList.toggle("hide");
    textEmail.innerHTML = emailInput.value;
  }
});
dismissBtn.addEventListener("click", (e) => {
  e.preventDefault();
  cardSignUp.classList.toggle("hide");
  cardSuccess.classList.toggle("hide");
});
