// CURSOR
const cursor = document.querySelector('.cursor');
const ring   = document.querySelector('.cursor-ring');
if (cursor && ring && window.matchMedia('(pointer: fine)').matches) {
  let mx=0,my=0,rx=0,ry=0,started=false;
  document.addEventListener('mousemove', e => {
    mx=e.clientX; my=e.clientY;
    if (!started) {
      started = true;
      cursor.style.opacity = '1';
      ring.style.opacity   = '1';
    }
  });
  const tick = () => {
    cursor.style.left=mx+'px'; cursor.style.top=my+'px';
    rx+=(mx-rx)*0.12; ry+=(my-ry)*0.12;
    ring.style.left=rx+'px'; ring.style.top=ry+'px';
    requestAnimationFrame(tick);
  };
  tick();
  document.querySelectorAll('a,button,.project-card,.filter-tab,.book-card,.art-card').forEach(el => {
    el.addEventListener('mouseenter', () => { ring.style.width='44px'; ring.style.height='44px'; });
    el.addEventListener('mouseleave', () => { ring.style.width='28px'; ring.style.height='28px'; });
  });
}

// SCROLL REVEAL
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), +(e.target.dataset.delay||0));
      obs.unobserve(e.target);
    }
  });
}, { threshold: 0.08 });
document.querySelectorAll('.reveal').forEach((el,i) => {
  if (!el.dataset.delay) el.dataset.delay = (i % 5) * 70;
  obs.observe(el);
});

// NAV ACTIVE
const page = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(a => {
  if (a.getAttribute('href').split('/').pop() === page) a.classList.add('active');
});

// MOBILE MENU
const ham  = document.querySelector('.hamburger');
const menu = document.querySelector('.mobile-menu');
if (ham && menu) {
  ham.addEventListener('click', () => {
    const open = menu.style.display === 'flex';
    menu.style.display = open ? 'none' : 'flex';
    const spans = ham.querySelectorAll('span');
    spans[0].style.transform = open ? '' : 'rotate(45deg) translate(4px,4px)';
    spans[1].style.opacity   = open ? '' : '0';
    spans[2].style.transform = open ? '' : 'rotate(-45deg) translate(4px,-4px)';
  });
}

// FILTER TABS
document.querySelectorAll('.filter-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    tab.closest('.filter-tabs').querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    const filter = tab.dataset.filter;
    document.querySelectorAll('.project-card[data-type]').forEach(card => {
      const types = card.dataset.type.split(',');
      card.style.display = (filter==='all' || types.includes(filter)) ? '' : 'none';
    });
  });
});
