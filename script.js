document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("menu");

  menuToggle.addEventListener("click", () => {
    menu.classList.toggle("show");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");

  form.addEventListener("submit", function (event) {
    let isValid = true;
    clearErrors();

    if (nameInput.value.trim() === "") {
      showError(nameInput, "Name is required.");
      isValid = false;
    }

    if (emailInput.value.trim() === "") {
      showError(emailInput, "Email is required.");
      isValid = false;
    } else if (!validateEmail(emailInput.value)) {
      showError(emailInput, "Please enter a valid email address.");
      isValid = false;
    }

    if (messageInput.value.trim() === "") {
      showError(messageInput, "Message is required.");
      isValid = false;
    }

    if (!isValid) {
      event.preventDefault();
    }
  });

  function showError(input, message) {
    const error = document.createElement("small");
    error.textContent = message;
    error.style.color = "red";
    error.className = "error-message";
    input.parentElement.appendChild(error);
  }

  function clearErrors() {
    const errors = document.querySelectorAll(".error-message");
    errors.forEach((error) => error.remove());
  }

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const faqItems = document.querySelectorAll(".faq-question");

  faqItems.forEach((item) => {
    item.addEventListener("click", () => {
      const answer = item.nextElementSibling;
      answer.style.display =
        answer.style.display === "block" ? "none" : "block";
    });
  });
});
