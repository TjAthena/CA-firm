const words = ["Taxation", "Tax Filing", "Accounting"];
let index = 0;
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 150;  // Speed of typing in ms
const eraseSpeed = 100;   // Speed of erasing in ms
const delayBetweenWords = 1000; // Delay after word is typed before erasing

function typeEffect() {
    let dynamicText = document.querySelector('.dynamic-word');
    let currentWord = words[index];

    if (!isDeleting) {
        dynamicText.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
        if (charIndex === currentWord.length) {
            isDeleting = true;
            setTimeout(typeEffect, delayBetweenWords); // Pause before erasing
        } else {
            setTimeout(typeEffect, typingSpeed);
        }
    } else {
        dynamicText.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
        if (charIndex === 0) {
            isDeleting = false;
            index = (index + 1) % words.length; // Move to next word
        }
        setTimeout(typeEffect, eraseSpeed);
    }
}

// Start typing effect on page load
typeEffect();



// service swiper

new Swiper('.card-wrapper', {
    loop: true,
    spaceBetween: 30,
    // Pagination bullets
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
    },
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    // Responsive breakpoints
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        }
    }
});