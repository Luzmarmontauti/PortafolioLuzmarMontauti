
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    document.querySelector("nav").classList.toggle("dark-mode");
    document.querySelector("footer").classList.toggle("dark-mode");
    document.querySelector(".contenedorElementos").classList.toggle("dark-mode");

    // Cambiar el texto del botón según el tema
    if (document.body.classList.contains("dark-mode")) {
        themeToggle.textContent = "Modo Claro";
    } else {
        themeToggle.textContent = "Modo Oscuro";
    }
});
