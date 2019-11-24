console.log('hi there');

var mobile = function() {
  setPageWrapper("320px", 0);
};

var tablet = function() {
  setPageWrapper("768px", 0);
};

var desktop = function() {
  setPageWrapper("1200px", 0);
}

var setPageWrapper = function(width, margin){
  var pageWrapper = document.querySelector(".page-wrapper");
  pageWrapper.classList.add("page-wrapper--mobile");
}

window.onload = function(e){
  var mainNav = document.querySelector(".main-nav");
  var bntOpen = document.querySelector(".main-nav__menu-button");
  var bntClose = document.querySelector(".main-nav__cross-button");

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
