const bars = document.querySelectorAll(".skill-bar-fill");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const percent = entry.target.getAttribute("data-percent");
      entry.target.style.width = percent + "%";
    }
  });
});

bars.forEach(bar => observer.observe(bar));
