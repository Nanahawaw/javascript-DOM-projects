let navToggle = document.querySelector(".nav-toggle");
let links = document.querySelector(".links");

function displayLinks() {
  if (links.classList.contains("show-links")) {
    links.classList.remove("show-links");
  } else {
    links.classList.add("show-links");
  }
}
navToggle.addEventListener("click", displayLinks);
//another method using toggle
//links.classList.toggle("show-links");
