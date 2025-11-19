const games = [
  {
    title: "Twilight of Eryndor",
    type: "in-dev",
    desc: "Action RPG currently in development.",
    link: "https://github.com/SafiaNassiri/TwilightOfEryndor",
    code: "https://github.com/SafiaNassiri/TwilightOfEryndor",
  },
  {
    title: "Cradle of Rust",
    type: "in-dev",
    desc: "Senior project currently in development.",
    link: "https://github.com/SafiaNassiri/CradleOfRust_SeniorProject",
    code: "https://github.com/SafiaNassiri/CradleOfRust_SeniorProject",
  },
  {
    title: "Wolflight",
    type: "in-dev",
    desc: "2D platformer mechanics test.",
    link: "https://github.com/SafiaNassiri/Wolflight",
    code: "https://github.com/SafiaNassiri/Wolflight",
  },
  {
    title: "Shards of Aether",
    type: "prototype",
    desc: "A Rust-based game prototype.",
    link: "https://github.com/SafiaNassiri/ShardsOfAether",
    code: "https://github.com/SafiaNassiri/ShardsOfAether",
  },
  {
    title: "The Last Light",
    type: "prototype",
    desc: "Python-based survival game prototype.",
    link: "https://github.com/SafiaNassiri/TheLastLight-PythonGame",
    code: "https://github.com/SafiaNassiri/TheLastLight-PythonGame",
  },
  {
    title: "Flesh of the Forgotten",
    type: "prototype",
    desc: "Prototype created during a game jam.",
    link: "https://github.com/SafiaNassiri/Flesh-of-the-Forgotten",
    code: "https://github.com/SafiaNassiri/Flesh-of-the-Forgotten",
  },
  {
    title: "Echoes of the Grove",
    type: "jam",
    desc: "Game Jam entry developed in 48 hours.",
    link: "https://github.com/SafiaNassiri/EchoesOfTheGrove",
    code: "https://github.com/SafiaNassiri/EchoesOfTheGrove",
  },
  {
    title: "What Remains in Sleep",
    type: "jam",
    desc: "Atmospheric horror game jam entry.",
    link: "https://github.com/SafiaNassiri/What-Remains-in-Sleep",
    code: "https://github.com/SafiaNassiri/What-Remains-in-Sleep",
  },
  {
    title: "SYNTHESIS://STRDT",
    type: "concept",
    desc: "2D Action-Roguelite concept.",
    link: "#",
    code: "#",
  },
  {
    title: "The Rogue Protocol",
    type: "concept",
    desc: "Tactical stealth concept.",
    link: "#",
    code: "#",
  },
  {
    title: "Veilborn",
    type: "concept",
    desc: "High-fantasy world building concept.",
    link: "#",
    code: "#",
  },
];

function loadGames() {
  const container = document.getElementById("games-list");
  if (!container) return;

  container.innerHTML = "";

  games.forEach((game) => {
    const card = document.createElement("div");
    card.classList.add("project-card");
    card.setAttribute("data-type", game.type);

    const codeLink =
      game.code !== "#"
        ? `<a href="${game.code}" target="_blank">View Code</a>`
        : `<span style="color:#777; font-size:0.9rem;">Code Private / Concept</span>`;

    card.innerHTML = `
      <h3>
        ${
          game.link !== "#"
            ? `<a href="${game.link}" target="_blank">${game.title}</a>`
            : game.title
        }
      </h3>
      <p>${game.desc}</p>
      <span class="skills-badge" style="font-size:0.75rem; background:#444; padding: 4px 10px;">${game.type.toUpperCase()}</span>
      <br><br>
      ${codeLink}
    `;
    container.appendChild(card);
  });
}

function filterProjects(type) {
  const cards = document.querySelectorAll(".project-card");
  const buttons = document.querySelectorAll(".filter-btn");

  buttons.forEach((btn) => btn.classList.remove("active"));

  const clickedBtn = Array.from(buttons).find((b) =>
    b.getAttribute("onclick").includes(`'${type}'`)
  );
  if (clickedBtn) clickedBtn.classList.add("active");

  cards.forEach((card) => {
    if (type === "all" || card.dataset.type === type) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

// Run on load
document.addEventListener("DOMContentLoaded", loadGames);
