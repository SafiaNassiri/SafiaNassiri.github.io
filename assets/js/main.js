// ─── CUSTOM CURSOR ───
const cursor = document.querySelector('.cursor');
const ring   = document.querySelector('.cursor-ring');
if (cursor && ring && window.matchMedia('(pointer: fine)').matches) {
  let mx = 0, my = 0, rx = 0, ry = 0;
  document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
  const animCursor = () => {
    cursor.style.left = mx + 'px'; cursor.style.top = my + 'px';
    rx += (mx - rx) * 0.12; ry += (my - ry) * 0.12;
    ring.style.left = rx + 'px'; ring.style.top = ry + 'px';
    requestAnimationFrame(animCursor);
  };
  animCursor();
  document.querySelectorAll('a, button, .project-card, .filter-tab, .nav-resume').forEach(el => {
    el.addEventListener('mouseenter', () => { ring.style.width = '48px'; ring.style.height = '48px'; });
    el.addEventListener('mouseleave', () => { ring.style.width = '28px'; ring.style.height = '28px'; });
  });
}

// ─── SCROLL REVEAL ───
const observer = new IntersectionObserver(entries => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      const delay = e.target.dataset.delay || 0;
      setTimeout(() => e.target.classList.add('visible'), +delay);
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach((el, i) => {
  el.dataset.delay = el.dataset.delay || (i % 4) * 80;
  observer.observe(el);
});

// ─── NAV SCROLL STYLE ───
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
  if (nav) nav.style.borderBottomColor = window.scrollY > 20 ? 'rgba(200,185,155,0.18)' : 'rgba(200,185,155,0.12)';
});

// ─── ACTIVE NAV LINK ───
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(a => {
  const href = a.getAttribute('href').split('/').pop();
  if (href === currentPage || (currentPage === '' && href === 'index.html')) {
    a.classList.add('active');
  }
});

// ─── MOBILE MENU ───
const hamburger   = document.querySelector('.hamburger');
const mobileMenu  = document.querySelector('.mobile-menu');
if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    const open = mobileMenu.style.display === 'flex';
    mobileMenu.style.display = open ? 'none' : 'flex';
    hamburger.querySelectorAll('span')[0].style.transform = open ? '' : 'rotate(45deg) translate(4px, 4px)';
    hamburger.querySelectorAll('span')[1].style.opacity  = open ? '' : '0';
    hamburger.querySelectorAll('span')[2].style.transform = open ? '' : 'rotate(-45deg) translate(4px, -4px)';
  });
}

// ─── PROJECT FILTER ───
const filterTabs  = document.querySelectorAll('.filter-tab');
const projectCards = document.querySelectorAll('.project-card');
if (filterTabs.length && projectCards.length) {
  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      filterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const filter = tab.dataset.filter;
      projectCards.forEach(card => {
        const show = filter === 'all' || card.dataset.type === filter;
        card.style.display = show ? '' : 'none';
      });
    });
  });
}
