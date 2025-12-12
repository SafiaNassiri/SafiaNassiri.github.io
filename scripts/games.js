const games = [
  {
    title: "Twilight of Eryndor",
    types: ["in-dev"],
    desc: "Twilight of Eryndor is a 2D roguelike dungeon crawler built in Lua using the Love2D framework. Battle through procedurally generated dungeons, face waves of enemies, collect powerful loot, and see how long you can survive!",
    link: "https://github.com/SafiaNassiri/TwilightOfEryndor",
    code: "https://github.com/SafiaNassiri/TwilightOfEryndor",
  },
  {
    title: "Cradle of Rust",
    types: ["prototype"],
    desc: "Cradle of Rust is a story-driven survival and choice-based game developed in the Godot Game Engine. Players are trapped inside a decaying facility and must explore, scavenge resources, and make morally and economically challenging decisions. Their choices affect the facility's AI, creating a branching narrative with multiple endings.",
    link: "https://github.com/SafiaNassiri/CradleOfRust_SeniorProject",
    code: "https://github.com/SafiaNassiri/CradleOfRust_SeniorProject",
  },
  {
    title: "Wolflight",
    types: ["released"],
    desc: "A 2D platformer, you uncover a ruined shrine and a statue of a woman frozen mid-sacrifice. Her soul has shattered into fourteen runes scattered across the world. Collect them to relive her final memories and piece together the truth of the Forgotten Keeper before she fades from existence.",
    link: "https://github.com/SafiaNassiri/Wolflight",
    code: "https://github.com/SafiaNassiri/Wolflight",
  },
  {
    title: "Shards of Aether",
    types: ["released"],
    desc: "Shards of Aether is a command-line adventure game written in Rust, where the player explores interconnected levels, battles enemies, collects relics, and uncovers the fate of a fractured world.",
    link: "https://github.com/SafiaNassiri/ShardsOfAether",
    code: "https://github.com/SafiaNassiri/ShardsOfAether",
  },
  {
    title: "The Last Light",
    types: ["released"],
    desc: "A 2D exploration and resource collection game built with Pygame. The world is shrouded in darkness, and all life is fading. You are the last survivor, tasked with restoring the Shrine of Light by gathering scattered orbs across a hostile land. As you bring back light, the world slowly heals, but shadow creatures and environmental dangers stand in your way",
    link: "https://github.com/SafiaNassiri/TheLastLight-PythonGame",
    code: "https://github.com/SafiaNassiri/TheLastLight-PythonGame",
  },
  {
    title: "Flesh of the Forgotten",
    types: ["game jam", "prototype"],
    desc: "Flesh of the Forgotten is a dark, narrative-driven fantasy game where your choices shape the destiny of Kael, a survivor entwined with ancient godly power. Traverse a corrupted world, interact with eerie creatures, and decide how far you'll go for power, survival, or compassion. This game was developed for the BatJam 2.0 game jam, which ran for two weeks. The game's narrative and core mechanics are a direct response to the jam's theme: Symbiotic Relationship.",
    link: "https://github.com/SafiaNassiri/Flesh-of-the-Forgotten",
    code: "https://github.com/SafiaNassiri/Flesh-of-the-Forgotten",
  },
  {
    title: "Echoes of the Grove",
    types: ["game jam", "released"],
    desc: "Out of Time: Echoes of the Grove is a compact Metroidvania about a satyr named Thistle, racing through a dying forest where time itself is collapsing. Explore the last living glade, uncover ancient relics, and reach the Hourseed Tree before the final second runs out. Every death reveals fragments of forgotten lore and each run brings you closer to the truth.",
    link: "https://github.com/SafiaNassiri/EchoesOfTheGrove",
    code: "https://github.com/SafiaNassiri/EchoesOfTheGrove",
  },
  {
    title: "What Remains in Sleep",
    types: ["game jam", "released"],
    desc: "What Remains in Sleep is a 2D narrative puzzle-horror game made in Godot. You wake up in a strange, looping place with no memory of how you got there. Something is wrong. Time is stuck. The walls remember things you do not. What Remains in Sleep was created for BatJam, a small game jam hosted by friends. The jam ran from June 11 to June 19, 2025.",
    link: "https://github.com/SafiaNassiri/What-Remains-in-Sleep",
    code: "https://github.com/SafiaNassiri/What-Remains-in-Sleep",
  },
];

function loadGames() {
  const container = document.getElementById("games-list");
  if (!container) return;

  container.innerHTML = "";

  games.forEach((game) => {
    const card = document.createElement("div");
    card.classList.add("project-card");

    card.setAttribute("data-types", game.types.join(","));

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

      ${game.types
        .map(
          (t) =>
            `<span class="skills-badge" style="font-size:0.75rem; background:#444; padding: 4px 10px; margin-right: 4px;">
              ${t.toUpperCase()}
            </span>`
        )
        .join("")}

      <br><br>
      ${codeLink}
    `;
    container.appendChild(card);
  });
}

function filterProjects(type) {
  const cards = document.querySelectorAll(".project-card");
  const buttons = document.querySelectorAll(".filter-btn");

  // Toggle button highlight
  buttons.forEach((btn) => btn.classList.remove("active"));
  const activeBtn = Array.from(buttons).find((b) =>
    b.getAttribute("onclick").includes(`'${type}'`)
  );
  if (activeBtn) activeBtn.classList.add("active");

  // Show/hide cards
  cards.forEach((card) => {
    const cardTypes = card.dataset.types.split(",");
    if (type === "all" || cardTypes.includes(type)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

document.addEventListener("DOMContentLoaded", loadGames);
