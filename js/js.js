const toggleButton = document.querySelector('#toggle-button')
  
toggleButton.addEventListener('click', (e) => {
  darkMode = localStorage.getItem('theme');
  if (darkMode === 'dark') {
    disableDarkMode();
  } else {
    enableDarkMode();
  }
});

function enableDarkMode() {
  document.body.classList.add("dark-mode")
  bform.classList.add("dark-mode")
  bookingform.classList.add("dark-mode")
  pform.classList.add("dark-mode")
  uform.classList.add("dark-mode")
  localStorage.setItem('theme', 'dark');
}

function disableDarkMode() {
  document.body.classList.remove("dark-mode")
  bform.classList.remove("dark-mode")
  bookingform.classList.remove("dark-mode")
  pform.classList.remove("dark-mode")
  uform.classList.remove("dark-mode")
  localStorage.setItem('theme', 'light');
}

let darkMode = localStorage.getItem("theme")

if (darkMode === "dark") enableDarkMode()