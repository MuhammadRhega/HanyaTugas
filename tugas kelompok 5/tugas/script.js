let currentIndex = 0;
const slides = document.querySelectorAll('.slider');
const totalSlides = slides.length;

function showSlide(index) {
  // Cek batasan
  if (index >= totalSlides) currentIndex = 0;
  else if (index < 0) currentIndex = totalSlides - 1;
  else currentIndex = index;

  // Menampilkan slider aktif
  slides.forEach((slide, i) => {
    if (i === currentIndex) {
      slide.classList.add('active');
    } else {
      slide.classList.remove('active');
    }
  });
}

function changeSlide(direction) {
  showSlide(currentIndex + direction);
}

// Inisialisasi tampilan slide pertama
showSlide(currentIndex);

// Optional: menambahkan kontrol otomatis
setInterval(() => {
  changeSlide(1);
}, 7000); 



// Get elements
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeLightbox = document.getElementById('close-lightbox');
const lightboxLinks = document.querySelectorAll('.gallery a');

// Open lightbox when any image is clicked
lightboxLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default anchor behavior
        const imgSrc = this.href;
        lightboxImg.src = imgSrc;

        // Show lightbox with animation
        lightbox.classList.remove('hide'); // Ensure the lightbox is visible
        lightbox.classList.add('show');
    });
});

// Menampilkan lightbox
function showLightbox() {
  document.querySelector('.lightbox-overlay').classList.add('show');
  document.body.classList.add('lightbox-active');
}

// Menyembunyikan lightbox
function hideLightbox() {
  document.querySelector('.lightbox-overlay').classList.remove('show');
  document.body.classList.remove('lightbox-active');
}

// Menambahkan event listener untuk menutup lightbox saat close button diklik
document.querySelector('.close').addEventListener('click', hideLightbox);

// Menambahkan event listener untuk menutup lightbox saat area overlay diklik
document.querySelector('.lightbox-overlay').addEventListener('click', function(event) {
  if (event.target === this) {
    hideLightbox();
  }
});
