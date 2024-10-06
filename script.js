// Wait for the document to load
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form");
  form.addEventListener("submit", changeSkills);
});

// Update the listed skills on submit
function changeSkills(e) {
  e.preventDefault();
  const skills = document.getElementsByClassName("skill");
  const inputs = document.getElementsByTagName("input");
  for (let key in skills) {
    skills[key].innerHTML = inputs[key].value;
  }
}
