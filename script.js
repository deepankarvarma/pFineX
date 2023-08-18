const parallaxContent = document.querySelector('.parallax-content');
const parallaxImage = document.querySelector('.parallax-image');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const parallaxOffset = scrollY * 0.5; // Adjust the parallax effect strength as needed
    
    parallaxContent.style.transform = `translateX(-${parallaxOffset}px)`;
    parallaxContent.style.opacity = 1 - (scrollY * 0.002); // Adjust opacity as needed

    parallaxImage.style.transform = `translateY(-${parallaxOffset}px)`;
});
