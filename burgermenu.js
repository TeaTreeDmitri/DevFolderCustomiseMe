//// Burger menu
let navBtn = document.querySelector(".burgerMenu");
let navLinks = document.querySelector(".burgerMenuItems");
let overlay = document.querySelector(".overlay");

navBtn.addEventListener("click", burgerDrop);

function burgerDrop() {
  console.log("burgerDrop");
  navLinks.classList.toggle("hidden");
  overlay.classList.toggle("hidden");
}
if (navBtn.style.display === "block") {
  navLinks.style.display = "block";
  navBtn.style.display = "none";
  console.log("optionA");
} else if (navBtn.style.display === "none") {
  navLinks.style.display = "none";
  navBtn.style.display = "block";
  console.log("optionB");
}
console.log("burgerClick");
