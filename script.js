const toggleTheme = document.getElementById('toggleTheme');
const body = document.body;

if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark");
}

toggleTheme.addEventListener("click", () => {
  body.classList.toggle("dark");
  localStorage.setItem("theme", body.classList.contains("dark") ? "dark" : "light");
});

// 👇 Animate elements on scroll
const animatedElements = document.querySelectorAll("[data-animate]");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      observer.unobserve(entry.target); // Animate once
    }
  });
}, {
  threshold: 0.2
});

animatedElements.forEach(el => observer.observe(el));
