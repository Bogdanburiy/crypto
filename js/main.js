$(document).ready(function () {

  if ($(window).width() > 992) {

    function statsActive() {
      if ($(".takeaway-scrolling").find(".swiper-slide-active").hasClass("stats-start")) {
        $(".section-scroll__content-stats .stats-grid svg").addClass("active");
      } else {
        $(".section-scroll__content-stats .stats-grid svg").removeClass(
          "active"
        );
      }
    }

    swiperScrolling = new Swiper(".takeaway-scrolling", {
      direction: "horizontal",
      slidesPerView: 1,
      spaceBetween: 30,
      mousewheel: true,
      sensitivity: 30,
      on: {
        init: statsActive,
        slideChangeTransitionEnd: statsActive,
      },
    });

    $("a.last-screen__arrow").on("click", function (e) {
      e.preventDefault();
      let index = Number($(this).attr("href"));
      swiperScrolling.slideTo(index, 1000, true); //index, speed, runCallbacks
    });

    $("a.menu-scroll").on("click", function (e) {
      e.preventDefault();
      let index = Number($(this).attr("href"));
      swiperScrolling.slideTo(index, 1000, true); //index, speed, runCallbacks
    });
    
    $("a.footer-arrow").on("click", function (e) {
      e.preventDefault();
      let index = Number($(this).attr("href"));
      swiperScrolling.slideTo(index, 1000, true); //index, speed, runCallbacks
    });
  } else {
    $(window).scroll(function () {
      if (
        $(this).scrollTop() + $(window).height() * 0.5 >
        $(".section-scroll__content-stats .stats-grid svg").offset().top
      ) {
        $(".section-scroll__content-stats .stats-grid svg").addClass("active");
      }
    });
    $("#mobile-scrollTop").on("click", function () {
      $("body").scrollTop(0);
    });
  }
  
});

// Preloader
$(window).on('load', function () {
	$(".takeaway-preloader").delay(4000).fadeOut("slow");
    $(".takeaway-preloader__animation").delay(3500).fadeOut("slow");
});

var body = $("body");
var mainContent = $(".takeaway-scrolling");
body.addClass("preloader-active");
setTimeout(function () {
  body.removeClass("preloader-active");
  mainContent.show();
}, 4000);

// Fixed header
$(document).on("scroll", function () {
  if ($(document).scrollTop() > 30) {
    $("#header").addClass("fixed-header");
  } else {
    $("#header").removeClass("fixed-header");
  }
});

// Open mobile menu
$(".header-top__hamburger").click(function () {
  $(this).toggleClass("active");
  $(".overlay").toggleClass("open");
  $("body").toggleClass("mobile-open");
});

$(".menu-mob__scroll").on("click", function (e) {
  e.preventDefault();
  var target = $(this).attr("href");
  $(".header-top__hamburger").removeClass("active");
  $(".overlay").removeClass("open");
  $("body").removeClass("mobile-open");
  $("html, body").animate(
    {
      scrollTop: eval($(target).offset().top - 70),
    },
    "slow"
  );
});

// Counter
function getTimeRemaining(endtime) {
  let t = Date.parse(endtime) - Date.parse(new Date());
  let seconds = Math.floor((t / 1000) % 60);
  let minutes = Math.floor((t / 1000 / 60) % 60);
  let hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  let days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    total: t,
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
  };
}

function initializeClock(id, endtime) {
  let clock = document.getElementById(id);
  let daysSpan = clock.querySelector(".days");
  let hoursSpan = clock.querySelector(".hours");
  let minutesSpan = clock.querySelector(".minutes");
  let secondsSpan = clock.querySelector(".seconds");

  function updateClock() {
    let t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ("0" + t.hours).slice(-2);
    minutesSpan.innerHTML = ("0" + t.minutes).slice(-2);
    secondsSpan.innerHTML = ("0" + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

const deadline = "February 25 2023";
initializeClock("countdown", deadline);

swiperRoad = new Swiper(".swiper__road-map", {
  speed: 400,
  slidesPerView: 2,
  spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    autoHeight: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    576: {
      slidesPerView: 2,
      loop: false,
    },
  },
});

const breakpoint = window.matchMedia("(min-width: 992px)");

if (breakpoint.matches) {
  swiperRoad.destroy(true, true);
}

// particlesJS.load("particles-triangle", "js/particlesjs-config.json");
