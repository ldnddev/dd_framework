function dd_slider() {
  const slides = document.querySelectorAll('.dd-slider__item');
  const prevBtn = document.getElementById('dd-slider__previous');
  const nextBtn = document.getElementById('dd-slider__next');
  const tabsContainer = document.querySelector('.dd-slider__tabs');
  let currentSlide = 0;

  function createTabs() {
    tabsContainer.innerHTML = '';
    slides.forEach((_, i) => {
      const li = document.createElement('li');
      const button = document.createElement('button');
      button.textContent = i + 1;
      button.addEventListener('click', () => {
        currentSlide = i;
        showSlide(currentSlide);
      });
      li.appendChild(button);
      tabsContainer.appendChild(li);
    });
  }

  function updateTabs() {
    const tabListButton = tabsContainer.querySelectorAll('button');
    tabListButton.forEach((li, i) => {
      li.classList.toggle('-current', i === currentSlide);
    });
  }

  function showSlide(index) {
    const position = (0 - index) * 100;
    slides.forEach((slide, i) => {
      slide.style.left = `${position}%`;
      slide.classList.toggle('-current', i === index);
    });
    updateTabs();
  }

  createTabs();
  updateTabs();

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  }

  // Event listeners for buttons
  nextBtn.addEventListener('click', nextSlide);
  prevBtn.addEventListener('click', prevSlide);

  // Event listener for keyboard navigation
  document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') {
          prevSlide();
      } else if (e.key === 'ArrowRight') {
          nextSlide();
      }
  });
}
// Initialize on initial page load
document.addEventListener('DOMContentLoaded', () => {
  dd_slider();
});
// Fire axe after HTMX settles
document.body.addEventListener("htmx:afterSettle", function (event) {
  dd_slider();
});
