// Skill bar animation
const bars = document.querySelectorAll(".skill-bar-fill");
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const percent = entry.target.getAttribute("data-percent");
            entry.target.style.width = percent + "%";
        }
    });
});
bars.forEach((bar) => observer.observe(bar));

// ========== CONTACT FORM (VALIDATION + LOCALSTORAGE + REDIRECT) ==========
const form = document.getElementById("contact-form");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");
    const formMsg = document.getElementById("form-msg");

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    let errors = [];

    if (name.length < 2) {
      errors.push("Name must be at least 2 characters.");
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      errors.push("Please enter a valid email address.");
    }

    if (message.length < 5) {
      errors.push("Message must be at least 5 characters.");
    }

    if (errors.length > 0) {
      formMsg.textContent = errors.join(" ");
      formMsg.style.color = "tomato";
      return;
    }

    // SAVE TO LOCAL STORAGE
    localStorage.setItem("formName", name);
    localStorage.setItem("formEmail", email);
    localStorage.setItem("formMessage", message);

    formMsg.textContent = "Form submitted successfully! Redirecting...";
    formMsg.style.color = "lightgreen";

    setTimeout(() => {
      window.location.href = "form_details.html";
    }, 800);
  });
}