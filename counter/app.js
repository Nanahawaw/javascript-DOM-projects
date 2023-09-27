let count = 0;

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
  } else if (count < 0) {
    value.style.color = "red";
  } else {
    value.style.color = "black";
  }
  value.textContent = count;
}
btns.forEach(function (btn) {
  btn.addEventListener("click", counter);
});
