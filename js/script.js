document.addEventListener("DOMContentLoaded", function() {

    // ================================================
    // FORMULARIO DE CONTACTO
    // ================================================
    var btnEnviar = document.getElementById("btn-enviar");

    if (btnEnviar) {
        var nombre    = document.getElementById("nombre");
        var email     = document.getElementById("email");
        var municipio = document.getElementById("municipio");
        var actividad = document.getElementById("actividad");
        var mensaje   = document.getElementById("mensaje");
        var terminos  = document.getElementById("terminos");
        var msgExito  = document.getElementById("mensaje-exito");

        btnEnviar.addEventListener("click", function() {
            limpiarErrores();
            var hayErrores = false;

            if (nombre.value.trim().length < 3) {
                mostrarError("error-nombre", "El nombre debe tener mínimo 3 caracteres");
                nombre.classList.add("campo-error");
                hayErrores = true;
            }

            var formatoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!formatoEmail.test(email.value.trim())) {
                mostrarError("error-email", "Escribe un correo electrónico válido");
                email.classList.add("campo-error");
                hayErrores = true;
            }

            if (municipio.value === "") {
                mostrarError("error-municipio", "Selecciona tu municipio de residencia");
                municipio.classList.add("campo-error");
                hayErrores = true;
            }

            if (actividad.value === "") {
                mostrarError("error-actividad", "Selecciona una actividad de interés");
                actividad.classList.add("campo-error");
                hayErrores = true;
            }

            if (mensaje.value.trim().length < 20) {
                mostrarError("error-mensaje", "El mensaje debe tener mínimo 20 caracteres");
                mensaje.classList.add("campo-error");
                hayErrores = true;
            }

            if (!terminos.checked) {
                mostrarError("error-terminos", "Debes aceptar los términos para continuar");
                hayErrores = true;
            }

            if (hayErrores === false) {
                msgExito.style.display = "block";
                document.getElementById("formulario-contacto").style.display = "none";
            }
        });
    }

    // ================================================
    // LIGHTBOX
    // ================================================
    var lightbox        = document.getElementById("lightbox");
    var lightboxImg     = document.getElementById("lightbox-img");
    var lightboxCaption = document.getElementById("lightbox-caption");
    var cerrarLightbox  = document.getElementById("cerrar-lightbox");
    var imagenesGaleria = document.querySelectorAll(".figura-galeria img");

    if (lightbox) {

        for (var i = 0; i < imagenesGaleria.length; i++) {
            imagenesGaleria[i].addEventListener("click", function() {
                lightbox.style.display = "flex";
                lightboxImg.src = this.src;
                lightboxImg.alt = this.alt;
                var caption = this.parentElement.querySelector("figcaption");
                if (caption) {
                    lightboxCaption.textContent = caption.textContent;
                }
            });
        }

        cerrarLightbox.addEventListener("click", function() {
            lightbox.style.display = "none";
            lightboxImg.src = "";
        });

        lightbox.addEventListener("click", function(evento) {
            if (evento.target === lightbox) {
                lightbox.style.display = "none";
                lightboxImg.src = "";
            }
        });
    }

    // ================================================
    // FUNCIONES COMPARTIDAS
    // ================================================
    function mostrarError(idSpan, textoError) {
        document.getElementById(idSpan).textContent = textoError;
    }

    function limpiarErrores() {
        var errores = document.querySelectorAll(".mensaje-error");
        for (var i = 0; i < errores.length; i++) {
            errores[i].textContent = "";
        }
        var camposError = document.querySelectorAll(".campo-error");
        for (var i = 0; i < camposError.length; i++) {
            camposError[i].classList.remove("campo-error");
        }
    }

});
