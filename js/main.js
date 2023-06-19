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
