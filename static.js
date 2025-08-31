let heroImage = document.getElementById("hero-image");
const images = [
    "../images/gallery1.jpg",
    "../images/mental1.jpg",
    "../images/gallery3.jpg",
    "../images/gallery4.jpg",
    "../images/gallery5.jpg",
    "../images/gallery6.jpg"
];
let index = 0;
setInterval(() => {
    index = (index + 1) % images.length;
    heroImage.src = images[index];
}, 5000);

// Hamburger menu functionality
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}