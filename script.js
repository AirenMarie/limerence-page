// Toggle the survey and info
// Toggle navigation links
const navbar = document.getElementById("navbar");
let surveyPortions = document.getElementsByClassName("survey-portion");
const submitBtn = document.getElementById("submit-btn");
let pageSections = document.getElementsByClassName("page-section");
let thanksMsg = document.getElementById("thank-you-msg");

submitBtn.addEventListener("click", () => {
  Array.from(surveyPortions).forEach((portion) => {
    portion.classList.toggle("is-hidden");
  });

  Array.from(pageSections).forEach((section) => {
    section.classList.toggle("is-visible");
  });

  thanksMsg.classList.toggle("is-visible");
});
