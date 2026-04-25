// TANKIQ — script.js

// SISTEMA DE IDIOMAS
let currentLanguage = 'en';

function applyLanguage(lang) {
    currentLanguage = lang;

    if (lang === 'es') {
        document.body.classList.add('lang-es');
    } else {
        document.body.classList.remove('lang-es');
    }

    document.querySelectorAll('[data-placeholder-es]').forEach(el => {
        if (lang === 'es') {
            el.placeholder = el.getAttribute('data-placeholder-es');
        } else {
            const type = el.type || '';
            const tag  = el.tagName.toLowerCase();
            if (type === 'text')         el.placeholder = 'Enter your full name';
            else if (type === 'email' && el.classList.contains('newsletter-input'))
                                         el.placeholder = 'your@email.com';
            else if (type === 'email')   el.placeholder = 'Enter your email';
            else if (type === 'tel')     el.placeholder = 'Phone number';
            else if (tag === 'textarea') el.placeholder = 'Tell us about your building...';
        }
    });

    localStorage.setItem('preferredLanguage', lang);
}

function switchLanguage() {
    applyLanguage(currentLanguage === 'en' ? 'es' : 'en');
}

function initLanguageSystem() {
    const saved = localStorage.getItem('preferredLanguage') || 'en';
    applyLanguage(saved);

    const btn = document.getElementById('languageBtn');
    if (btn) btn.addEventListener('click', switchLanguage);
}
// NAVBAR MÓVIL (HAMBURGUESA)
function initMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const navMenu   = document.getElementById('navMenu');
    if (!hamburger || !navMenu) return;

    hamburger.addEventListener('click', () => {
        const isOpen = navMenu.classList.toggle('open');
        hamburger.classList.toggle('active', isOpen);
    });

    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('open');
            hamburger.classList.remove('active');
        });
    });
}
// SCROLL SUAVE

function smoothScrollTo(selector) {
    const target = document.querySelector(selector);
    if (!target) return;
    window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' });
}

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', function (e) {
            e.preventDefault();
            smoothScrollTo(this.getAttribute('href'));
        });
    });
}

// EFECTO NAVBAR AL HACER SCROLL

function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;

    window.addEventListener('scroll', throttle(() => {
        navbar.classList.toggle('scrolled', window.pageYOffset > 80);
    }, 16));
}

// ANIMACIONES FADE-IN AL HACER SCROLL

// EFECTO 3D EN TARJETAS

// FORMULARIO DE CONTACTO

// NEWSLETTER

// BOTONES DE PLANES

// TOAST NOTIFICATIONS

function showToast(message, type = "info") {
  document.querySelector(".toast")?.remove();

  const icons = { success: "✓", error: "✕", info: "ℹ" };
  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.innerHTML = `<span>${icons[type] || icons.info}</span> ${message}`;
  document.body.appendChild(toast);

  requestAnimationFrame(() => toast.classList.add("show"));

  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 320);
  }, 4500);
}

// UTILIDADES

function validEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function throttle(fn, limit) {
  let inThrottle;
  return function (...args) {
    if (!inThrottle) {
      fn.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

// INICIALIZACIÓN

document.addEventListener('DOMContentLoaded', () => {
    initLanguageSystem();
    initMobileMenu();
    initSmoothScroll();
    initNavbarScroll();
    initScrollAnimations();
    init3DCards();
    initContactForm();
    initNewsletter();
    initPricingButtons();

    document.body.classList.add('app-loaded');

    console.log('%cTankIQ 🚰 — HydroTeam', 'color:#29ABE2; font-size:14px; font-weight:bold;');
});
