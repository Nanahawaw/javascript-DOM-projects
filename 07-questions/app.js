let btns = document.querySelectorAll(".question-btn");
let questions = document.querySelectorAll(".question");

function targetButton(e) {
  let clickedQuestion = e.currentTarget.parentElement.parentElement;
  questions.forEach(function (question) {
    if (question !== clickedQuestion) {
      // Don't collapse the clicked question here
      question.classList.remove("show-text");
    }
  });

  // Toggle the clicked question
  clickedQuestion.classList.toggle("show-text");
}

btns.forEach(function (btn) {
  btn.addEventListener("click", targetButton);
});
