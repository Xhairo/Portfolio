const projects = {
  project3: {
    title: "Shoot Fast Cowboy",
    description:
      "Este juego fue un proyecto personal en el año 2023 donde decidi realizarlo para un evento llamado Demoday.",
    tools: ["Unity", "Blender", "Csharp", "Firebase"],
    image: "assets/imagenes/Proyectos/proyect1.png",
    video: "https://www.youtube.com/embed/rck4Krg_cII",
    repo: "https://github.com/Xhairo/ShootFastCowboy",
    ver: "https://xhairo.itch.io/shootfastcowboy",
  },
  project4: {
    title: "reWorld",
    description: "GameJam GamerCity 2023 con el tema de Ciudad Sustentable",
    tools: ["Unity", "Blender", "Csharp"],
    image: "assets/imagenes/Proyectos/proyect2.jpg",
    video: "https://www.youtube.com/embed/BgXaboXJYD8",
    repo: "",
    ver: "https://xhairo.itch.io/reworld",
  },
  project5: {
    title: "Master of Magic",
    description: `Mi Primer Videojuego realizado en 2014, fue mi inicio en el mundo de la programacion con bloques de logica. <br><br> <a class="clikeable" href="assets/imagenes/gdd.pdf">GDD</a>`,
    tools: ["Construct"],
    image: "assets/imagenes/Proyectos/masterofmagic.png",
    video: "",
    repo: "",
    ver: "https://xhairo.itch.io/master-of-magic",
  },
  project2: {
    title: "E-Commerce",
    description:
      "e-commerce, de videojuegos con un estilo visual de Cyberpunk 2077",
    tools: ["React", "Node", "Git", "JS"],
    image: "assets/imagenes/Proyectos/e-commerce.png",
    video: "",
    repo: "https://github.com/Xhairo/e-commerce",
    ver: "",
  },
  project1: {
    title: "BiciConectados",
    description:
      "Red Social que contiene un mapa Interactivo para realizar rutas que incentivar el el uso de la bicicleta como medio de transporte.",
    tools: ["React", "Node", "Spring", "Git", "GitHub", "java", "mysql"],
    image: "assets/imagenes/Proyectos/biciconectados.png",
    video: "https://www.youtube.com/embed/zQ3ThVIiI3Q",
    repo: "https://github.com/jupitaa/FrontBiciconectados",
    ver: "",
  },
  project6: {
    title: "Space Tournament",
    description:
      "Juego Gatcha de futbol americano estilo anime espacial, realizado el 2017 para mi titulacion",
    tools: ["Unity", "Csharp"],
    image: "assets/imagenes/Proyectos/spaceTournament.png",
    video: "",
    repo: "",
    ver: "https://xhairo.itch.io/space-tournament",
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
      <img src="assets/imagenes/icons/${tool
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
            : `<img src="${project.image}" alt="${project.title}" height="100%" width="100%">`
        }
        <h2>${project.title}</h2>
        <p>${project.description}</p>
        <h4>Herramientas</h4>
        <div class="tools">
            ${toolsHtml}
        </div>
        <div class="links">
          ${
            project.repo
              ? ` <a href="${project.repo}" target="_blank">
                GitHub
              </a>`
              : ""
          }
          ${
            project.ver
              ? ` <a href="${project.ver} " target="_blank">
                Jugar
              </a>`
              : ""
          }
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
