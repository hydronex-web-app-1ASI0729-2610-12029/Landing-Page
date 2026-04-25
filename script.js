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




// TOAST NOTIFICATIONS

function showToast(message, type = 'info') {
    document.querySelector('.toast')?.remove();

    const icons = { success: '✓', error: '✕', info: 'ℹ' };
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `<span>${icons[type] || icons.info}</span> ${message}`;
    document.body.appendChild(toast);

    requestAnimationFrame(() => toast.classList.add('show'));

    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 320);
    }, 4500);
}


// UTILIDADES



// INICIALIZACIÓN


