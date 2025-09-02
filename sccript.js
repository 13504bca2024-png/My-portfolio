// Smooth scroll section highlighting
const navLinks = document.querySelectorAll("nav ul li a");
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});

// Scroll reveal animation
const revealElements = document.querySelectorAll("section, .project, .contact-info");

const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;

  revealElements.forEach((el) => {
    const boxTop = el.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      el.classList.add("show");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// Animate skill bars when visible
const skillBars = document.querySelectorAll(".progress-bar");

function animateSkillBars() {
  skillBars.forEach((bar) => {
    const rect = bar.getBoundingClientRect();
    if (
      rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    ) {
      const width = bar.style.width;
      bar.style.width = "0";
      setTimeout(() => {
        bar.style.transition = "width 1.5s ease-in-out";
        bar.style.width = width;
      }, 100);
    }
  });
}

window.addEventListener("scroll", animateSkillBars);
window.addEventListener("load", animateSkillBars);