// ===== NAVBAR SCROLL =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// ===== MOBILE MENU =====
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
navToggle.addEventListener('click', () => {
    const isOpen = navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
    navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    navToggle.setAttribute('aria-label', isOpen ? 'Menu sluiten' : 'Menu openen');
});
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.setAttribute('aria-label', 'Menu openen');
    });
});

// ===== SCROLL REVEAL =====
const revealElements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const delay = getComputedStyle(entry.target).getPropertyValue('--delay') || '0s';
            setTimeout(() => entry.target.classList.add('visible'), parseFloat(delay) * 1000);
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.15 });
revealElements.forEach(el => revealObserver.observe(el));

// ===== SPARKLE PARTICLES =====
const particlesContainer = document.getElementById('heroParticles');
function createParticle() {
    const particle = document.createElement('div');
    particle.style.cssText = `
        position: absolute; width: 4px; height: 4px; border-radius: 50%;
        background: rgba(242,208,207,${Math.random() * 0.5 + 0.2});
        left: ${Math.random() * 100}%; top: ${Math.random() * 100}%;
        animation: floatParticle ${Math.random() * 6 + 4}s ease-in-out infinite;
        animation-delay: ${Math.random() * 4}s;
    `;
    particlesContainer.appendChild(particle);
}
for (let i = 0; i < 30; i++) createParticle();

const style = document.createElement('style');
style.textContent = `@keyframes floatParticle {
    0%, 100% { transform: translate(0, 0) scale(1); opacity: 0; }
    25% { opacity: 1; }
    50% { transform: translate(${Math.random() > 0.5 ? '' : '-'}${Math.random() * 80}px, -${Math.random() * 120 + 40}px) scale(1.5); opacity: 0.8; }
    75% { opacity: 0.3; }
}`;
document.head.appendChild(style);

// ===== ACTIVE NAV HIGHLIGHT =====
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY + 100;
    sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');
        const link = document.querySelector(`.nav-link[href="#${id}"]`);
        if (link) {
            link.classList.toggle('active', scrollY >= top && scrollY < top + height);
        }
    });
});

// ===== FORM (Formspree) =====
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const btn = document.getElementById('submitBtn');
    const form = this;
    btn.innerHTML = '<span>Verzenden...</span>';
    btn.disabled = true;
    
    fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
    }).then(response => {
        if (response.ok) {
            document.getElementById('successModal').classList.add('active');
            form.reset();
        } else {
            alert('Er ging iets mis. Probeer het opnieuw of bel ons op +31 6 23 24 22 88.');
        }
    }).catch(() => {
        alert('Er ging iets mis. Probeer het opnieuw of bel ons op +31 6 23 24 22 88.');
    }).finally(() => {
        btn.innerHTML = '<span>Offerte Aanvragen</span><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>';
        btn.disabled = false;
    });
});

// ===== SMOOTH NAV LINK STYLE =====
document.head.insertAdjacentHTML('beforeend', `<style>.nav-link.active { color: var(--pink) !important; }</style>`);
