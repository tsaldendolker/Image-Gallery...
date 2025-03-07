// Lightbox Functionality
const images = document.querySelectorAll('.gallery img');
const lightbox = document.querySelector('.lightbox');
const lightboxImg = document.querySelector('.lightbox img');
const closeBtn = document.querySelector('.close');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0;

// Open Lightbox
images.forEach((img, index) => {
    img.addEventListener('click', () => {
        currentIndex = index;
        showLightbox();
    });
});

function showLightbox() {
    lightbox.style.display = 'flex';
    lightboxImg.src = images[currentIndex].src;
}

// Close Lightbox
closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

// Next Image
nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    showLightbox();
});

// Previous Image
prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showLightbox();
});

// Close Lightbox on Outside Click
lightbox.addEventListener('click', (e) => {
    if (e.target !== lightboxImg) {
        lightbox.style.display = 'none';
    }
});

// Search Functionality
const searchBox = document.getElementById('search-box');
searchBox.addEventListener('input', () => {
    const searchValue = searchBox.value.toLowerCase();
    images.forEach(img => {
        const altText = img.alt.toLowerCase();
        img.style.display = altText.includes(searchValue) ? 'block' : 'none';
    });
});

// Filtering Images
const filterButtons = document.querySelectorAll('.filter-btn');
filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const category = btn.dataset.filter;
        images.forEach(img => {
            if (category === 'all' || img.classList.contains(category)) {
                img.style.display = 'block';
            } else {
                img.style.display = 'none';
            }
        });
    });
});

// Dark Mode Toggle
const darkModeToggle = document.getElementById('dark-mode-toggle');
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Lazy Loading Images
images.forEach(img => {
    img.setAttribute('loading', 'lazy');
});
