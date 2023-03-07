document.addEventListener("DOMContentLoaded", () => {

  let projectsButton = document.getElementById("projectslink");
  let aboutButton = document.getElementById("aboutlink");

  projectsButton.addEventListener("click", () => {
    let projects = document.getElementById("projects");
    projects.scrollIntoView();
  });

  aboutButton.addEventListener("click", () => {
    let about = document.getElementById("computers");
    about.scrollIntoView();
  });

});
