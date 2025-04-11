let lastScrollTop = 0;
const barra = document.getElementById('barra-flotante');

window.addEventListener("scroll", function () {
    const barra = document.getElementById("barraScroll");
    if (window.scrollY > 100) {
        barra.classList.add("visible");
    } else {
        barra.classList.remove("visible");
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const iconoCompra = document.getElementById('compra-segura-icon');
    const mensajeCompra = document.getElementById('mensaje-compra-segura');
    const iconoPagos = document.getElementById('pagos-icon');
    const mensajePagos = document.getElementById('mensaje-pagos');

    if (iconoCompra && mensajeCompra) {
        iconoCompra.addEventListener('click', (e) => {
            e.preventDefault();
            mensajeCompra.classList.toggle('oculto');
        });
    }

    if (iconoPagos && mensajePagos) {
        iconoPagos.addEventListener('click', (e) => {
            e.preventDefault();
            mensajePagos.classList.toggle('oculto');
        });
    }
});

  
