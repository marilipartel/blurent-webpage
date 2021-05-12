"use strict";

import "../styles/index.scss";
import "../styles/carousel.scss";

////////////////////////////////////////MAIN PAGE CAROUSELS//////////////////////////////////////////////////////

$(document).ready(function () {
  $(".owl-carousel-1").owlCarousel({
    nav: true,
    navContainer: ".controls-1",
    loop: true,
    items: 3,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      700: {
        items: 2,
      },
      1200: {
        items: 3,
      },
    },
  });
  $(".owl-carousel-2").owlCarousel({
    nav: true,
    navContainer: ".controls-2",
    loop: true,
    items: 3,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      700: {
        items: 2,
      },
      1200: {
        items: 3,
      },
    },
  });
  $(".owl-carousel--img").owlCarousel({
    nav: true,
    navContainer: ".controls--img",
    loop: true,
    items: 1,
    dots: true,
    dotsContainer: ".dots--img",
  });
});

//////////////////////////////////////////CALENDAR//////////////////////////////////////////////////////

$(".bttn__pickdate").click(function () {});

$(".bttn__pickdate").datepicker(
  {
    minDate: 1,
  },
  $.datepicker.regional["et"]
);
//////////////////////////////////////////TABBED COMPONENT////////////////////////////////////////////////

$(".tabs").tabs();
