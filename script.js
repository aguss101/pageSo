const btnNo = document.getElementById('btnNo');
const btnSi = document.getElementById('btnSi');
const h1 = document.getElementById('pregunta');
const grupoBotones = document.getElementById('contenedorBotones');

// NUEVO: zona de mensajes
const mensajesEl = document.getElementById('mensajes');

// NUEVO: frases (podés cambiarlas por las que quieras)
const frases = [
    "¿Segura que no? 😏",
    "Daleeee, no seas así, malaa ",
    "Esa opción no existe 😌",
    "bueno esta bien, mejor le digo a sofia marino",
    "AHRE tremenda FEA",
    "Yo sé que querés decir que sí ❤️",
    "Deja de hacerte la dificill",
    "Decí que sí y listooo 🥰",
    "MIAUUU",
    "Malaa",
    "Ayudaaa mi novia no me quiereee",
    "uuu, esa sofia marino ta que quema 😏",
    "AHREEEEEEEEEEEE",
    "JASJAJS SOS RE MALA DECI QUE SI DALEEE",
    "TE EXTRAÑO DEMASIADOOOOOO NO ME DEJEEES",
    "POR FAVOR",
    "EXTRAÑO CADA CARICIA TUYA, EN SERIO, TE NECESITO",
    "No hay nadie igual a vos",
    "Sos única, por favor, te extraño mucho",
];

let indiceFrase = 0;

// NUEVO: muestra un texto cada vez que se mueve el NO
const mostrarMensaje = () => {
    if (!mensajesEl) return;

    mensajesEl.textContent = frases[indiceFrase];
    indiceFrase = (indiceFrase + 1) % frases.length;

    // Reinicia animación (para que se vea el “pop” cada vez)
    mensajesEl.classList.remove('pop');
    void mensajesEl.offsetWidth; // fuerza reflow
    mensajesEl.classList.add('pop');
};

const moverBotonDentro = () => {
    // mover el botón relativo a su contenedor real (#contenedorBotones)
    const areaRect = grupoBotones.getBoundingClientRect();
    const btnRect = btnNo.getBoundingClientRect();

    const maxX = areaRect.width - btnRect.width;
    const maxY = areaRect.height - btnRect.height;

    if (maxX <= 0 || maxY <= 0) return;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    btnNo.style.position = 'absolute';
    btnNo.style.left = `${randomX}px`;
    btnNo.style.top = `${randomY}px`;

    // NUEVO: mensaje cuando se mueve
    mostrarMensaje();
};

// Eventos
btnNo.addEventListener('mouseenter', moverBotonDentro);
btnNo.addEventListener('click', moverBotonDentro);

btnSi.addEventListener('click', () => {
    h1.innerHTML = "Yo tambien te amo bebé ❤️";
    h1.style.color = "#74c69d";
    grupoBotones.classList.add('hidden');
    btnNo.style.display = 'none';

    if (mensajesEl) {
        mensajesEl.textContent = "❤️ Sabía que me elegirias ❤️";
        mensajesEl.classList.add('pop');
    }
});
