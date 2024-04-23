const emailInput = document.getElementsByClassName("card__body__email__input")[0];
const emailError = document.getElementsByClassName("card__body__email__error")[0];
const showError = () => {
  if (!(emailInput.checkValidity())) {
    emailError.style.display = "block";
  } else {
    emailError.style.display = "none";
  }
}

emailInput.addEventListener("input", showError);
