
// ==========================================
// MENÚ RESPONSIVE
// ==========================================

const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", function () {

    menu.classList.toggle("active");

});


// Cerrar menú al seleccionar una opción

document.querySelectorAll("#menu a").forEach(function(link) {

    link.addEventListener("click", function() {

        menu.classList.remove("active");

    });

});


// ==========================================
// FECHA MÍNIMA PARA SOLICITAR CITA
// ==========================================

const fecha = document.getElementById("fecha");

const hoy = new Date()
    .toISOString()
    .split("T")[0];

fecha.min = hoy;


// ==========================================
// FORMULARIO DE CITA
// ==========================================

const form = document.getElementById("citaForm");

const resultado = document.getElementById("resultado");


form.addEventListener("submit", function(event) {

    // Evitar que el formulario recargue la página

    event.preventDefault();


    // Obtener información

    const nombre =
        document.getElementById("nombre")
        .value
        .trim();

    const telefono =
        document.getElementById("telefono")
        .value
        .trim();

    const moto =
        document.getElementById("moto")
        .value
        .trim();

    const servicio =
        document.getElementById("servicio")
        .value;

    const fechaSeleccionada =
        document.getElementById("fecha")
        .value;

    const hora =
        document.getElementById("hora")
        .value;

    const mensaje =
        document.getElementById("mensaje")
        .value
        .trim();


    // ==========================================
    // VALIDAR CAMPOS
    // ==========================================

    if (
        !nombre ||
        !telefono ||
        !moto ||
        !servicio ||
        !fechaSeleccionada ||
        !hora
    ) {

        resultado.textContent =
            "Por favor completa todos los campos obligatorios.";

        resultado.style.color = "#c62828";

        return;
    }


    // ==========================================
    // FORMATEAR FECHA
    // ==========================================

    const fechaFormateada =
        new Date(
            fechaSeleccionada + "T00:00:00"
        ).toLocaleDateString("es-CO");


    // ==========================================
    // MOSTRAR RESULTADO
    // ==========================================

    resultado.style.color = "#16803c";


    resultado.innerHTML = `

        ¡Solicitud registrada, ${nombre}!<br>

        Moto: ${moto}<br>

        Servicio: ${servicio}<br>

        Fecha: ${fechaFormateada}
        a las ${hora}.

    `;


    // ==========================================
    // CREAR MENSAJE PARA WHATSAPP
    // ==========================================

    const textoWhatsApp =

        `Hola MotoGuajira. Quiero solicitar una cita.%0A%0A` +

        `Nombre: ${encodeURIComponent(nombre)}%0A` +

        `Teléfono: ${encodeURIComponent(telefono)}%0A` +

        `Moto: ${encodeURIComponent(moto)}%0A` +

        `Servicio: ${encodeURIComponent(servicio)}%0A` +

        `Fecha: ${encodeURIComponent(fechaFormateada)}%0A` +

        `Hora: ${encodeURIComponent(hora)}%0A` +

        `Descripción: ${
            encodeURIComponent(
                mensaje || "No especificada"
            )
        }`;


    // ==========================================
    // BOTÓN WHATSAPP
    // ==========================================

    const enlace =
        document.createElement("a");


    enlace.href =
        `https://wa.me/573001234567?text=${textoWhatsApp}`;


    enlace.target = "_blank";


    enlace.textContent =
        "Enviar solicitud por WhatsApp";


    enlace.className =
        "btn btn-whatsapp";


    enlace.style.marginTop =
        "12px";


    enlace.style.display =
        "inline-block";


    resultado.appendChild(
        document.createElement("br")
    );


    resultado.appendChild(enlace);

});


// ==========================================
// AÑO AUTOMÁTICO DEL FOOTER
// ==========================================

document.getElementById("year").textContent =
    new Date().getFullYear();
