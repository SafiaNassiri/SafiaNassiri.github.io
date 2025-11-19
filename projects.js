const softwareProjects = [
  {
    title: "ARC (Archive. Record. Connect.)",
    type: "in-dev",
    desc: "Full-stack MERN application for event management.",
    link: "https://github.com/SafiaNassiri/ARC-WebProgramming",
    code: "https://github.com/SafiaNassiri/ARC-WebProgramming",
  },
  {
    title: "With Special Guests",
    type: "released",
    desc: "Official band website with responsive design.",
    link: "https://github.com/SafiaNassiri/BandWebsite",
    code: "https://github.com/SafiaNassiri/BandWebsite",
  },
  {
    title: "SWE Experiential Learning Subsite",
    type: "released",
    desc: "Internal tool for Rowan University (Private Repo).",
    link: "https://trello.com/b/eQFvYJ94/swe-experiential-learning-subsite",
    code: "#",
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
