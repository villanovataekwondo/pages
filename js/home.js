// each card appears 300ms after the previous
document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll(".card");
  
    cards.forEach((card, index) => {
      setTimeout(() => {
        card.classList.add("show");
      }, index * 300); 
    });
});

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});