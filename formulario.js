document.querySelector("form").addEventListener("submit", function(event) {
    // Obtiene los valores de los campos del formulario
    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    // Verifica que los campos no estén vacíos
    if (nombre === "") {
        alert("Por favor, ingresa tu nombre.");
        event.preventDefault(); // Evita que el formulario se envíe
        return;
    }

    if (email === "") {
        alert("Por favor, ingresa tu correo electrónico.");
        event.preventDefault();
        return;
    }

    if (mensaje === "") {
        alert("Por favor, ingresa tu mensaje.");
        event.preventDefault();
        return;
    }

    // Puedes agregar validaciones adicionales, como comprobar que el correo electrónico tenga el formato correcto
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Por favor, ingresa un correo electrónico válido.");
        event.preventDefault();
        return;
    }
});
