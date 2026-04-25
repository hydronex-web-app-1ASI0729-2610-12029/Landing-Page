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

// SCROLL SUAVE

// EFECTO NAVBAR AL HACER SCROLL

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
