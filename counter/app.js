let count = 0;
let bodyy = document.getElementById("main");
let container = document.querySelector(".container");
let value = document.querySelector("#value");
let btns = document.querySelectorAll(".btn");

function counter(event) {
  let styles = event.currentTarget.classList;
  if (styles.contains("decrease")) {
    count--;
  } else if (styles.contains("reset")) {
    count = 0;
  } else {
    count++;
  }
  if (count > 0) {
    value.style.color = "blueviolet";
    container.style.background = "brown";
    bodyy.style.background = "yellow";
  } else if (count < 0) {
    value.style.color = "red";
    container.style.background = "blue";
    bodyy.style.background = "grey";
  } else {
    value.style.color = "black";
    container.style.background = "green";
    bodyy.style.background = "pink";
  }
  value.textContent = count;
}
btns.forEach(function (btn) {
  btn.addEventListener("click", counter);
});
