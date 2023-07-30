let slideIndex1 = 1;
showSlides(slideIndex1, 1);

function plusSlides(n, containerNumber) {
  showSlides((slideIndex1 += n), containerNumber);
}

function showSlides(n, containerNumber) {
  let i;
  let slides;
  if (containerNumber === 1) {
    slides = document.getElementsByClassName("mySlides1");
  } else if (containerNumber === 2) {
    slides = document.getElementsByClassName("mySlides2");
  }
  if (n > slides.length) {
    slideIndex1 = 1;
  }
  if (n < 1) {
    slideIndex1 = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex1 - 1].style.display = "block";
}

var TrandingSlider = new Swiper(".tranding-slider", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2.5,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
