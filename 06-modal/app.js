// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay
let modalButton = document.querySelector(".modal-btn");
let modalOverlay = document.querySelector(".modal-overlay");
let closeButton = document.querySelector(".close-btn");

function showModal() {
  modalOverlay.classList.add("open-modal");
}
function closeModal() {
  modalOverlay.classList.remove("open-modal");
}
modalButton.addEventListener("click", showModal);
closeButton.addEventListener("click", closeModal);
