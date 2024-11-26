function toggleMenu() {
    const menu = document.getElementById("menu");

    // Verificar si el menú tiene la clase "show"
    if (menu.classList.contains("show")) {
        menu.classList.remove("show"); // Si está visible, ocultarlo
    } else {
        menu.classList.add("show"); // Si está oculto, hacerlo visible
    }
}

function toggleMenu1() {
    const menu = document.getElementById("menu_1");

    // Verificar si el menú tiene la clase "show"
    if (menu.classList.contains("show")) {
        menu.classList.remove("show"); // Si está visible, ocultarlo
    } else {
        menu.classList.add("show"); // Si está oculto, hacerlo visible
    }
}
