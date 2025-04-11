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
    function mostrarMensaje(id, texto, incluirBoton = false) {
        // Eliminar mensaje anterior si existe
        const existente = document.querySelector('.mensaje-dinamico');
        if (existente) {
            existente.remove();
        }

        // Crear el mensaje
        const mensaje = document.createElement('div');
        mensaje.className = 'mensaje-dinamico visible';
        mensaje.innerText = texto;

        // Agregar botón si se pidió
        if (incluirBoton) {
            const boton = document.createElement('a');
            boton.href = "https://wa.me/593968017735";
            boton.className = 'boton-whatsapp';
            boton.target = '_blank';
            boton.innerHTML = `<img src="/static/images/whatsapp.png" alt="WhatsApp"> Escríbenos por WhatsApp`;
            mensaje.appendChild(document.createElement('br'));
            mensaje.appendChild(boton);
        }

        // Insertar en el contenedor
        const contenedor = document.getElementById('mensaje-dinamico-container');
        contenedor.appendChild(mensaje);

        // Desaparecer luego de 3 segundos
        setTimeout(() => {
            mensaje.classList.remove('visible');
            setTimeout(() => mensaje.remove(), 500);
        }, 3000);
    }

    const iconoCompra = document.getElementById('icono-compra');
    const iconoPagos = document.getElementById('icono-pagos');
    const iconoWhatsapp = document.getElementById('icono-whatsapp');

    if (iconoCompra) {
        iconoCompra.addEventListener('click', (e) => {
            e.preventDefault();
            mostrarMensaje('compra', '🔒 Compra segura garantizada con políticas de protección al cliente.');
        });
    }

    if (iconoPagos) {
        iconoPagos.addEventListener('click', (e) => {
            e.preventDefault();
            mostrarMensaje('pagos', '💳 Aceptamos pagos por transferencia y en efectivo al recibir el pedido.');
        });
    }

    if (iconoWhatsapp) {
        iconoWhatsapp.addEventListener('click', (e) => {
            e.preventDefault();
            mostrarMensaje('whatsapp', '📲 Escríbenos directo a WhatsApp para hacer tu pedido.', true);
        });
    }
});
