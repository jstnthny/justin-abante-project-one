// Event listener for button

const hamburger = document.querySelector(".hamburger-menu");
const navBar = document.querySelector(".nav-bar ul");
console.log(navBar);

hamburger.addEventListener("click", () => {
  console.log("clicked");
  navBar.classList.toggle("show");
  console.log(navBar);
});
