const backToTopButton = document.querySelector("#back-to-top-btn");
window.addEventListener("scroll",scrollFunction);
function scrollFunction() {
  if(window.pageYOffset >100) {
    backToTopButton.style.display = "block";
  }
  else {
    backToTopButton.style.display ="none";
  }
}