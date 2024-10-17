//INDEX//
let currentIndex = 0;
const images = document.querySelectorAll('.hero-img');
const totalImages = images.length;

function switchImage() {
    images[currentIndex].classList.remove('active');

    currentIndex = (currentIndex + 1) % totalImages;

    images[currentIndex].classList.add('active');
}

setInterval(switchImage, 3000);

//MENU//
const highlight = document.querySelector('.highlight');
const words = ['Stress', 'Anxiety', 'Anger'];
let index = 0;

function changeText() {
    highlight.style.opacity = 0; 

    setTimeout(() => {
        highlight.textContent = words[index]; 
        index = (index + 1) % words.length; 
        highlight.style.opacity = 1; 
    }, 500); 

    setTimeout(changeText, 2000); 
}

// Start the text change function
changeText();







