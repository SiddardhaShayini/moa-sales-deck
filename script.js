/* ═══════════════════════════════════════════
   Mall of America — Interactive Sales Deck
   script.js
═══════════════════════════════════════════ */

// ── Scroll helper ──────────────────────────
function scrollTo(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const offset = 80; // nav height
  const top = el.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top, behavior: 'smooth' });
  // close mobile menu
  document.getElementById('mobileMenu')?.classList.remove('open');
}

// ── Mobile menu ────────────────────────────
function toggleMenu() {
  document.getElementById('mobileMenu')?.classList.toggle('open');
}

// ── Hero entrance animation ────────────────
(function heroEntrance() {
  const elements = document.querySelectorAll('[data-animate]');
  elements.forEach(el => {
    const delay = parseInt(el.dataset.delay || '0', 10);
    el.style.transition = `opacity 0.85s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.85s cubic-bezier(0.16,1,0.3,1) ${delay}ms`;
    el.style.transform = 'translateY(24px)';

    setTimeout(() => {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }, delay + 200); // 200ms initial wait
  });
})();

// ── Navbar scroll effect & active section ──
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link[data-section]');
const sectionIds = ['contact', 'leasing', 'events', 'entertainment', 'dining', 'luxury', 'retail', 'why', 'hero'];

let lastScrollY = 0;
let ticking = false;

function onScroll() {
  lastScrollY = window.scrollY;
  if (!ticking) {
    window.requestAnimationFrame(updateNav);
    ticking = true;
  }
}

function updateNav() {
  // Scrolled class
  navbar.classList.toggle('scrolled', lastScrollY > 60);

  // Active section highlight
  for (const id of sectionIds) {
    const el = document.getElementById(id);
    if (el && el.getBoundingClientRect().top <= 120) {
      navLinks.forEach(l => l.classList.toggle('active', l.dataset.section === id));
      break;
    }
  }
  ticking = false;
}

window.addEventListener('scroll', onScroll, { passive: true });

// ── Intersection Observer — scroll reveals ─
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      // Stagger siblings in the same parent
      const siblings = Array.from(entry.target.parentElement?.children || []);
      const index = siblings.indexOf(entry.target);
      const staggerDelay = index * 80;

      setTimeout(() => {
        entry.target.classList.add('visible');
      }, staggerDelay);

      revealObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.08,
  rootMargin: '-40px 0px'
});

document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => {
  revealObserver.observe(el);
});

// ── Leasing filter ─────────────────────────
const filterBtns = document.querySelectorAll('.lf-btn');
const leaseCards = document.querySelectorAll('.lease-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const filter = btn.dataset.filter;

    // Update active button
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    // Show/hide cards with animation
    leaseCards.forEach(card => {
      const cat = card.dataset.category;
      if (filter === 'all' || cat === filter) {
        card.classList.remove('hidden');
        card.style.animation = 'fadeInUp 0.4s cubic-bezier(0.16,1,0.3,1) both';
      } else {
        card.classList.add('hidden');
      }
    });
  });
});

// Inject keyframe for filter animation
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(16px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;
document.head.appendChild(style);

// ── Video fallback ─────────────────────────
// If video can't load (e.g. from Pexels direct), keep poster image gracefully
const heroVideo = document.getElementById('heroVideo');
if (heroVideo) {
  heroVideo.addEventListener('error', () => {
    heroVideo.style.display = 'none';
    heroVideo.parentElement.style.backgroundImage =
      "url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&q=80')";
    heroVideo.parentElement.style.backgroundSize = 'cover';
    heroVideo.parentElement.style.backgroundPosition = 'center';
  });

  // Also try to play (some browsers need a nudge)
  heroVideo.play().catch(() => {
    // Autoplay blocked — fallback to poster, which is already set
  });
}

// ── Parallax on hero bg (subtle) ──────────
function heroParallax() {
  if (window.innerWidth < 768) return;
  const scrolled = window.scrollY;
  if (heroVideo) {
    heroVideo.style.transform = `scale(1.08) translateY(${scrolled * 0.25}px)`;
  }
}
window.addEventListener('scroll', heroParallax, { passive: true });