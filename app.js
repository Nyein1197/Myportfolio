//GET HTML ELEMENTS FROM THE INDEX.HTML DOCUMENT
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

// SET THE STATE OF THE MENU
let showMenu = false;

hamburger.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    hamburger.classList.add("close");
    menu.classList.add("show");
    showMenu = true;
  } else {
    hamburger.classList.remove("close");
    menu.classList.remove("show");
    showMenu = false;
  }
}
