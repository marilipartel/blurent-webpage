"use strict";

import "../styles/index.scss";
import "../styles/carousel.scss";

////////////////////////////////////////MAIN PAGE CAROUSELS//////////////////////////////////////////////////////

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

/*
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

/////////////////////////////////////////IMG CAROUSEL////////////////////////////////////////////////////////

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

  thumbnails.forEach(function (thumbnail, index, arr) {
    thumbnail.addEventListener("click", function () {
      arr.forEach(function (thumbnail) {
        if (thumbnail.classList.contains("thumbnail--active")) {
          thumbnail.classList.remove("thumbnail--active");
        }
      });
      thumbnail.classList.add("thumbnail--active");
      sliderImg.style.transform = `translate(${index * -100}%)`;
    });
  });
};

imgCarousel();

////////////////////////////////////////////////PRODUCT NAV////////////////////////////////////////////////////

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

//////////////////////////////////////////CALENDAR//////////////////////////////////////////////////////

//Elements
const pickDateBtn = document.querySelector(".bttn__pickdate");
const calendar = document.querySelector(".calendar__calendarbox");
const monthLabel = document.querySelector(".calendar__mth");
const leftArrowCal = document.querySelector(".left--cal");
const rightArrowCal = document.querySelector(".right--cal");
const today = new Date();
const daysEl = document.querySelector(".calendar__days");
let daysBeg = [];

//Functions

const displayMonth = function (day) {
  const options = {
    month: "long",
    year: "numeric",
  };
  const monthLow = new Intl.DateTimeFormat("et-EE", options).format(day);
  const month = monthLow[0].toUpperCase() + monthLow.slice(1);
  monthLabel.textContent = month;
};

//////Getting the weekday of first day of the current month
const firstOfCurMonth = function (date) {
  const firstOfMonth = new Date(date.getTime());
  firstOfMonth.setDate(1);
  return firstOfMonth;
};

////Creating an array of dates from a month.
const createArrayOfDays = function (date1, date2) {
  const arrayOfDays = [];
  while (date1.getMonth() === date2.getMonth()) {
    arrayOfDays.push(date2.getDate());
    date2.setDate(date2.getDate() + 1);
  }
  return arrayOfDays;
};

////Creating an array of dates from the previous month.
const createArrayOfLastMth = function (date) {
  const monthAgo = new Date(date.getTime());
  if (monthAgo.getDate() > 28) {
    monthAgo.setDate(28);
  }
  monthAgo.setMonth(monthAgo.getMonth() - 1);
  const firstDayOfPrevMonth = firstOfCurMonth(monthAgo);
  return createArrayOfDays(monthAgo, firstDayOfPrevMonth).splice(
    -1 * (firstOfCurMonth(date).getMonth() + 1)
  );
};

////Creating an array of next month dates that we need
const createArrayOfNextMth = function (date) {
  const monthFromNow = new Date(date.getTime());
  if (monthFromNow.getDate() > 28) {
    monthFromNow.setDate(28);
  }
  monthFromNow.setMonth(monthFromNow.getMonth() + 1);
  const firstDayOfNextMth = firstOfCurMonth(monthFromNow);
  return createArrayOfDays(monthFromNow, firstDayOfNextMth).splice(
    0,
    42 - daysBeg.length
  );
};

////Displaying days to the calendar

const displayCalendar = function (date) {
  const curMonth = createArrayOfDays(date, firstOfCurMonth(date));
  const prevMonth = createArrayOfLastMth(date);
  ////Concating two arrays
  daysBeg = prevMonth.concat(curMonth);
  const nextMonth = createArrayOfNextMth(date);
  ////Concating with other arrays
  const days = daysBeg.concat(nextMonth).reverse();

  daysEl.innerHTML = "";
  days.forEach(function (day) {
    const html = `<div class="calendar__day"><h3>${day}</h3></div>`;
    daysEl.insertAdjacentHTML("afterbegin", html);
  });
};

//Event listeners

pickDateBtn.addEventListener("click", function () {
  calendar.classList.toggle("hidden");
  displayMonth(today);
  displayCalendar(today);
});

leftArrowCal.addEventListener("click", function () {
  const past = today.setMonth(today.getMonth() - 1);
  displayMonth(past);
  displayCalendar(past);
});

rightArrowCal.addEventListener("click", function () {
  const future = today.setMonth(today.getMonth() + 1);
  displayMonth(future);
  displayCalendar(future);
});
