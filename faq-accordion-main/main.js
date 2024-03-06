const plusBtn = document.querySelectorAll(".card__button");
plusBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    setTimeout(() => {
      const answer = btn.parentElement.nextElementSibling;
      answer.classList.toggle("card__answer--hidden");
      const image = btn.querySelector("img");
      if (image.getAttribute("src") === "assets/images/icon-plus.svg") {
        image.setAttribute("src", "assets/images/icon-minus.svg");
      } else {
        image.setAttribute("src", "assets/images/icon-plus.svg");
      }
    }, 400);
  });
});
