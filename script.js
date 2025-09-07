// =========================
// Part 1: Light/Dark Mode
// =========================
const modeToggle = document.getElementById("modeToggle");
modeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// =========================
// Part 2: Counter Feature
// =========================
let count = 0;
const countValue = document.getElementById("countValue");
const incrementBtn = document.getElementById("incrementBtn");
const resetBtn = document.getElementById("resetBtn");

incrementBtn.addEventListener("click", () => {
  count++;
  countValue.textContent = count;
});

resetBtn.addEventListener("click", () => {
  count = 0;
  countValue.textContent = count;
});

// =========================
// Part 3: FAQ Toggle
// =========================
const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach((question) => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;
    answer.classList.toggle("hidden");
  });
});

// =========================
// Part 4: Form Validation
// =========================
const form = document.getElementById("signupForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const formSuccess = document.getElementById("formSuccess");

// Function to validate email with regex
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Function to validate password length
function isStrongPassword(password) {
  return password.length >= 6;
}

// Form submit event
form.addEventListener("submit", (e) => {
  e.preventDefault();

  let isValid = true;
  nameError.textContent = "";
  emailError.textContent = "";
  passwordError.textContent = "";
  formSuccess.textContent = "";

  // Name validation
  if (nameInput.value.trim() === "") {
    nameError.textContent = "Name is required";
    isValid = false;
  }

  // Email validation
  if (!isValidEmail(emailInput.value)) {
    emailError.textContent = "Enter a valid email";
    isValid = false;
  }

  // Password validation
  if (!isStrongPassword(passwordInput.value)) {
    passwordError.textContent = "Password must be at least 6 characters";
    isValid = false;
  }

  if (isValid) {
    formSuccess.textContent = "Form submitted successfully 🎉";
    form.reset();
  }
});
