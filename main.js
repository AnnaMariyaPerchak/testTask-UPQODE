// ------------------------- for carousel after header ---------------------------------------------
const prevButton = document.getElementById("carousel-button-prev");
const nextButton = document.getElementById("carousel-button-next");
const slideNav = document.getElementById("carousel-slide-nav");
const slides = document.querySelectorAll(".carousel__item");
const totalSlides = slides.length;
let slidePos = 0;
let navigation = slideNav.childNodes;

slideNavigation();

function displaySlide(element, className) {
  for (let item = 0; item < totalSlides; item++) {
    item === slidePos
      ? element[item].classList.add(className)
      : element[item].classList.remove(className);
  }
}

function nextSlide() {
  if (slidePos === totalSlides - 1) {
    slidePos = 0;
  } else {
    slidePos++;
  }
  displaySlide(slides, "carousel__item__visible");
  displaySlide(navigation, "nav-current");
}

function prevSlide() {
  if (slidePos === 0) {
    slidePos = totalSlides - 1;
  } else {
    slidePos--;
  }
  displaySlide(slides, "carousel__item__visible");
  displaySlide(navigation, "nav-current");
}

function slideNavigation() {
  for (let slide = 0; slide < totalSlides; slide++) {
    let span = document.createElement("span");
    if (slide === slidePos) {
      span.classList.add("nav-current");
    }
    slideNav.append(span);
    span.addEventListener("click", function () {
      slidePos = slide;
      displaySlide(slides, "carousel__item__visible");
      displaySlide(navigation, "nav-current");
    });
  }
}

prevButton.addEventListener("click", prevSlide);
nextButton.addEventListener("click", nextSlide);

setInterval(nextSlide, 7500);

// ------------------------- for team__carousel ---------------------------------------------
const prevButtonTeamCarousel = document.getElementById("carousel-button-prev-TeamCarousel");
const nextButtonTeamCarousel = document.getElementById("carousel-button-next-TeamCarousel");
const slideNavTeamCarousel = document.getElementById("carousel-slide-nav-TeamCarousel");
const slidesTeamCarousel = document.querySelectorAll(".team__carousel__item");
const totalSlidesTeamCarousel = slidesTeamCarousel.length;
let slidePosTeamCarousel = 0;
let navigationTeamCarousel = slideNavTeamCarousel.childNodes;

slideNavigationTeamCarousel();

function displaySlideTeamCarousel(element, className) {
  for (let item = 0; item < totalSlidesTeamCarousel; item++) {
    item === slidePosTeamCarousel
      ? element[item].classList.add(className)
      : element[item].classList.remove(className);
  }
}

function nextSlideTeamCarousel() {
  if (slidePosTeamCarousel === totalSlidesTeamCarousel - 1) {
    slidePosTeamCarousel = 0;
  } else {
    slidePosTeamCarousel++;
  }
  displaySlideTeamCarousel(slidesTeamCarousel, "team__carousel__item__visible");
  displaySlideTeamCarousel(navigationTeamCarousel, "nav-current");
}

function prevSlideTeamCarousel() {
  if (slidePosTeamCarousel === 0) {
    slidePosTeamCarousel = totalSlidesTeamCarousel - 1;
  } else {
    slidePosTeamCarousel--;
  }
  displaySlideTeamCarousel(slidesTeamCarousel, "team__carousel__item__visible");
  displaySlideTeamCarousel(navigationTeamCarousel, "nav-current");
}

function slideNavigationTeamCarousel() {
  for (let slide = 0; slide < totalSlidesTeamCarousel; slide++) {
    let span = document.createElement("span");
    if (slide === slidePosTeamCarousel) {
      span.classList.add("nav-current");
    }
    slideNavTeamCarousel.append(span);
    span.addEventListener("click", function () {
      slidePosTeamCarousel = slide;
      displaySlideTeamCarousel(
        slidesTeamCarousel,
        "team__carousel__item__visible"
      );
      displaySlideTeamCarousel(navigationTeamCarousel, "nav-current");
    });
  }
}

prevButtonTeamCarousel.addEventListener("click", prevSlideTeamCarousel);
nextButtonTeamCarousel.addEventListener("click", nextSlideTeamCarousel);

setInterval(nextSlideTeamCarousel, 7500);

// ----------------- change header background -------------------------------
// const hamburgerMenu = document.getElementById('hamburgerMenu')
const nav = document.getElementById('nav')
const hamburgerMenu__btn__span = document.getElementById('hamburgerMenu__btn__span')

console.log(nav)
window.addEventListener('scroll', function() {
  
  console.log(window.scrollY)
  if(window.scrollY>160){
    hamburgerMenu__btn__span.style.background='black'
  } else {
    hamburgerMenu__btn__span.style.background='white'
  }

  if(window.scrollY>1050){
    nav.style.backgroundColor='black'
  } else {
    nav.style.backgroundColor='transparent';
  }
  // if (hamburgerMenu.style.visibility=='visible'){
    // 
  // }

});