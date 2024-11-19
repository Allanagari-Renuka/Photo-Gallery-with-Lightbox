alert("Welcome to Our Photo Gallery with Lightbox");
const galleryItems = document.querySelectorAll('.gallery-item');  
const lightbox = document.getElementById('lightbox');  
const lightboxImg = document.getElementById('lightbox-img');  
const closeBtn = document.querySelector('.close');  

galleryItems.forEach(item => {  
    item.addEventListener('click', () => {  
        lightbox.style.display = 'flex';  
        lightboxImg.src = item.src;  
    });  
});  

closeBtn.addEventListener('click', () => {  
    lightbox.style.display = 'none';  
});  

lightbox.addEventListener('click', () => {  
    lightbox.style.display = 'none';  
});