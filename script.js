// Toggle the survey and info
// Toggle navigation links
const navbar = document.getElementById("navbar");
let surveySection = document.getElementById("brief-survey");
const submitBtn = document.getElementById("submit-btn");
let pageSections = document.getElementsByClassName("page-section");

submitBtn.addEventListener("click", () => {
  // surveySection.classList.toggle("is-hidden");
  surveySection.innerHTML = `<p id="thank-you-msg">Thanks for your feedback!</p>`;

  Array.from(pageSections).forEach((section) => {
    section.classList.toggle("is-visible");
  });
});
