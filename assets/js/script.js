'use strict';

// 




/**
 * add Event on elements
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}


// 

const originalText = ["G", "R", "O", "W", "T", "H"];
const newText = ["B", "U", "S", "I", "N", "E", "S", "S"];

// Function to change text automatically
function autoChangeText() {
  const changeableSpans = document.querySelectorAll(".change");

  // Start by showing "Growth"
  let showingGrowth = true;
  
  setInterval(() => {
    if (showingGrowth) {
      // Change to "Business"
      for (let i = 0; i < changeableSpans.length; i++) {
        changeableSpans[i].textContent = newText[i];
      }
    } else {
      // Revert to "Growth"
      for (let i = 0; i < changeableSpans.length; i++) {
        changeableSpans[i].textContent = originalText[i];
      }
    }
    showingGrowth = !showingGrowth; // Toggle between Growth and Business
  }, 3000); // Change every 4 seconds (half the animation cycle)
}

// Run the function when the page loads
window.onload = autoChangeText;


/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
}

addEventOnElem(navTogglers, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNavbar);



/**
 * header & back top btn show when scroll down to 100px
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const headerActive = function () {
  if (window.scrollY > 80) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
}

addEventOnElem(window, "scroll", headerActive);