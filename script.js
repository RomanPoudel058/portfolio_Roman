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
     location.href = "form_details.html";
    }, 800);
  });
}

// ========== THEME TOGGLE ==========

// Check saved theme
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    document.getElementById("theme-toggle").innerText = "☀ Light Mode";
}

// Toggle mode on click
document.getElementById("theme-toggle").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // Update button text
    const isDark = document.body.classList.contains("dark-mode");
    document.getElementById("theme-toggle").innerText = isDark ? "☀ Light Mode" : "🌙 Dark Mode";

    // Store user preference
    localStorage.setItem("theme", isDark ? "dark" : "light");
});

// ========== BACK TO TOP BUTTON ==========

const backToTop = document.getElementById("backToTop");

// Show/Hide Button on Scroll
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {   // Show after scrolling 300px
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
});

// Smooth Scroll to Top When Clicked
backToTop.addEventListener("click", () => {
    window.scrollTo({ 
        top: 0, 
        behavior: "smooth" 
    });
});

// ================= IMAGE SLIDER =================
let index = 0;
const slides = document.querySelectorAll(".slide");

document.getElementById("next").onclick = () => {
    index = (index + 1) % slides.length;
    updateSlider();
};

document.getElementById("prev").onclick = () => {
    index = (index - 1 + slides.length) % slides.length;
    updateSlider();
};

function updateSlider() {
    document.querySelector(".slider").style.transform = `translateX(-${index * 100}%)`;
}



