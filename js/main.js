let menu_icon = document.getElementById("menu_icon");
let close_icon = document.getElementById("close_icon");

menu_icon.addEventListener("click", () => {
  let menu = document.getElementById("menu");
  menu.style.display = "flex";
});

close_icon.addEventListener("click", () => {
  let menu = document.getElementById("menu");
  menu.style.display = "none";
});

function closeMenu() {
  let menu = document.getElementById("menu");
  menu.style.display = "none";
}

window.onload = function () {
  document.getElementById("song").onplay();
};
