const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const carousel = document.getElementById('carousel');

let currentScroll = 0;

const scrollAmount = 310; // Adjust based on card width + gap

prevBtn.addEventListener('click', () => {
    currentScroll -= scrollAmount;
    if (currentScroll < 0) {
        currentScroll = 0;
    }
    carousel.style.transform = `translateX(-${currentScroll}px)`;
});

nextBtn.addEventListener('click', () => {
    const maxScroll = carousel.scrollWidth - carousel.clientWidth;
    currentScroll += scrollAmount;
    if (currentScroll > maxScroll) {
        currentScroll = maxScroll;
    }
    carousel.style.transform = `translateX(-${currentScroll}px)`;
});
