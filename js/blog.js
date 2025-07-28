document.addEventListener("DOMContentLoaded", () => {
    const botonVerMas = document.getElementById("ver-mas");
    const contenedor = document.querySelector(".blog-entradas");

    botonVerMas.addEventListener("click", () => {
        const nuevasEntradas = `
            <article class="entrada">
                <div class="contenido">
                    <h3>¿Cómo detectar fallas en una bomba de inyección?</h3>
                    <p>Aprende a identificar síntomas comunes que indican problemas en la bomba.</p>
                    <a href="#" class="btn-leer"
                       data-contenido="Síntomas como pérdida de potencia, humo negro y ruidos extraños indican fallas en la bomba de inyección. Es importante revisarla antes de que falle por completo.">
                       Leer más
                    </a>
                </div>
            </article>

            <article class="entrada">
                <div class="contenido">
                    <h3>Aditivos diésel: ¿Realmente funcionan?</h3>
                    <p>Analizamos los pros y contras del uso de aditivos en motores diésel modernos.</p>
                    <a href="#" class="btn-leer"
                       data-contenido="Algunos aditivos pueden mejorar la lubricación y limpiar el sistema, pero su uso excesivo puede dañar componentes sensibles. Consulta siempre con un especialista.">
                       Leer más
                    </a>
                </div>
            </article>
        `;
        contenedor.insertAdjacentHTML("beforeend", nuevasEntradas);
        botonVerMas.style.display = "none"; // Oculta el botón después de cargar más
        activarModal(); // Reactivar eventos en nuevos botones
    });

    function activarModal() {
        const modal = document.getElementById("modal");
        const modalTitulo = document.getElementById("modal-titulo");
        const modalTexto = document.getElementById("modal-texto");
        const cerrarModal = document.querySelector(".cerrar");

        document.querySelectorAll(".btn-leer").forEach(boton => {
            boton.addEventListener("click", (e) => {
                e.preventDefault();
                modalTitulo.textContent = boton.closest(".contenido").querySelector("h3").textContent;
                modalTexto.textContent = boton.getAttribute("data-contenido");
                modal.style.display = "flex";
            });
        });

        cerrarModal.addEventListener("click", () => {
            modal.style.display = "none";
        });

        window.addEventListener("click", (e) => {
            if (e.target === modal) {
                modal.style.display = "none";
            }
        });
    }

    activarModal();
});