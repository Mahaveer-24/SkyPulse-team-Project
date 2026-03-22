

const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
menuBtn.addEventListener("click", function (event) {
  event.stopPropagation(); 
  mobileMenu.classList.toggle("hidden");
});
document.addEventListener("click", function () {
  if (!mobileMenu.classList.contains("hidden")) {
    mobileMenu.classList.add("hidden");
  }
});

mobileMenu.addEventListener("click", function (event) {
  event.stopPropagation();
});