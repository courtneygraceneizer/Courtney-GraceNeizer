document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("darkModeToggle");
  const body = document.body;

  // Check if dark mode is saved in localStorage
  if (localStorage.getItem("theme") === "dark") {
    enableDarkMode();
  }

  toggleButton.addEventListener("click", function () {
    if (body.classList.contains("dark-mode")) {
      disableDarkMode();
    } else {
      enableDarkMode();
    }
  });

  function enableDarkMode() {
    body.classList.add("dark-mode");
    document.querySelector(".sidebar").classList.add("dark-mode");
    document.querySelector(".footer").classList.add("dark-mode");
    localStorage.setItem("theme", "dark");
  }

  function disableDarkMode() {
    body.classList.remove("dark-mode");
    document.querySelector(".sidebar").classList.remove("dark-mode");
    document.querySelector(".footer").classList.remove("dark-mode");
    localStorage.setItem("theme", "light");
  }
});
