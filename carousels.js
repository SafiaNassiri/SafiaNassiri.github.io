// --------------------- ART CAROUSEL ---------------------
const images = [
  {
    src: "/assets/images/A2.png",
    title: "Project A2 Concept",
    description: "A sketched out surface level idea for a game.",
  },
  {
    src: "/assets/images/concept1.jpg",
    title: "Environment Concept 1",
    description: "Map concept for potential souls-like game.",
  },
  {
    src: "/assets/images/concept2.jpg",
    title: "Environment Concept 2",
    description: "Sketch of monster evolution in souls-like game.",
  },
  {
    src: "/assets/images/map.jpg",
    title: "World Map Region A",
    description: "Sketch of zoomed out map for a viking-y world.",
  },
  {
    src: "/assets/images/map2.png",
    title: "Dungeon Layout",
    description: "A more polished version of the viking-y world map.",
  },
  {
    src: "/assets/images/map3.png",
    title: "World Overview",
    description: "A sketched map for an Arabian styled world.",
  },
  {
    src: "/assets/images/OoA.jpg",
    title: "Key Art: OoA",
    description:
      "Notes and sketch of a concept of an order for the Arabian world.",
  },
];

const track = document.getElementById("carouselTrack");
const nextButton = document.getElementById("nextBtn");
const prevButton = document.getElementById("prevBtn");
const imageModal = document.getElementById("imageModal");
const closeModalBtn = document.querySelector(".close-btn");
const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");

let currentIndex = 1;

function createCarouselSlides() {
  track.innerHTML = "";

  // Clone last image first
  const lastClone = document.createElement("div");
  lastClone.classList.add("carousel-slide");
  const lastImg = document.createElement("img");
  lastImg.src = images[images.length - 1].src;
  lastImg.alt = images[images.length - 1].title;
  lastClone.appendChild(lastImg);
  track.appendChild(lastClone);

  images.forEach((imgData) => {
    const slide = document.createElement("div");
    slide.classList.add("carousel-slide");
    const img = document.createElement("img");
    img.src = imgData.src;
    img.alt = imgData.title;
    slide.appendChild(img);
    track.appendChild(slide);
  });

  // Clone first image last
  const firstClone = document.createElement("div");
  firstClone.classList.add("carousel-slide");
  const firstImg = document.createElement("img");
  firstImg.src = images[0].src;
  firstImg.alt = images[0].title;
  firstClone.appendChild(firstImg);
  track.appendChild(firstClone);

  updateCarousel(false);
}

function updateCarousel(animate = true) {
  const slides = Array.from(track.children);
  if (!slides.length) return;
  const slideWidth = slides[0].getBoundingClientRect().width;
  track.style.transition = animate ? "transform 0.5s ease-in-out" : "none";
  track.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
}

nextButton.addEventListener("click", () => {
  currentIndex++;
  updateCarousel(true);
});
prevButton.addEventListener("click", () => {
  currentIndex--;
  updateCarousel(true);
});

track.addEventListener("transitionend", () => {
  const slides = Array.from(track.children);
  if (currentIndex === slides.length - 1) currentIndex = 1;
  if (currentIndex === 0) currentIndex = slides.length - 2;
  updateCarousel(false);
});

track.addEventListener("click", (e) => {
  const slide = e.target.closest(".carousel-slide");
  if (!slide) return;
  const slides = Array.from(track.children);
  let index = slides.indexOf(slide) - 1;
  if (index < 0) index = images.length - 1;
  const imgData = images[index];
  modalImage.src = imgData.src;
  modalImage.alt = imgData.title;
  modalTitle.textContent = imgData.title;
  modalDescription.textContent = imgData.description;
  imageModal.style.display = "flex";
  document.body.style.overflow = "hidden";
});

closeModalBtn.addEventListener("click", () => {
  imageModal.style.display = "none";
  document.body.style.overflow = "auto";
});

window.addEventListener("click", (event) => {
  if (event.target === imageModal) closeModalBtn.click();
});
window.addEventListener("resize", () => updateCarousel(false));

createCarouselSlides();

// --------------------- STORY CAROUSEL ---------------------
const stories = [
  {
    title: "Moonlight Journey",
    excerpt:
      "A fantasy short story about a child discovering a magical world under a hidden moon.",
    link: "stories/moonlight_journey.pdf",
    tags: ["fantasy", "short story"],
    series: "Lunar Tales",
    world: "Moonlight Universe",
  },
  {
    title: "Desert of Echoes",
    excerpt:
      "A tale of ancient secrets buried in the sands of an Arabian-inspired world.",
    link: "stories/desert_of_echoes.pdf",
    tags: ["adventure", "desert", "myth"],
    series: "Sands of Time",
    world: "Desert Realms",
  },
  {
    title: "Forgotten Realms",
    excerpt:
      "An epic adventure exploring lost civilizations and mystical lands.",
    link: "stories/forgotten_realms.pdf",
    tags: ["epic", "fantasy", "civilizations"],
    series: "Forgotten Realms",
    world: "Forgotten Worlds",
  },
];

const storyTrack = document.getElementById("storyCarouselTrack");
const storyPrev = document.getElementById("storyPrevBtn");
const storyNext = document.getElementById("storyNextBtn");
let storyIndex = 0;
let activeFilter = "All";

// Create filter bar
const storyContainer = document.getElementById("storyCarouselContainer");
const filterBar = document.createElement("div");
filterBar.className = "story-filters";
storyContainer.prepend(filterBar);

// Get unique filters
const allFilters = ["All"];
stories.forEach((s) => {
  s.tags.forEach((t) => {
    if (!allFilters.includes(t)) allFilters.push(t);
  });
  if (!allFilters.includes(s.series)) allFilters.push(s.series);
  if (!allFilters.includes(s.world)) allFilters.push(s.world);
});

// Render filter buttons
allFilters.forEach((f) => {
  const btn = document.createElement("button");
  btn.className = "filter-btn";
  btn.textContent = f;
  btn.addEventListener("click", (e) => applyFilter(f, e));
  filterBar.appendChild(btn);
});

// Apply filter
function applyFilter(filter, e) {
  activeFilter = filter;
  storyIndex = 0;
  document
    .querySelectorAll(".filter-btn")
    .forEach((b) => b.classList.remove("active"));
  e.target.classList.add("active");
  createStorySlides();
}

// Render story slides
function createStorySlides() {
  storyTrack.innerHTML = "";
  const filteredStories =
    activeFilter === "All"
      ? stories
      : stories.filter(
          (s) =>
            s.tags.includes(activeFilter) ||
            s.series === activeFilter ||
            s.world === activeFilter
        );

  filteredStories.forEach((story) => {
    const slide = document.createElement("div");
    slide.classList.add("story-slide");

    const title = document.createElement("h3");
    title.textContent = story.title;

    const excerpt = document.createElement("p");
    excerpt.textContent = story.excerpt;

    const link = document.createElement("a");
    link.href = story.link;
    link.textContent = "Read Excerpt";
    link.className = "project-btn";
    link.target = "_blank";

    const tagContainer = document.createElement("div");
    tagContainer.className = "story-tags";
    story.tags.forEach((tag) => {
      const span = document.createElement("span");
      span.className = "story-tag";
      span.textContent = tag;
      tagContainer.appendChild(span);
    });

    const seriesSpan = document.createElement("span");
    seriesSpan.className = "story-tag story-series";
    seriesSpan.textContent = story.series;

    const worldSpan = document.createElement("span");
    worldSpan.className = "story-tag story-world";
    worldSpan.textContent = story.world;

    slide.append(title, excerpt, link, tagContainer, seriesSpan, worldSpan);
    storyTrack.appendChild(slide);
  });

  updateStoryCarousel(false);
}

// Story carousel controls
function updateStoryCarousel(animate = true) {
  const slides = Array.from(storyTrack.children);
  if (!slides.length) return;
  const slideWidth = slides[0].getBoundingClientRect().width;
  storyTrack.style.transition = animate ? "transform 0.5s ease-in-out" : "none";
  storyTrack.style.transform = `translateX(-${slideWidth * storyIndex}px)`;
}

storyNext.addEventListener("click", () => {
  storyIndex = (storyIndex + 1) % storyTrack.children.length;
  updateStoryCarousel(true);
});
storyPrev.addEventListener("click", () => {
  storyIndex =
    (storyIndex - 1 + storyTrack.children.length) % storyTrack.children.length;
  updateStoryCarousel(true);
});
window.addEventListener("resize", () => updateStoryCarousel(false));

// Initial render
createStorySlides();
