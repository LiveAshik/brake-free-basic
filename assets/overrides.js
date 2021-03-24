/*
  Responsive Menu
------------------------------------------------------------------------*/
jQuery(document).ready(function ($) {
  "use strict";

  var ph1_responsive_menu = $(".responsive-menu");

  $('body').on("click", 'a.responsive-menu-hand', function () {
    if ($(".responsive-menu").hasClass('active')) {
      $(".responsive-menu").slideUp();
      $(".responsive-menu").removeClass('active');
      $("body").removeClass('mobile-menu-active');
    } else {
      $(".responsive-menu").slideDown();
      $(".responsive-menu").addClass('active');
      $("body").addClass('mobile-menu-active');
    }
    return false;
  });

  $('body').on("click", 'a.responsive-menu-close', function () {
    $(".responsive-menu").slideUp();
    $(".responsive-menu").removeClass('active');
    $("body").removeClass('mobile-menu-active');
  });
});

jQuery(window).scroll(function () {
  "use strict";

  var sa_body_scroll = jQuery(document).scrollTop();

  if (sa_body_scroll > 50) {
    jQuery('.sk_header').addClass('active');
  } else if (sa_body_scroll < 50) {
    jQuery('.sk_header').removeClass('active');
  }
});



/*
  Section 4 slider
----------------------------------------*/
jQuery(document).ready(function ($) {
  "use strict";

  $('.bf4_curosel').slick({
    slidesToShow: 2,
    responsive: [{
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 551,
        settings: {
          slidesToShow: 1,
        }
      }
    ]

  });

  $('.bf14_curosel').slick({
    slidesToShow: 3,
    responsive: [{
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 551,
        settings: {
          slidesToShow: 1,
        }
      }
    ]

  });

  $('.bf9_curosel').slick({
    slidesToShow: 3,
    responsive: [{
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 551,
        settings: {
          slidesToShow: 1,
        }
      }
    ]

  });


  $('.').slick({
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: true,
    fade: false,
    asNavFor: '.slider-nav-thumbnails',
  });

  $('.slider-nav-thumbnails').slick({
    slidesToShow: 2,
    slidesToScroll: 2,
    asNavFor: '.slider',
    dots: true,
    focusOnSelect: true
  });

  // Remove active class from all thumbnail slides
  $('.slider-nav-thumbnails .slick-slide').removeClass('slick-active');

  // Set active class to first thumbnail slides
  $('.slider-nav-thumbnails .slick-slide').eq(0).addClass('slick-active');

  // On before slide change match active thumbnail to current slide
  $('.slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    var mySlideNumber = nextSlide;
    $('.slider-nav-thumbnails .slick-slide').removeClass('slick-active');
    $('.slider-nav-thumbnails .slick-slide').eq(mySlideNumber).addClass('slick-active');
  });




  var sk4_window_width = $(window).width();

  if (sk4_window_width < 550) {
    $('.sk4_items').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      mobileFirst: true,
      arrows: true,
      dots: false,
    });
  }

  $(window).on('resize', function () {
    if ($(window).width() < 550) {
      $('.sk4_items').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        mobileFirst: true,
        arrows: true,
        dots: false
      });
    } else {
      $('.sk4_items').filter('.slick-initialized').slick('unslick');
    }
  });

});