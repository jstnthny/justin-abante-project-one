// Query Selector for hamburger button
const hamburger = document.querySelector(".hamburger-menu");
// Query Selector for nav list
const navBar = document.querySelector(".nav-bar ul");
console.log(navBar);

// Hamburger menu event listener
hamburger.addEventListener("click", () => {
  console.log("clicked");
  // Toggle that adds and removes .show class
  navBar.classList.toggle("show");
  console.log(navBar);
});
