import "../styles/index.scss";
import "../styles/carousel.scss";

const productsCarousel = function () {
  const carousel = document.querySelector(".carousel");
  const slider = document.querySelector(".slider");
  const leftArrow = document.querySelector(".left");
  const rightArrow = document.querySelector(".right");
  const noOfCards = document.querySelectorAll(".products__card").length;
  let direction;

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

productsCarousel();

const trailerCarousel = function () {
  const carouselT = document.querySelector(".carousel--t");
  const sliderT = document.querySelector(".carousel--t");
  const leftArrowT = document.querySelector(".left--t");
  const rightArrowT = document.querySelector(".right--t");
  const noOfCardsT = document.querySelectorAll(".products__card--t").length;
  let directionT;

  sliderT.style.width = `${noOfCardsT * 436}px`;

  leftArrowT.addEventListener("click", function () {
    directionT = 1;
    carouselT.style.justifyContent = "flex-end";
    sliderT.style.transform = `translate(${100 / noOfCardsT}%)`;
  });

  sliderT.addEventListener("transitionend", function () {
    if (directionT === -1) {
      sliderT.appendChild(sliderT.firstElementChild);
    } else if (directionT === 1) {
      sliderT.prepend(sliderT.lastElementChild);
    }
    sliderT.style.transition = "none";
    sliderT.style.transform = "translate(0)";
    setTimeout(function () {
      sliderT.style.transition = "all 0.3s";
    });
  });

  rightArrowT.addEventListener("click", function () {
    directionT = -1;
    carouselT.style.justifyContent = "flex-start";
    sliderT.style.transform = `translate(${-100 / noOfCardsT}%)`;
  });
};

trailerCarousel();
