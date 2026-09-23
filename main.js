const btnMenu = document.getElementById("btnMenu");
const menu = document.getElementById("menu");

if (btnMenu && menu) {
    btnMenu.addEventListener("click", function () {
        menu.classList.toggle("menu-abierto");
    });
}

const btnArriba = document.querySelector(".flechita");

if (btnArriba) {
    btnArriba.addEventListener("click", function (e) {
        e.preventDefault();

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}