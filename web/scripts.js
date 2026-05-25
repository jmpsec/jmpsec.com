document.addEventListener("DOMContentLoaded", () => {
  const currentYear = document.getElementById("current-year");

  if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
  }

  const revealTargets = document.querySelectorAll(
    [
      ".hero-copy",
      ".proof-panel",
      ".experience-panel",
      ".company-mark",
      ".section-heading",
      ".section-cta",
      ".service-card",
      ".project-card",
      ".process-list li",
      ".contact-panel",
    ].join(",")
  );

  if (!revealTargets.length) {
    return;
  }

  document.documentElement.classList.add("scroll-effects");
  document.body.dataset.scrollDirection = "down";

  let lastScrollY = window.scrollY;
  const updateScrollDirection = () => {
    const currentScrollY = window.scrollY;

    if (Math.abs(currentScrollY - lastScrollY) > 4) {
      document.body.dataset.scrollDirection = currentScrollY > lastScrollY ? "down" : "up";
      lastScrollY = currentScrollY;
    }
  };

  window.addEventListener("scroll", updateScrollDirection, { passive: true });

  revealTargets.forEach((target, index) => {
    target.classList.add("scroll-reveal");
    target.style.setProperty("--reveal-delay", `${Math.min(index % 6, 5) * 55}ms`);
  });

  if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    revealTargets.forEach((target) => target.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle("is-visible", entry.isIntersecting);
      });
    },
    {
      rootMargin: "-8% 0px -12%",
      threshold: 0.12,
    }
  );

  revealTargets.forEach((target) => observer.observe(target));
});
