const imageContainer = document.getElementById('image-container');

if (window.innerWidth > 800) {
    // Desktop
    imageContainer.style.backgroundImage = 'url("RunDais.png")';
} else {
    // Mobile
    imageContainer.style.backgroundImage = 'url("RESULTS.png")';
}
