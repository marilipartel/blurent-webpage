"use strict";

import "../styles/index.scss";
import "../styles/carousel.scss";

////////////////////////////////////////STICKY NAVBAR////////////////////////////////////////////////////////////
const navbar = document.querySelector(".navbar");
const hero = document.querySelector(".hero");
const navHeight = navbar.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) navbar.classList.add("sticky-top");
  else navbar.classList.remove("sticky-top");
};

const heroObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

heroObserver.observe(hero);

////////////////////////////////////////REVEALING SECTIONS///////////////////////////////////////////////////////

const allSections = document.querySelectorAll(".section");

const revealSection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});

////////////////////////////////////////MAIN PAGE CAROUSELS//////////////////////////////////////////////////////

const cards = document.querySelectorAll(".products__card");
const btnLeft = document.querySelector(".left");
const btnRight = document.querySelector(".right");

let curCard = 0;
let maxCard = cards.length;

const goToCard = function (card) {
  cards.forEach(
    (c, i) => (c.style.transform = `translateX(${100 * (i - card)}%)`)
  );
};

goToCard(0);

const nextCard = function () {
  if (curCard === maxCard - 3) {
    curCard = 0;
  } else {
    curCard++;
  }
  goToCard(curCard);
};

const prevCard = function () {
  if (curCard === 0) {
    curCard = maxCard - 3;
  } else {
    curCard--;
  }
  goToCard(curCard);
};

btnRight.addEventListener("click", nextCard);
btnLeft.addEventListener("click", prevCard);
document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") prevCard();
  else if (e.key === "ArrowRight") nextCard();
});

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

const navItems = document.querySelectorAll(".product__navitem");
const nav = document.querySelector(".product__nav");
const contents = document.querySelectorAll(".product__content");

nav.addEventListener("click", function (e) {
  const clicked = e.target.closest(".product__navitem");
  if (!clicked) return;
  navItems.forEach((i) => i.classList.remove("product__navitem--active"));
  contents.forEach((c) => c.classList.remove("product__content--active"));
  clicked.classList.add("product__navitem--active");
  document
    .querySelector(`.product__content--${clicked.dataset.tab}`)
    .classList.add("product__content--active");
});

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
