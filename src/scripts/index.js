import "../styles/index.scss";
import "../styles/carousel.scss";

/*
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
*/

//Image carousel

const imgCarousel = function () {
  const sliderImg = document.querySelector(".slider--img");
  const leftArrowImg = document.querySelector(".left--img");
  const rightArrowImg = document.querySelector(".right--img");
  const noOfImgs = document.querySelectorAll(".imgC").length;
  const thumbnails = [...document.querySelectorAll(".thumbnail")];
  let imgIndex = 0;

  sliderImg.style.width = `${noOfImgs * 100}%`;

  leftArrowImg.addEventListener("click", function () {
    thumbnails[imgIndex].classList.remove("thumbnail--active");
    imgIndex = imgIndex > 0 ? imgIndex - 1 : 0;
    sliderImg.style.transform = `translate(${imgIndex * -100}%)`;
    thumbnails[imgIndex].classList.add("thumbnail--active");
  });

  rightArrowImg.addEventListener("click", function () {
    thumbnails[imgIndex].classList.remove("thumbnail--active");
    imgIndex = imgIndex < noOfImgs - 1 ? imgIndex + 1 : noOfImgs - 1;
    sliderImg.style.transform = `translate(${imgIndex * -100}%)`;
    thumbnails[imgIndex].classList.add("thumbnail--active");
  });
};

imgCarousel();

///////////////////Product nav/////////////////////////////

const descriptionBtn = document.getElementById("descriptionBtn");
const useBtn = document.getElementById("useBtn");
const videoBtn = document.getElementById("videoBtn");
const description = document.querySelector(".product__description");
const use = document.querySelector(".product__use");
const video = document.querySelector(".product__video");

//Functions

const descriptionActive = function () {
  descriptionBtn.classList.remove("product__navitem--nonactive");
  useBtn.classList.add("product__navitem--nonactive");
  videoBtn.classList.add("product__navitem--nonactive");
  description.classList.remove("hidden");
  use.classList.add("hidden");
  video.classList.add("hidden");
};

const useActive = function () {
  descriptionBtn.classList.add("product__navitem--nonactive");
  useBtn.classList.remove("product__navitem--nonactive");
  videoBtn.classList.add("product__navitem--nonactive");
  description.classList.add("hidden");
  use.classList.remove("hidden");
  video.classList.add("hidden");
};

const videoActive = function () {
  descriptionBtn.classList.add("product__navitem--nonactive");
  useBtn.classList.add("product__navitem--nonactive");
  videoBtn.classList.remove("product__navitem--nonactive");
  description.classList.add("hidden");
  use.classList.add("hidden");
  video.classList.remove("hidden");
};

//Event listeners

descriptionBtn.addEventListener("click", descriptionActive);
useBtn.addEventListener("click", useActive);
videoBtn.addEventListener("click", videoActive);
