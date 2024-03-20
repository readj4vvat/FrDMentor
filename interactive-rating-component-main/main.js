const ratings = [
  ...document.getElementsByClassName("card__body__ratings__rating"),
];

const ratingState = document.getElementById("rating-state");
const thankYouState = document.getElementById("thank-you");

const submit = document.querySelector(".card__body__button");

const rating = document.getElementById("rating");

const changeActive = (element) => {
  ratings.forEach((rating) => {
    rating.classList.remove("card__body__ratings__rating--active");
  });
  element.target.classList.add("card__body__ratings__rating--active");
};

ratings.map((rating) => {
  rating.addEventListener("click", changeActive);
});

submit.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(thankYouState.classList);
  ratingState.classList.remove("card--active");
  thankYouState.classList.add("card--active");
  console.log(thankYouState.classList);
  rating.innerHTML = document.querySelector(
    ".card__body__ratings__rating--active"
  ).innerHTML;
});
