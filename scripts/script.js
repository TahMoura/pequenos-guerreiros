document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.counter');
    
    counters.forEach((counter, index) => {
        const updateCounter = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText.replace('+', '');

            // Ajuste para cada contador
            let increment;
            let animationSpeed;
            if (index === 0 || index === 2) { // Imagem 1 e Imagem 3
                increment = target / 1600; // Contagem mais lenta
                animationSpeed = 40; // Tempo da animação mais longo
            } else { // Imagem 2
                increment = target / 400; // Contagem mais rápida
                animationSpeed = 20; // Tempo da animação mais curto
            }

            if (count < target) {
                counter.innerText = `+${Math.ceil(count + increment)}`;
                setTimeout(updateCounter, animationSpeed); // Tempo da animação
            } else {
                counter.innerText = `+${target}`;
            }
        };

        updateCounter();
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.carrossel-parceiros-track');
    const prevButton = document.querySelector('.carrossel-parceiros-prev');
    const nextButton = document.querySelector('.carrossel-parceiros-next');
    const images = Array.from(track.children);
    const imageWidth = images[0].getBoundingClientRect().width + 20; // Largura da imagem + margem

    let index = 0;

    // Duplicar as imagens para criar um efeito contínuo
    images.forEach(image => {
        track.appendChild(image.cloneNode(true));
    });

    function updateCarousel() {
        const offset = -index * imageWidth;
        track.style.transform = `translateX(${offset}px)`;
    }

    nextButton.addEventListener('click', () => {
        index = (index + 1) % images.length;
        updateCarousel();
    });

    prevButton.addEventListener('click', () => {
        index = (index - 1 + images.length) % images.length;
        updateCarousel();
    });
    
    setInterval(() => {
        nextButton.click();
    }, 3000); 
});

document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.depoimentos-track');
    const prevButton = document.querySelector('.depoimentos-prev');
    const nextButton = document.querySelector('.depoimentos-next');
    const cards = Array.from(track.children);
    let currentIndex = 0;

    function updateCarousel() {
        const cardWidth = track.clientWidth;
        const offset = -currentIndex * cardWidth;
        track.style.transform = `translateX(${offset}px)`;
    }

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % cards.length;
        updateCarousel();
    });

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + cards.length) % cards.length;
        updateCarousel();
    });

    // Atualiza o carrossel ao redimensionar a janela para manter a responsividade
    window.addEventListener('resize', updateCarousel);

    // Inicializa o carrossel na posição correta
    updateCarousel();
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Simula o envio do formulário
    setTimeout(function() {
        alert('Formulário enviado com sucesso!');
        window.location.reload(); // Recarrega a página
    }, 500); // Simulação de atraso no envio
});

















