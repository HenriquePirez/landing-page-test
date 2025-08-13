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

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        window.scrollTo({
            top: section.offsetTop,
            behavior: 'smooth'
        });
    }
}