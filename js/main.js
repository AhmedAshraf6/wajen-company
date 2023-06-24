// scroll Functionality
const scroll = document.querySelector('.scrollTop');
window.addEventListener('scroll', function () {
  scroll.classList.toggle('active', window.scrollY > 500);
});

scroll.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
  });
});

// Blur Loading
const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.hero-section');
var nav = document.querySelector('.nav-big');

let navsmall = document.querySelector('.nav-small');
var htmlElement = document.getElementsByTagName('html')[0];

let load = 0;
let int = setInterval(blurring, 30);
function blurring() {
  load++;
  if (load > 99) {
    clearInterval(int);

    htmlElement.style.overflowY = 'scroll';
    nav.style.opacity = '1';
    navsmall.style.opacity = '1';
  }
  loadText.innerHTML = `${load}%`;
  loadText.style.opacity = scale(load, 0, 100, 1, 0);
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}
function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}

// hubspot Form
// Query DOM Elements

// Navbar
const hamburger = document.querySelector('.hamburger');
const hamburger_icon = hamburger.querySelector('.hamburgar-icon');
const mobile_menu = document.querySelector('.mobile-menu');
const mobile_menuLinks = document.querySelectorAll(
  '.mobile-menu .mobile-menu-link'
);

hamburger.addEventListener('click', () => {
  if (
    hamburger_icon.src.includes('hamburgar-open.png') ||
    hamburger_icon.src.includes('hamburgar-open-white.png')
  ) {
    htmlElement.style.overflowY = 'hidden';
  } else {
    htmlElement.style.overflowY = 'scroll';
  }
  hamburger_icon.src =
    hamburger_icon.src.includes('hamburgar-open.png') ||
    hamburger_icon.src.includes('hamburgar-open-white.png')
      ? '../images/close.png'
      : window.pageYOffset > 1
      ? '../images/hamburgar-open.png'
      : '../images/hamburgar-open-white.png';
  mobile_menu.classList.toggle('is-open');
});
mobile_menuLinks.forEach((a) => {
  a.addEventListener('click', () => {
    mobile_menu.classList.remove('is-open');
    htmlElement.style.overflowY = 'scroll';
  });
});
// Navbar Sticky
window.addEventListener('scroll', () => {
  var nav = document.querySelector('.nav-big');
  let navsmall = document.querySelector('.nav-small');
  let global = document.querySelector('.global-icon');
  let hamburgarIcon = document.querySelector('.hamburgar-icon');
  nav.classList.toggle('sticky', window.pageYOffset > 1);
  navsmall.classList.toggle('sticky', window.pageYOffset > 1);
  if (window.pageYOffset > 1) {
    global.src = '../images/contact/global.png';
    hamburgarIcon.src = '../images/hamburgar-open.png';
  } else {
    global.src = '../images/contact/global-white.png';
    hamburgarIcon.src = '../images/hamburgar-open-white.png';
  }
});
