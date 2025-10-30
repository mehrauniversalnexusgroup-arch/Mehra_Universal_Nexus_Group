// main.js - Smooth scrolling + Navbar scroll effect
document.addEventListener('DOMContentLoaded', function () {

  // ===== Smooth scroll for internal links =====
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // ===== Navbar scroll effect =====
  const navbar = document.querySelector('.navbar');
  const scrollTrigger = 50; // pixel distance

  function toggleNavbarScroll() {
    if (window.scrollY > scrollTrigger) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  toggleNavbarScroll(); // check on load
  window.addEventListener('scroll', toggleNavbarScroll);
});
