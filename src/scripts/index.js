import "../styles/index.scss";
import "../styles/carousel.scss";

//Products carousel elements
const carouselP = document.querySelector(".carousel");
const sliderP = document.querySelector(".slider");
const leftArrowP = document.querySelector(".left");
const rightArrowP = document.querySelector(".right");
const noOfCardsP = document.querySelectorAll(".products__card").length;
let directionP;

//Trailer carousel elements
const carouselT = document.querySelector(".carousel--t");
const sliderT = document.querySelector(".slider--t");
const leftArrowT = document.querySelector(".left--t");
const rightArrowT = document.querySelector(".right--t");
const noOfCardsT = document.querySelectorAll(".products__card--t").length;
let directionT;

//Infinite carousel function

const infiniteCarousel = function (
  carousel,
  slider,
  leftArrow,
  rightArrow,
  noOfCards,
  direction
) {
  slider.style.width = `${noOfCards * 436}px`;

  leftArrow.addEventListener("click", function () {
    direction = 1;
    carousel.style.justifyContent = "flex-end";
    slider.style.transform = `translate(${100 / noOfCards}%)`;
  });

  slider.addEventListener("transitionend", function () {
    if (direction === -1) {
      slider.appendChild(slider.firstElementChild);
    } else if (direction === 1) {
      slider.prepend(slider.lastElementChild);
    }
    slider.style.transition = "none";
    slider.style.transform = "translate(0)";
    setTimeout(function () {
      slider.style.transition = "all 0.3s";
    });
  });

  rightArrow.addEventListener("click", function () {
    direction = -1;
    carousel.style.justifyContent = "flex-start";
    slider.style.transform = `translate(${-100 / noOfCards}%)`;
  });
};

//Calling carousel function

infiniteCarousel(
  carouselP,
  sliderP,
  leftArrowP,
  rightArrowP,
  noOfCardsP,
  directionP
);

infiniteCarousel(
  carouselT,
  sliderT,
  leftArrowT,
  rightArrowT,
  noOfCardsT,
  directionT
);
