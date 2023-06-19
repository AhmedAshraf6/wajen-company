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

// hubspot Form
// Query DOM Elements
const script = document.getElementById('hubspot-script');
const footer = document.getElementById('ss');

// Add load event listener to script
script.addEventListener('load', function () {
  // run when script is loaded

  // Create hubspot form
  hbspt.forms.create({
    portalId: '139691288',
    formId: '3355dc76-496c-4f5d-aa84-5a348c6bb49f',
    target: '#contact-form', // The CSS ID of the div where the form will appear
  });
});

// Create intersection observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    // check if entry (footer) is intersecting
    if (entry.isIntersecting) {
      // footer is in viewport

      // add src attribute to script (this will load the external script)
      script.src = script.dataset.src;

      // disconnect observer because we don't need it anymore
      observer.disconnect();
    }
  });
});

// Observe footer element
observer.observe(footer);
