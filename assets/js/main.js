document.addEventListener("DOMContentLoaded", () => {
  /* ---------- Mobile menu ---------- */
  const burger = document.querySelector(".hamburger");
  const menu = document.querySelector(".mobile-menu");
  if (burger && menu) {
    const setOpen = (open) => {
      menu.classList.toggle("open", open);
      burger.classList.toggle("open", open);
      burger.setAttribute("aria-expanded", String(open));
    };
    burger.addEventListener("click", () =>
      setOpen(!menu.classList.contains("open")),
    );
    menu.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => setOpen(false)),
    );
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") setOpen(false);
    });
    window.addEventListener("resize", () => {
      if (window.innerWidth > 768) setOpen(false);
    });
  }

  /* ---------- Scroll reveal ---------- */
  const revealEls = document.querySelectorAll(".reveal");
  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  if ("IntersectionObserver" in window && !reduceMotion) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" },
    );
    revealEls.forEach((el) => {
      const delay = el.dataset.delay;
      if (delay) el.style.transitionDelay = `${delay}ms`;
      el.classList.add("reveal-init");
      io.observe(el);
    });
  }
  // If IntersectionObserver is unavailable (or reduced motion), content
  // simply stays visible — nothing is ever hidden without JS support.

  /* ---------- Project / game filters ---------- */
  document.querySelectorAll(".filter-tabs").forEach((tabs) => {
    const scope = tabs.closest(".section-inner") || document;
    const cards = scope.querySelectorAll(".project-card");
    const buttons = tabs.querySelectorAll(".filter-tab");

    const tagsOf = (card) =>
      (card.dataset.category || card.dataset.type || "")
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean);

    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        buttons.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        const filter = btn.dataset.filter;
        cards.forEach((card) => {
          const show = filter === "all" || tagsOf(card).includes(filter);
          card.classList.toggle("hidden", !show);
        });
      });
    });
  });
});
