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
