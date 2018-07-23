$(document).ready(function() {

// Preloader Script
$(window).on('load', function () {
     setTimeout(function() {
          $("#preloader").fadeOut("slow");
     }, 600);     
});
     
// Sticky Header
     $(window).scroll(function(event) {
          var menuScroll = $(window).scrollTop();
          if (menuScroll > 20) {
               $("#main-header").addClass("fixed-header");
          } else {
               $("#main-header").removeClass("fixed-header");
          }
     });

// Mobile Nav
     $("#nav-trigger").on('click touchstart', function() {
          $(".primary-navigation-container").slideToggle();
     });


// Aos Init
     AOS.init({
          duration: 800,
          once: false
     });


// Scroll Top Js
     $(window).scroll(function() {
          if ($(this).scrollTop() >= 70) {
               // If page is scrolled more than 70px
               $("#return-to-top").fadeIn('400'); // Fade in the arrow
          } else {
               $("#return-to-top").fadeOut('400'); // Else fade out the arrow
          }
     });
     $("#return-to-top").click(function() {
          // When arrow is clicked
          $("body,html").animate({
               scrollTop: 0 // Scroll to top of body
          }, 500
          );
     });


// Typed Script
     var typed = new Typed('#typed', {
          strings: ["Hi, I'm Waffle"],
          typeSpeed: 150
     });



}); // Document Ready