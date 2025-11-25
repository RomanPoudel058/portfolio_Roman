// ========== DISPLAY SAVED FORM DATA ==========
document.addEventListener("DOMContentLoaded", () => {
  const nameField = document.getElementById("display-name");
  const emailField = document.getElementById("display-email");
  const messageField = document.getElementById("display-message");

  if (nameField && emailField && messageField) {
    nameField.textContent = localStorage.getItem("formName") || "Not provided";
    emailField.textContent = localStorage.getItem("formEmail") || "Not provided";
    messageField.textContent = localStorage.getItem("formMessage") || "Not provided";
  }
});