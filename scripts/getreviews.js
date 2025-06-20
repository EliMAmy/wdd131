const reviewsDisplay = document.querySelector("#number_review");

let numReviews = Number(window.localStorage.getItem("number_review")) || 1;

reviewsDisplay.textContent = numReviews;

numReviews++;

localStorage.setItem("number_review", numReviews);
