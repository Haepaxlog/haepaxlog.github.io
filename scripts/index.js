document.addEventListener("DOMContentLoaded", () => {

  let projectsButton = document.getElementById("projectslink");
  let monde = document.getElementById("monde");

  projectsButton.addEventListener("click", () => {
    let projects = document.getElementById("projects");
    projects.scrollIntoView();
  });

});
