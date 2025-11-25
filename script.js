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

// Run when DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");
    const msgDiv = document.getElementById("form-message");

    // === FORM SUBMISSION (only on index.html) ===
    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault(); // This stops the 405 error

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();

            const errors = [];

            if (name.length < 2) errors.push("Name must be at least 2 characters.");
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.push("Invalid email address.");
            if (message.length < 5) errors.push("Message too short (min 5 characters).");

            if (errors.length > 0) {
                msgDiv.textContent = errors.join(" ");
                msgDiv.style.color = "tomato";
                return;
            }

            // Save as one object (cleaner)
            localStorage.setItem("contactData", JSON.stringify({ name, email, message }));

            msgDiv.textContent = "Success! Redirecting...";
            msgDiv.style.color = "lightgreen";

            setTimeout(() => {
                window.location.href = "form_details.html";
            }, 800);
        });
    }

    // === DISPLAY DATA (only on form_details.html) ===
    const displayName = document.getElementById("display-name");
    const displayEmail = document.getElementById("display-email");
    const displayMessage = document.getElementById("display-message");

    if (displayName && displayEmail && displayMessage) {
        const data = localStorage.getItem("contactData");
        if (data) {
            const parsed = JSON.parse(data);
            displayName.textContent = parsed.name;
            displayEmail.textContent = parsed.email;
            displayMessage.textContent = parsed.message;
        } else {
            displayName.textContent = "No data found";
            displayEmail.textContent = "No data found";
            displayMessage.textContent = "Please submit the form first.";
        }
    }
});