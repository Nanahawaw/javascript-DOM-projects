const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
let btn = document.getElementById("btn");
let color = document.querySelector(".color");

function changeColor() {
  let randomNumber = getRandomNumber();
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
}
btn.addEventListener("click", changeColor);

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
