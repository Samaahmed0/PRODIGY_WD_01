document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.querySelector(".navbar");
    const navLinks = document.querySelectorAll(".nav-link");
  
    function changeNavbarBackground() {
      if (window.scrollY > 0) {
        navbar.classList.add("scrolled");
        navLinks.forEach(link => link.classList.add("scrolled-link"));
      } else {
        navbar.classList.remove("scrolled");
        navLinks.forEach(link => link.classList.remove("scrolled-link"));
      }
    }
  
    window.addEventListener("scroll", changeNavbarBackground);
  });
  