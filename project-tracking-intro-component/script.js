function menuClick() {
  var nav_bar = document.getElementById("mobile-nav-bar");
  var hamburger = document.getElementById("hamburger");
  var close = document.getElementById("close")
  if (nav_bar.style.display === "none") {
    nav_bar.style.display = "block";
    hamburger.style.display = "none";
    close.style.display =  "block";
  } else {
    nav_bar.style.display = "none";
    hamburger.style.display = "block";
    close.style.display = "none";

  }
}