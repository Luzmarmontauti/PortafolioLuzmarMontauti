document.querySelector("form").addEventListener("submit", function(event) {
    
    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    
    if (nombre === "") {
        alert("Por favor, ingresa tu nombre.");
        event.preventDefault(); 
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

    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Por favor, ingresa un correo electrónico válido.");
        event.preventDefault();
        return;
    }
});
