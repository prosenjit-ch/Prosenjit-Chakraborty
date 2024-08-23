function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}


var typed = new Typed('#multiple-text', {
  strings: ['Prosenjit Chakraborty.', 'Prosenjit Chakraborty.'],
  typeSpeed: 40,
  backSpeed: 100,
  backDelay: 100,
  loop: true

})

document.addEventListener('DOMContentLoaded', function() {
  const abstractButtons = document.querySelectorAll('.toggle-abstract');
  const bibtexButtons = document.querySelectorAll('.toggle-bibtex');

  // Set initial display state to 'none'
  abstractButtons.forEach(button => {
      const abstractContent = button.nextElementSibling;
      abstractContent.style.display = 'none';
  });

  bibtexButtons.forEach(button => {
      const bibtexContent = button.nextElementSibling;
      bibtexContent.style.display = 'none';
  });

  abstractButtons.forEach(button => {
      button.addEventListener('click', function() {
          const abstractContent = this.nextElementSibling;
          abstractContent.style.display = abstractContent.style.display === 'none' ? 'block' : 'none';
      });
  });

  bibtexButtons.forEach(button => {
      button.addEventListener('click', function() {
          const bibtexContent = this.nextElementSibling;
          bibtexContent.style.display = bibtexContent.style.display === 'none' ? 'block' : 'none';
      });
  });
});




let slideIndex = [0, 0, 0, 0, 0, 0];
const slideId = ["carousel1", "carousel2", "carousel3", "carousel4","carousel5", "carousel6"];
const numSlides = slideId.length;
const autoSlideIntervals = [];

function plusSlides(n, no) {
  const x = document.getElementById(slideId[no]).getElementsByClassName("carousel-item");
  slideIndex[no] = (slideIndex[no] + n + x.length) % x.length;
  updateSlides(no);
  resetAutoSlide(no); // Reset the automatic sliding when user manually navigates
}

function updateSlides(no) {
  const x = document.getElementById(slideId[no]).getElementsByClassName("carousel-item");
  for (let i = 0; i < x.length; i++) {
    x[i].style.transform = `translateX(-${slideIndex[no] * 100}%)`;
  }
}

function autoSlide(no) {
  plusSlides(1, no);
}

function resetAutoSlide(no) {
  clearInterval(autoSlideIntervals[no]);
  autoSlideIntervals[no] = setInterval(() => autoSlide(no), 3000); // Auto slide every 3 seconds
}

for (let i = 0; i < numSlides; i++) {
  resetAutoSlide(i); // Initialize auto-sliding for each carousel
}