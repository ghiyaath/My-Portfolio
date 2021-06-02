// Script to initialize all 3rd party plugins, as well as needed functions for the site

// Initialize fullpage Fullpage
new fullpage("#fullpage", {
  anchors: ["Landing", "About", "Resume", "Portfolio", "Testimonial", "Contact"],
  navigation: true,
  navigationPosition: "left",
  navigationTooltips: ["Home", "About", "Resume", "Portfolio", "Testimonials", "Contact"],
  center: true,
  
});

//   Init Animate On Scroll
AOS.init();

$(document).ready(function () {
  //   Initialize product slider and set options
  $(".owl-carousel").owlCarousel({
    items: 1,
    margin: 0,
    stagePadding: 200,
    loop: true,
    dots: false,
    //   autoplay: true,
    center: true,
  });
});

//   function to open modal
function openModal() {
  document.getElementById("modal").classList.toggle("modal-active");
}

