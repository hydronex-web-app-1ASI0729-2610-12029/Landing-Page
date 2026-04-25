// TANKIQ — script.js

// SISTEMA DE IDIOMAS

// NAVBAR MÓVIL (HAMBURGUESA)

// SCROLL SUAVE

// EFECTO NAVBAR AL HACER SCROLL

// ANIMACIONES FADE-IN AL HACER SCROLL

// EFECTO 3D EN TARJETAS

// FORMULARIO DE CONTACTO

// NEWSLETTER

// BOTONES DE PLANES

function initPricingButtons() {
    document.querySelectorAll('.plan-btn').forEach(btn => {
        btn.addEventListener('click', e => {
            const href = btn.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                smoothScrollTo(href);
                showToast(
                    currentLanguage === 'es'
                        ? '¡Perfecto! Cuéntanos sobre tu edificio.'
                        : 'Great! Tell us about your building.',
                    'success'
                );
            }
        });
    });
}

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
