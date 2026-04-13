// --------------------- ART CAROUSEL ---------------------
const images = [
  {
    src: "../assets/images/A2.png",
    title: "Project A2 Concept",
    description: "A sketched out surface level idea for a game.",
  },
  {
    src: "../assets/images/concept1.jpg",
    title: "Environment Concept 1",
    description: "Map concept for potential souls-like game.",
  },
  {
    src: "../assets/images/concept2.jpg",
    title: "Environment Concept 2",
    description: "Sketch of monster evolution in souls-like game.",
  },
  {
    src: "../assets/images/map.jpg",
    title: "World Map Region A",
    description: "Sketch of zoomed out map for a viking-y world.",
  },
  {
    src: "../assets/images/map2.png",
    title: "Dungeon Layout",
    description: "A more polished version of the viking-y world map.",
  },
  {
    src: "../assets/images/map3.png",
    title: "World Overview",
    description: "A sketched map for an Arabian styled world.",
  },
  {
    src: "../assets/images/OoA.jpg",
    title: "Key Art: OoA",
    description:
      "Notes and sketch of a concept of an order for the Arabian world.",
  },
];

const track = document.getElementById("carouselTrack");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDescription");
const closeBtn = document.querySelector(".close-btn");
let currentIndex = 1;

// Create slides including clones for infinite loop
function createCarouselSlides() {
  track.innerHTML = "";

  const addSlide = (imgData) => {
    const slide = document.createElement("div");
    slide.classList.add("carousel-slide");
    const img = document.createElement("img");
    img.src = imgData.src;
    img.alt = imgData.title;
    slide.appendChild(img);
    track.appendChild(slide);
  };

  addSlide(images[images.length - 1]); // last clone
  images.forEach(addSlide);
  addSlide(images[0]); // first clone

  updateCarousel(false);
}

// Move carousel
function updateCarousel(animate = true) {
  const slides = Array.from(track.children);
  if (!slides.length) return;
  const slideWidth = slides[0].getBoundingClientRect().width;
  track.style.transition = animate ? "transform 0.5s ease-in-out" : "none";
  track.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
}

nextBtn.addEventListener("click", () => {
  currentIndex++;
  updateCarousel(true);
});
prevBtn.addEventListener("click", () => {
  currentIndex--;
  updateCarousel(true);
});

track.addEventListener("transitionend", () => {
  const slides = Array.from(track.children);
  if (currentIndex === slides.length - 1) currentIndex = 1;
  if (currentIndex === 0) currentIndex = slides.length - 2;
  updateCarousel(false);
});

// Modal display
track.addEventListener("click", (e) => {
  const slide = e.target.closest(".carousel-slide");
  if (!slide) return;
  const slides = Array.from(track.children);
  let index = slides.indexOf(slide) - 1;
  if (index < 0) index = images.length - 1;
  const imgData = images[index];
  modalImg.src = imgData.src;
  modalImg.alt = imgData.title;
  modalTitle.textContent = imgData.title;
  modalDesc.textContent = imgData.description;
  modal.style.display = "flex";
  document.body.style.overflow = "hidden";
});

const closeModal = () => {
  modal.style.display = "none";
  document.body.style.overflow = "auto";
};
closeBtn.addEventListener("click", closeModal);
window.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});
window.addEventListener("resize", () => updateCarousel(false));

createCarouselSlides();

// --------------------- STORY FILTER ---------------------
const stories = [
  {
    title: "Assassins of Ariya",
    excerpt:
      "In The Raven’s Descent, Layal must prove his innocence while navigating betrayal, magic, and ancient mysteries. Alongside rivals, allies, and a mysterious woman cloaked in black, he confronts forces that could shape his fate and the destiny of Ariya.",
    tags: ["fantasy", "adventure", "Assassins"],
    series: "Ruhvana Duology",
    universe: "The Raven's Descent",
  },
  {
    title: "Saga of a Bastard Prince",
    excerpt:
      "Rieka seeks revenge for his loved ones in a land torn by war and intrigue. Facing cunning enemies, loyal allies, and dark secrets, he must navigate Uhtricforp’s dangerous politics—and survive the king’s wrath.",
    tags: ["fantasy", "adventure"],
    series: "Nordavalea Duology",
    universe: "The Raven's Descent",
  },
  {
    title: "Crown of a Bastard Prince",
    excerpt:
      "The saga continues as Rieka confronts court intrigue, rising threats, and the burden of leadership. Will vengeance and power lead him to triumph—or destruction?",
    tags: ["fantasy", "adventure"],
    series: "Nordavalea Duology",
    universe: "The Raven's Descent",
  },
  {
    title: "Shadows of Ritavāda",
    excerpt:
      "Secrets unravel and new dangers emerge as the Ruhvana Duology continues. Layal must navigate shadows of betrayal, magic, and destiny to protect Ariya.",
    tags: ["fantasy", "adventure", "magic"],
    series: "Ruhvana Duology",
    universe: "The Raven's Descent",
  },
  {
    title: "The Shadows We Walk",
    excerpt:
      "The first book of The Great Passage Duology explores intrigue, power struggles, and dark secrets in a richly imagined world where every choice has consequences.",
    tags: ["fantasy", "adventure"],
    series: "Great Passage Duology",
    universe: "The Raven's Descent",
  },
  {
    title: "Legions of Blood",
    excerpt:
      "War, betrayal, and destiny collide in the second part of The Great Passage Duology. The fate of kingdoms hangs in the balance.",
    tags: ["fantasy", "adventure", "war"],
    series: "Great Passage Duology",
    universe: "The Raven's Descent",
  },
  {
    title: "Tales of Ariya",
    excerpt:
      "A collection of short stories from Ariya, uncovering forgotten heroes, villains, and legends that shaped the world before the main saga.",
    tags: ["fantasy", "short stories"],
    series: "Ariya Tales Collection",
    universe: "The Raven's Descent",
  },
  {
    title: "Out of the North",
    excerpt:
      "Legends from the harsh northern lands, where magic, survival, and ancient cultures collide in tales of courage and mystery.",
    tags: ["fantasy", "short stories", "north"],
    series: "Ariya Tales Collection",
    universe: "The Raven's Descent",
  },
  {
    title: "Veilborn",
    excerpt:
      "After the Veil Cataclysm, survival and memory clash in a corrupted world. Veilborn explores the consequences of loss, power, and hidden truths.",
    tags: ["fantasy", "dark", "Veil Cataclysm"],
    series: "Veilborn Series",
    universe: "Fractured Lands",
  },
  {
    title: "SYNTHESIS://STRDT",
    excerpt:
      "In a fractured post-cataclysm world, life has retreated underground and the sky bleeds memory. The protagonist must uncover their past while navigating danger and uncovering a larger purpose.",
    tags: ["sci-fi", "post-apocalyptic", "Veil Cataclysm"],
    series: "SYNTHESIS Series",
    universe: "Fractured Lands",
  },
];

const storyContainer = document.getElementById("story-cards-list");
const mainFiltersContainer = document.querySelector(".main-filters");
const subFiltersContainer = document.querySelector(".sub-filters");

const universes = [...new Set(stories.map((s) => s.universe))];
const seriesByUniverse = {};
stories.forEach((s) => {
  if (!seriesByUniverse[s.universe]) seriesByUniverse[s.universe] = new Set();
  seriesByUniverse[s.universe].add(s.series);
});

// ---------- Render Filter Buttons ----------
function createMainFilters() {
  mainFiltersContainer.innerHTML = ["All", ...universes]
    .map((u, i) => {
      const safeUniverse = u.replace(/'/g, "\\'");
      return `<button class="main-filter-btn ${
        i === 0 ? "active" : ""
      }" onclick="filterByUniverse('${safeUniverse}')">${u}</button>`;
    })
    .join("");
}

function renderSubFilters(universe = "All") {
  const seriesList =
    universe === "All"
      ? [...new Set(stories.map((s) => s.series))].sort()
      : Array.from(seriesByUniverse[universe]).sort();

  subFiltersContainer.innerHTML = ["All", ...seriesList]
    .map((s, i) => {
      const safeSeries = s.replace(/'/g, "\\'");
      return `<button class="sub-filter-btn ${
        i === 0 ? "active" : ""
      }" onclick="filterBySeries('${safeSeries}')">${s}</button>`;
    })
    .join("");
}

// ---------- Render Story Cards ----------
function createStoryCards() {
  storyContainer.innerHTML = "";
  stories.forEach((story) => {
    const card = document.createElement("div");
    card.className = "project-card";
    card.dataset.universe = story.universe;
    card.dataset.series = story.series;
    card.innerHTML = `
      <h3>${story.title}</h3>
      <p>${story.excerpt}</p>
      <div class="project-tags">
        ${story.tags
          .map((t) => `<span class="project-tag">${t}</span>`)
          .join("")}
        <span class="project-tag series-tag">${story.series}</span>
        <span class="project-tag universe-tag">${story.universe}</span>
      </div>
    `;
    storyContainer.appendChild(card);
  });
}

// ---------- Filtering Logic ----------
let activeUniverse = "All";
let activeSeries = "All";

function setActiveButton(buttonClass, value) {
  document
    .querySelectorAll(`.${buttonClass}`)
    .forEach((btn) => btn.classList.remove("active"));
  document.querySelectorAll(`.${buttonClass}`).forEach((btn) => {
    if (btn.textContent === value) btn.classList.add("active");
  });
}

function filterByUniverse(universe) {
  activeUniverse = universe;
  activeSeries = "All";
  setActiveButton("main-filter-btn", universe);
  renderSubFilters(universe);
  filterCards();
}

function filterBySeries(series) {
  activeSeries = series;
  setActiveButton("sub-filter-btn", series);
  filterCards();
}

function filterCards() {
  document.querySelectorAll(".project-card").forEach((card) => {
    const show =
      (activeUniverse === "All" || card.dataset.universe === activeUniverse) &&
      (activeSeries === "All" || card.dataset.series === activeSeries);
    card.style.display = show ? "block" : "none";
  });
}

// ---------- Initialize ----------
createStoryCards();
createMainFilters();
renderSubFilters();
filterCards();
