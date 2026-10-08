document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  const toggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  const navActions = document.querySelector(".nav-actions");

  if (toggle && navLinks && navActions) {
    toggle.addEventListener("click", () => {
      const isVisible = navLinks.style.display === "flex" && navActions.style.display === "flex";

      navLinks.style.display = isVisible ? "none" : "flex";
      navActions.style.display = isVisible ? "none" : "flex";
      navLinks.style.flexDirection = "column";
      navActions.style.flexDirection = "column";
      navLinks.style.position = "absolute";
      navLinks.style.top = "82px";
      navLinks.style.left = "20px";
      navLinks.style.right = "20px";
      navLinks.style.padding = "18px";
      navLinks.style.background = "rgba(15, 23, 42, 0.98)";
      navLinks.style.border = "1px solid rgba(148, 163, 184, 0.12)";
      navLinks.style.borderRadius = "16px";
      navLinks.style.zIndex = "50";

      navActions.style.position = "absolute";
      navActions.style.top = "230px";
      navActions.style.left = "20px";
      navActions.style.right = "20px";
      navActions.style.padding = "0 18px 18px";
      navActions.style.background = "rgba(15, 23, 42, 0.98)";
      navActions.style.border = "1px solid rgba(148, 163, 184, 0.12)";
      navActions.style.borderRadius = "16px";
      navActions.style.zIndex = "50";
    });
  }
});
