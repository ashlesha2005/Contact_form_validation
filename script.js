document.getElementById("contactForm").addEventListener("submit", function (event) {
  event.preventDefault();

  // Reset messages
  document.getElementById("nameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("messageError").textContent = "";
  document.getElementById("successMessage").textContent = "";

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  let isValid = true;

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (name === "") {
    document.getElementById("nameError").textContent = "Name is required.";
    isValid = false;
  }

  if (email === "") {
    document.getElementById("emailError").textContent = "Email is required.";
    isValid = false;
  } else if (!emailPattern.test(email)) {
    document.getElementById("emailError").textContent = "Enter a valid email.";
    isValid = false;
  }

  if (message === "") {
    document.getElementById("messageError").textContent = "Message is required.";
    isValid = false;
  }

  if (isValid) {
    document.getElementById("successMessage").textContent = "Form submitted successfully!";
    document.getElementById("contactForm").reset();

    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  }
});

// Toggle light/dark mode
const themeBtn = document.getElementById("themeBtn");
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  themeBtn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});
