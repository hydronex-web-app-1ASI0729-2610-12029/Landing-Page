// TANKIQ — script.js

// SISTEMA DE IDIOMAS

// NAVBAR MÓVIL (HAMBURGUESA)

// SCROLL SUAVE

// EFECTO NAVBAR AL HACER SCROLL

// ANIMACIONES FADE-IN AL HACER SCROLL
function isVisible(el) {
    const rect = el.getBoundingClientRect();
    return rect.top <= window.innerHeight * 0.88 && rect.bottom >= 0;
}

function initScrollAnimations() {
    const targets = document.querySelectorAll(
        '.problema-card, .step-card, .beneficio-card, .ahorro-box, .plan-card, .team-card, .section-header'
    );

    targets.forEach(el => el.classList.add('fade-in'));

    function check() {
        targets.forEach(el => {
            if (isVisible(el)) el.classList.add('visible');
        });
    }

    window.addEventListener('scroll', throttle(check, 80));
    check();
}

// EFECTO 3D EN TARJETAS
function init3DCards() {
    document.querySelectorAll('.plan-card, .problema-card, .step-card').forEach(card => {
        card.addEventListener('mousemove', e => {
            const r  = card.getBoundingClientRect();
            const rx = ((e.clientY - r.top)  - r.height / 2) / 14;
            const ry = (r.width / 2 - (e.clientX - r.left)) / 14;
            card.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(6px)`;
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
        });
    });
}

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
