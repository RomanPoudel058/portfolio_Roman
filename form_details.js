document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("display-name").textContent =
        localStorage.getItem("formName") || "Not provided";

    document.getElementById("display-email").textContent =
        localStorage.getItem("formEmail") || "Not provided";

    document.getElementById("display-message").textContent =
        localStorage.getItem("formMessage") || "Not provided";
});
