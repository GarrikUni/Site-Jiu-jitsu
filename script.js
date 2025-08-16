// pega o botão e o menu

const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

// Quando clicar no botão, alterna a classe "show"

menuToggle = addEventListener('click', () => {
    menu.classList.toggle('show');
});

document.getElementById("menu-toggle").addEventListener("click", function()
{document.querySelector(".menu").classList.toggle("show");});