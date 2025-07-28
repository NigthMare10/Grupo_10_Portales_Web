document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.carusel-track');
    const slides = Array.from(track.children);
    const prevButton = crearBoton('prev', '‹');
    const nextButton = crearBoton('next', '›');
    
    let currentIndex = 0;
    let isAnimating = false;

    const carousel = document.querySelector('.carusel');
    carousel.appendChild(prevButton);
    carousel.appendChild(nextButton);

    function crearBoton(clase, texto) {
        const btn = document.createElement('button');
        btn.classList.add('carrusel-btn', clase);
        btn.textContent = texto;
        return btn;
    }

    function moverCarrusel(index) {
        if (isAnimating) return;
        
        isAnimating = true;
        
        const anchoSlide = slides[0].getBoundingClientRect().width;
        let nuevoIndex = index;
        
      
        if (nuevoIndex < 0) {
            nuevoIndex = slides.length - 1;
        } else if (nuevoIndex >= slides.length) {
            nuevoIndex = 0;
        }

       
        currentIndex = nuevoIndex;
        
        
        track.style.transform = `translateX(-${anchoSlide * currentIndex}px)`;
        track.style.transition = 'transform 0.5s ease-in-out';
        
        
        setTimeout(() => {
            isAnimating = false;
        }, 500);
    }

    prevButton.addEventListener('click', () => {
        moverCarrusel(currentIndex - 1);
    });

    nextButton.addEventListener('click', () => {
        moverCarrusel(currentIndex + 1);
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            moverCarrusel(currentIndex - 1);
        } else if (e.key === 'ArrowRight') {
            moverCarrusel(currentIndex + 1);
        }
    });

    moverCarrusel(0);
});