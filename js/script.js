
document.addEventListener("DOMContentLoaded", function() {

    // Obtenemos referencias a los elementos del formulario usando getElementById
    var btnEnviar    = document.getElementById("btn-enviar");
    var nombre       = document.getElementById("nombre");
    var email        = document.getElementById("email");
    var municipio    = document.getElementById("municipio");
    var actividad    = document.getElementById("actividad");
    var mensaje      = document.getElementById("mensaje");
    var terminos     = document.getElementById("terminos");
    var msgExito     = document.getElementById("mensaje-exito");


    // Cuando el usuario hace clic en el botón enviar
    btnEnviar.addEventListener("click", function() {

        // Primero se limpia errores anteriores
        limpiarErrores();

        // Se valida cada campo y se guarda si hay errores
        var hayErrores = false;

        // Validar nombre
        if (nombre.value.trim().length < 3) {
            mostrarError("error-nombre", "El nombre debe tener mínimo 3 caracteres");
            nombre.classList.add("campo-error");
            hayErrores = true;
        }

        // Validar email usando una expresión regular
        var formatoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formatoEmail.test(email.value.trim())) {
            mostrarError("error-email", "Escribe un correo electrónico válido");
            email.classList.add("campo-error");
            hayErrores = true;
        }

        // Validar municipio 
        if (municipio.value === "") {
            mostrarError("error-municipio", "Selecciona tu municipio de residencia");
            municipio.classList.add("campo-error");
            hayErrores = true;
        }

        // Validar actividad
        if (actividad.value === "") {
            mostrarError("error-actividad", "Selecciona una actividad de interés");
            actividad.classList.add("campo-error");
            hayErrores = true;
        }

        // Validar mensaje
        if (mensaje.value.trim().length < 20) {
            mostrarError("error-mensaje", "El mensaje debe tener mínimo 20 caracteres");
            mensaje.classList.add("campo-error");
            hayErrores = true;
        }

        //  Validar el checkbox
        if (!terminos.checked) {
            mostrarError("error-terminos", "Debes aceptar los términos para continuar");
            hayErrores = true;
        }

        // Resultado final: si no hay errores, mostramos mensaje de éxito y ocultamos el formulario 
        if (hayErrores === false) {
            msgExito.style.display = "block";
            document.getElementById("formulario-contacto").style.display = "none";
        }
    });

    // FUNCIÓN: mostrarError
    function mostrarError(idSpan, textoError) {
        document.getElementById(idSpan).textContent = textoError;
    }

    // FUNCIÓN: limpiarErrores
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