const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");
const navLinks = document.querySelectorAll(".nav a");
const year = document.querySelector("#year");
const revealItems = document.querySelectorAll(".reveal");

year.textContent = new Date().getFullYear();

navToggle?.addEventListener("click", () => {
  const isOpen = nav.dataset.open === "true";
  nav.dataset.open = String(!isOpen);
  navToggle.setAttribute("aria-expanded", String(!isOpen));
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    nav.dataset.open = "false";
    navToggle.setAttribute("aria-expanded", "false");
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15,
  }
);

revealItems.forEach((item) => observer.observe(item));

const sections = document.querySelectorAll("main section[id]");
const navAnchorMap = new Map([...navLinks].map((link) => [link.getAttribute("href")?.slice(1), link]));

const activeSectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      navLinks.forEach((link) => link.classList.remove("is-active"));
      const currentLink = navAnchorMap.get(entry.target.id);
      currentLink?.classList.add("is-active");
    });
  },
  {
    rootMargin: "-35% 0px -55% 0px",
    threshold: 0.01,
  }
);

sections.forEach((section) => activeSectionObserver.observe(section));
