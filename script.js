function getRandomPosition() {
    const x = Math.random(0) * (window.innerWidth - 1000);
    const y = Math.random(0) * (window.innerHeight );
    return [x, y];
}

function getRandomRotation() {
    return Math.random() * 360; // Random rotation between 0 and 360 degrees
}

function moveAndRotateImages() {
    const images = document.querySelectorAll('.flying-image');

    images.forEach(function(image) {
        const [x, y] = getRandomPosition();
        const rotation = getRandomRotation();

        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;
        const imageWidth = image.offsetWidth;
        const imageHeight = image.offsetHeight;

        // Ensure the image stays within the boundaries of the screen
        const newX = Math.min(screenWidth - imageWidth, Math.max(0, x));
        const newY = Math.min(screenHeight - imageHeight, Math.max(0, y));
        
        image.style.transform = `translate(${newX}px, ${newY}px) rotate(${rotation}deg)`;
    });

    setTimeout(moveAndRotateImages, 100); // Move and rotate the images every 2 seconds
}

window.addEventListener('DOMContentLoaded', () => {
    moveAndRotateImages();
});
