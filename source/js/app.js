console.log('hi there');

const toggleMenu = function(e){
  const mainNav = document.querySelector(".main-nav");
  const bntOpen = document.querySelector(".main-nav__menu-button");
  const bntClose = document.querySelector(".main-nav__cross-button");

  mainNav.classList.remove("main-nav--opened");
  mainNav.classList.add("main-nav--closed");
  bntOpen.classList.remove("visually-hidden");

  bntOpen.addEventListener("click", function(){
    mainNav.classList.add("main-nav--opened");
    mainNav.classList.remove("main-nav--closed");
    bntOpen.classList.add("visually-hidden");
    bntClose.classList.remove("visually-hidden");
  });

  bntClose.addEventListener("click", function(){
    mainNav.classList.add("main-nav--closed");
    mainNav.classList.remove("main-nav--opened");
    bntOpen.classList.remove("visually-hidden");
    bntClose.classList.add("visually-hidden");
  });
}

//window.onload = toggleMenu;
