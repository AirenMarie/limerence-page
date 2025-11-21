// Toggle the survey and info
// Toggle navigation links
let survey = document.getElementById("brief-survey");
let infoSections = document.getElementById("info");
const submitBtn = document.getElementById("submit-btn");
let thanksMsg = document.getElementById("thank-you-msg");

submitBtn.addEventListener("click", (event) => {
  event.preventDefault();
  survey.classList.toggle("is-hidden");

  infoSections.classList.toggle("is-visible");

  thanksMsg.classList.toggle("is-visible");
  thanksMsg.textContent = "Thank you for sharing!";

  submitBtn.disabled = true;
});
