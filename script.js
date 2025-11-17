const ratingButtons = document.querySelectorAll(".rating__button");
const submitButton = document.querySelector(".rating__submit");
const ratingState = document.querySelector(".rating__card");
const thankYouState = document.querySelector(".thankyou__card");
const selectedRating = document.querySelector(".thankyou__rating-number");

let currentRating = null;

ratingButtons.forEach((button) => {
  button.addEventListener("click", () => {
    ratingButtons.forEach((button) => button.classList.remove("rating__button--active"))
    button.classList.add("rating__button--active");
    currentRating = button.textContent;
  })
})

submitButton.addEventListener("click", () => {
  if (currentRating) {
    selectedRating.textContent = currentRating;
    ratingState.classList.add("hidden");
    thankYouState.classList.remove("hidden");
  }
});