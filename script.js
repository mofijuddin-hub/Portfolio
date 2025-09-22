class name {
    constructor(parameters) {
        
    }
}


    const toggle = document.getElementById("darkModeToggle");
    toggle.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
      toggle.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
      localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
    });
    window.onload = () => {
      if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
        toggle.textContent = "☀️";
      }
    };