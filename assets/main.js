/* TRUE TO ALL — Shared site behavior */

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".main-nav");
  if(toggle && nav){
    toggle.addEventListener("click", () => {
      nav.classList.toggle("open");
      const isOpen = nav.classList.contains("open");
      toggle.setAttribute("aria-expanded", isOpen);
      toggle.textContent = isOpen ? "✕ MENU" : "☰ MENU";
    });
  }

  const yearEl = document.getElementById("year");
  if(yearEl) yearEl.textContent = new Date().getFullYear();
});
