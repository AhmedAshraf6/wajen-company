const tabBtns = document.querySelector('.tab-btns');

tabBtns.addEventListener('click', (e) => {
  Array.from(tabBtns.children).forEach((btn) => {
    btn.classList.remove('active-btn');
  });
  let activeTab = e.target.getAttribute('data-tab-btn');
  let tabContent = document.querySelectorAll('.tab-content');
  if (activeTab) {
    e.target.closest('.tab').classList.add('active-btn');

    Array.from(tabContent).forEach((content) => {
      const activeContent = content.getAttribute('data-tab-content');
      if (activeContent === activeTab) {
        content.classList.add('active');
      } else {
        content.classList.remove('active');
      }
    });
  }
});

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
var htmlElement = document.getElementsByTagName('html')[0];

let load = 0;
let int = setInterval(blurring, 30);
function blurring() {
  load++;
  if (load > 99) {
    clearInterval(int);

    htmlElement.style.overflowY = 'scroll';
  }
  loadText.innerHTML = `${load}%`;
  loadText.style.opacity = scale(load, 0, 100, 1, 0);
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}
function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}
