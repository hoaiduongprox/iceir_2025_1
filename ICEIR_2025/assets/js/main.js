let currentIndex = 0;
        const itemsToShow = 3;
        const totalItems = document.querySelectorAll('.chairs-list').length;
        function updateCarousel() {
            const carouselWrapper = document.getElementById('carouselWrapper');
            carouselWrapper.style.transform = `translateX(-${currentIndex * 510}px)`;
        }
        function prevSlide() {
            currentIndex = Math.max(currentIndex - 1, 0);
            updateCarousel();
        }
        function nextSlide() {
            currentIndex = Math.min(currentIndex + 1, totalItems - itemsToShow);
            updateCarousel();
        }
