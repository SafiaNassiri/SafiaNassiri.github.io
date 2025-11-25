const softwareProjects = [
  {
    title: "ARC (Archive. Record. Connect.)",
    type: "in-dev",
    desc: "A web application built with the MERN stack designed for gamers to showcase their gaming identity, track favorite games, discover new titles, and connect with a community.",
    link: "https://github.com/SafiaNassiri/ARC-WebProgramming",
    code: "https://github.com/SafiaNassiri/ARC-WebProgramming",
  },
  {
    title: "With Special Guests",
    type: "released",
    desc: "A band website built to showcase With Special Guests' music, members, and demos. The project highlights the band’s identity, provides easy access to streaming and downloads, and serves as a central hub for updates, tracks, and future releases.",
    link: "https://github.com/SafiaNassiri/BandWebsite",
    code: "https://github.com/SafiaNassiri/BandWebsite",
  },
  {
    title: "SWE Experiential Learning Subsite",
    type: "released",
    desc: "This project involves a fullstack website that integrates with Google's API and interacts with a database. It currently has a few issues with error handling in some files, and certain features were planned but not fully implemented. Below is a guide to setting up the project, resolving known issues, and getting it running. (Private Repo).",
    link: "https://trello.com/b/eQFvYJ94/swe-experiential-learning-subsite",
    code: "#",
  },
  {
    title: "Basim Ibn Ishaq - The Binding of Isaac MOD",
    type: "in-dev",
    desc: "This mod introduces Basim Ibn Ishaq as a playable character in The Binding of Isaac. Agile and deadly, Basim comes equipped with piercing attacks and a special teleport ability inspired by his Assassin’s Creed skills.",
    link: "https://github.com/SafiaNassiri/BasimIbnIshaq-MOD",
    code: "https://github.com/SafiaNassiri/BasimIbnIshaq-MOD",
  },
];

function loadSoftware() {
  const container = document.getElementById("software-list");
  if (!container) return;

  container.innerHTML = "";

  softwareProjects.forEach((proj) => {
    const card = document.createElement("div");
    card.classList.add("project-card");

    const codeLink =
      proj.code !== "#"
        ? `<a href="${proj.code}" target="_blank">View Code</a>`
        : `<span style="color:#777; font-size:0.9rem;">Code Private</span>`;

    card.innerHTML = `
      <h3>
         <a href="${proj.link}" target="_blank">${proj.title}</a>
      </h3>
      <p>${proj.desc}</p>
      <span class="skills-badge" style="font-size:0.75rem; background:#444; padding: 4px 10px;">${proj.type.toUpperCase()}</span>
      <br><br>
      ${codeLink}
    `;
    container.appendChild(card);
  });
}

// Run on load
document.addEventListener("DOMContentLoaded", loadSoftware);
