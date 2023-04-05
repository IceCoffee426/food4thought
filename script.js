// Animate the "latest recipes" carousel
let slideshowIndex = 0;
showSlide(slideshowIndex);

let width = window.innerWidth;
window.onresize = function () {
  width = window.innerWidth;
  if (width >= 750) {
    showSlide(0);
  }
  if (width < 750) {
    showSlide(0);
  }
};

function showSlide(n) {
  const slides = document.getElementsByClassName("recipe-slide");
  const dots = document.getElementsByClassName("dot");

  if (n > slides.length - 1) n = 0;
  if (n < 0) n = slides.length - 1;

  slideshowIndex = n;

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }

  slides[slideshowIndex].style.display = "block";
  dots[slideshowIndex].classList.add("active");
  if (window.innerWidth >= 750) {
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "block";
    }
  }
}

document.getElementById("slideshow-prev").onclick = function () {
  showSlide((slideshowIndex -= 1));
};

document.getElementById("slideshow-next").onclick = function () {
  showSlide((slideshowIndex += 1));
};

// Show search modal
document.getElementById("header-search").onclick = function () {
  document.querySelector(".modal").style.display = "block";
  document.getElementById("search-modal").style.display = "block";
  document.getElementById("attributions").style.display = "none";
};

document.getElementById("search-button").onclick = function () {
  document.querySelector(".modal").style.display = "block";
  document.getElementById("search-modal").style.display = "block";
  document.getElementById("attributions").style.display = "none";
};

document.getElementById("attributions-link").onclick = function () {
  document.querySelector(".modal").style.display = "block";
  document.getElementById("search-modal").style.display = "none";
  document.getElementById("attributions").style.display = "block";
};

document.getElementById("close-button").onclick = function () {
  document.querySelector(".modal").style.display = "none";
};

// Open nav menu
document.getElementById("burger").onclick = function () {
  slideInAnimation(document.getElementById("nav-menu"));
};

document.getElementById("close-nav").onclick = function () {
  slideOutAnimation(document.getElementById("nav-menu"));
};

function slideInAnimation(element) {
  element.animate(
    [{ transform: "translateX(-300px)" }, { transform: "translateX(0)" }],
    { duration: 500 },
    { iterations: 1 }
  );
  element.style.transform = "translateX(0)";
}

function slideOutAnimation(element) {
  element.animate(
    [{ transform: "translateX(0)" }, { transform: "translateX(-300px)" }],
    { duration: 500 },
    { iterations: 1 }
  );
  element.style.transform = "translateX(-300px)";
}
