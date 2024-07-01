const projects = {
  project1: {
    title: "Shoot Fast Cowboy",
    description:
      "Este juego fue un proyecto personal en el año 2023 donde decidi realizarlo para un evento llamado Demoday.",
    tools: ["Unity", "Blender", "Csharp", "Firebase"],
    image: "/assets/imagenes/Proyectos/proyect1.png",
    video: "https://www.youtube.com/embed/rck4Krg_cII",
  },
  project2: {
    title: "reWorld",
    description: "GameJam GamerCity con el tema de Ciudad Sustentable",
    tools: ["Unity", "Blender", "Csharp"],
    image: "assets/imagenes/Proyectos/proyect2.jpg",
    video: "https://www.youtube.com/embed/BgXaboXJYD8",
  },
  // Add other projects similarly
};

function showMainCard(projectId) {
  const mainCard = document.getElementById("mainCard");
  const mainCardContent = document.getElementById("mainCardContent");
  const selectedCard = document.querySelector(".selected");

  if (selectedCard) {
    selectedCard.classList.remove("selected");
  }

  const projectCard = document.getElementById(projectId);
  projectCard.classList.add("selected");

  const project = projects[projectId];

  const toolsHtml = project.tools
    .map(
      (tool, index) => `
  <div class="tool">
      <img src="/assets/imagenes/icons/${tool
        .toLowerCase()
        .replace(" ", "-")}.svg" alt="${tool}" />
      <div class="tooltip">${tool}</div>
  </div>
`
    )
    .join("");

  mainCardContent.innerHTML = `
        ${
          project.video
            ? `<iframe width="100%" height="150" src="${project.video}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
            : `<img src="${project.image}" alt="${project.title} height="100%" width="100%">`
        }
        <h2>${project.title}</h2>
        <p>${project.description}</p>
        <h4>Herramientas<h4>
        <div class="tools">
            ${toolsHtml}
        </div>
    `;

  mainCard.style.display = "block";
}

function closeMainCard() {
  const mainCard = document.getElementById("mainCard");
  mainCard.style.display = "none";

  const selectedCard = document.querySelector(".selected");
  if (selectedCard) {
    selectedCard.classList.remove("selected");
  }
}
document.addEventListener("DOMContentLoaded", () => {
  Object.keys(projects).forEach((projectId) => {
    const project = projects[projectId];
    const projectCard = document.getElementById(projectId);
    projectCard.style.backgroundImage = `url(${project.image})`;
  });
});
