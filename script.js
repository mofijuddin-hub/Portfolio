// Dark Mode Toggle
const toggleBtn = document.getElementById("darkModeToggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  // Switch icon
  if (document.body.classList.contains("dark")) {
    toggleBtn.textContent = "☀️"; // Light Mode Icon
  } else {
    toggleBtn.textContent = "🌙"; // Dark Mode Icon
  }

  // Save preference
  localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
});

// Load saved theme
window.onload = () => {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    toggleBtn.textContent = "☀️";
  }
};


