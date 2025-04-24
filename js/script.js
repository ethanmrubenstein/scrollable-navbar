document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("nav");

  function toggleTransparency() {
    if (window.scrollY > 0) {
      navbar.classList.add("scroll");
    }
  }
});
