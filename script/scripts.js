// Pré-carrega imagens do carousel para melhorar performance
const preloadImages = [
    'images/massas/pene com molho branco brocolis e frango.jpg',
    'images/fundo-definitivo-camera.png',
    'images/massas/penne quatro queijos.jpg',
    'images/GAMBERI.jpg',
    'images/DOLLCI CHOCOLATE.jpg',
    'images/MARGUERITA.jpg',
    'images/PALMITO.jpg'
];
preloadImages.forEach(img => {
    const image = new Image();
    image.src = img;
});

document.querySelector('.menu-toggle').addEventListener('click', function () {
    const nav = document.querySelector('nav');
    const isExpanded = this.getAttribute('aria-expanded') === 'true';
    this.setAttribute('aria-expanded', !isExpanded);
    nav.classList.toggle('active');
});

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        window.scrollTo({
            top: section.offsetTop,
            behavior: 'smooth'
        });
    }
}


document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".menu");

    toggle.addEventListener("click", () => {
        menu.classList.toggle("show");
    });
});

const pizzas = document.getElementsByClassName("carroussel--container")[0].children;
let actualImg = 0;
const loopInterval = setInterval(() => {
  pizzas[actualImg].style.opacity = 0;
  if (actualImg >= pizzas.length - 1) {
    actualImg = 0;
  } else {
    actualImg += 1;
  } 
  pizzas[actualImg].style.opacity = 1;
}, 2000);
