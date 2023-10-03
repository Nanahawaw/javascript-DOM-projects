let btns = document.querySelectorAll(".question-btn");

function targetButton(event) {
  let question = e.currentTarget.parentElement.parentElement;
  question.classList.toggle("show-text");
}

btns.forEach(function (btn) {
  btn.addEventListener("click", targetButton);
});
