// Smooth scroll for nav links (optional enhancement)
document.querySelectorAll("nav ul li a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const section = document.querySelector(link.getAttribute("href"));
    section.scrollIntoView({ behavior: "smooth" });
  });
});
