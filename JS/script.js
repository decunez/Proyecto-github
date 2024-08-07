// JS/script.js

// Mostrar el botón cuando se desplaza hacia abajo 20px desde la parte superior de la página
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    const backToTopBtn = document.getElementById("backToTopBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
}

// Desplazarse hacia arriba de la página cuando se hace clic en el botón con un desplazamiento suave
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
