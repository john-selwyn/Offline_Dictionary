// script.js
const dictionary = {
  algorithm:
    "A step-by-step procedure for solving a problem or performing a task.",
  binary:
    "A system of numbers or data represented using only two digits, 0 and 1.",
  compiler:
    "A program that translates source code written in one programming language into machine code.",
  debugging:
    "The process of finding and fixing errors or bugs in software code.",
  cloud:
    "A network of remote servers used to store, manage, and process data instead of local servers.",
  cookie:
    "A small piece of data sent from a website and stored on the user's device to remember user preferences.",
  database:
    "A structured collection of data that can be accessed, managed, and updated easily.",
  firewall:
    "A network security system that monitors and controls incoming and outgoing network traffic.",
  html: "Hypertext Markup Language, the standard language for creating web pages and web applications.",
  java: "A popular programming language used to build applications and websites.",
  login:
    "The process of gaining access to a computer system or network by providing a username and password.",
  network:
    "A group of interconnected computers and devices that can communicate and share data.",
};

// Theme toggle functionality
const themeToggle = document.getElementById("themeToggle");
const html = document.documentElement;
const themeIcon = themeToggle.querySelector("i");

themeToggle.addEventListener("click", () => {
  if (html.getAttribute("data-theme") === "light") {
    html.setAttribute("data-theme", "dark");
    themeIcon.className = "fas fa-sun";
  } else {
    html.setAttribute("data-theme", "light");
    themeIcon.className = "fas fa-moon";
  }
});

// Search functionality
document
  .getElementById("searchInput")
  .addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      searchWord();
    }
  });

function searchWord() {
  const searchInput = document
    .getElementById("searchInput")
    .value.toLowerCase()
    .trim();
  const resultDiv = document.getElementById("result");

  // Hide previous result with fade out
  resultDiv.style.opacity = "0";

  setTimeout(() => {
    // Display the result div
    resultDiv.style.display = "block";

    // Validate input
    if (searchInput === "") {
      resultDiv.innerHTML = `<i class="fas fa-info-circle"></i> Please enter a word to search.`;
    } else if (dictionary[searchInput]) {
      resultDiv.innerHTML = `
              <strong class="highlight">${capitalizeFirstLetter(
                searchInput
              )}</strong>: 
              ${dictionary[searchInput]}
          `;
    } else {
      resultDiv.innerHTML = `
              <i class="fas fa-exclamation-circle"></i> 
              Sorry, the word "${searchInput}" was not found in the dictionary.
          `;
    }

    // Fade in the new result
    setTimeout(() => {
      resultDiv.style.opacity = "1";
    }, 50);
  }, 300);
}

function quickSearch(term) {
  document.getElementById("searchInput").value = term;
  searchWord();
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
