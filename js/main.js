$(document).ready(function () {
  if ($(window).width() > 992) {
    function statsActive() {
      if (
        $(".takeaway-scrolling")
          .find(".swiper-slide-active")
          .hasClass("stats-start")
      ) {
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
  } else {
    $(window).scroll(function () {
      if (
        $(this).scrollTop() + $(window).height() * 0.5 >
        $(".section-scroll__content-stats .stats-grid svg").offset().top
      ) {
        $(".section-scroll__content-stats .stats-grid svg").addClass("active");
      }
    });
  }
});

// Preloader
$(window).on('load', function () {
	$(".takeaway-preloader").delay(4000).fadeOut("slow");
  $(".takeaway-preloader__animation").delay(3500).fadeOut("slow");
})

var body = $("body");
body.addClass("preloader-active");
setTimeout(function () {
  body.removeClass("preloader-active");
}, 4500);

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
});

swiperRoad = new Swiper(".swiper__road-map", {
  speed: 400,
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    autoHeight: true,
  },
});

const breakpoint = window.matchMedia("(min-width: 992px)");

if (breakpoint.matches) {
  swiperRoad.destroy(true, true);
}

particlesJS.load("particles-triangle", "js/particlesjs-config.json");