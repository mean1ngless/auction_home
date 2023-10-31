function toggleMobileMenu() {
  var menu = document.querySelector(".nav-bar-list-main-c");
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}
document.addEventListener("click", function (event) {
  var menu = document.querySelector(".nav-bar-list-main-c");
  var burger = document.querySelector(".burger-menu");
  if (event.target !== menu && event.target !== burger) {
    menu.style.display = "none";
  }
});
