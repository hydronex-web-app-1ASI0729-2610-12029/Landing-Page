// TANKIQ — script.js

// SISTEMA DE IDIOMAS

// NAVBAR MÓVIL (HAMBURGUESA)

// SCROLL SUAVE

// EFECTO NAVBAR AL HACER SCROLL

// ANIMACIONES FADE-IN AL HACER SCROLL

// EFECTO 3D EN TARJETAS

// FORMULARIO DE CONTACTO

function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const name    = this.querySelector('input[type="text"]')?.value.trim();
        const email   = this.querySelector('input[type="email"]')?.value.trim();
        const message = this.querySelector('textarea')?.value.trim();

        if (!name || !email || !message) {
            showToast(
                currentLanguage === 'es'
                    ? 'Por favor, completa todos los campos requeridos.'
                    : 'Please fill in all required fields.',
                'error'
            );
            return;
        }

        if (!validEmail(email)) {
            showToast(
                currentLanguage === 'es'
                    ? 'Por favor, ingresa un email válido.'
                    : 'Please enter a valid email address.',
                'error'
            );
            return;
        }

        showToast(
            currentLanguage === 'es'
                ? '¡Mensaje enviado! Nos pondremos en contacto pronto.'
                : 'Message sent! We will get back to you shortly.',
            'success'
        );
        this.reset();
    });
}

// NEWSLETTER
function initNewsletter() {
    const btn   = document.querySelector('.newsletter-btn');
    const input = document.querySelector('.newsletter-input');
    if (!btn || !input) return;

    btn.addEventListener('click', e => {
        e.preventDefault();
        const email = input.value.trim();

        if (!email || !validEmail(email)) {
            showToast(
                currentLanguage === 'es'
                    ? 'Por favor, ingresa un email válido.'
                    : 'Please enter a valid email address.',
                'error'
            );
            return;
        }

        showToast(
            currentLanguage === 'es'
                ? '¡Gracias por suscribirte!'
                : 'Thanks for subscribing!',
            'success'
        );
        input.value = '';
    });
}


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
