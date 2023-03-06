document.addEventListener("DOMContentLoaded", () => {

  let projectsButton = document.getElementById("projectslink");

  projectsButton.addEventListener("click", () => {
    let projects = document.getElementById("projects");
    projects.scrollIntoView();
  });

});
