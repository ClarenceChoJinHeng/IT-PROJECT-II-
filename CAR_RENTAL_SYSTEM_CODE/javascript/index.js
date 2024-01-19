// Connect and Import to the HTML class
const OPEN = document.querySelector(".nav__burger__div");
const CLOSE = document.querySelector(".nav__close__div");
const MENU = document.querySelector(".nav__menu");


// Adding Function to the HTML class

OPEN.addEventListener("click", show);
CLOSE.addEventListener("click", close);

// Executing the function

function show() {
  MENU.style.display = "flex";
  MENU.style.top = "0";
}

function close(){
    MENU.style.top = "-100%";
}
