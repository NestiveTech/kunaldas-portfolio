// Dark mode toggle
const toggle = document.getElementById('darkModeToggle');
toggle.addEventListener('change', () => {
    document.body.classList.toggle('dark-theme');
    if (document.body.classList.contains('dark-theme')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});
// Load theme from localStorage
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-theme');
    document.getElementById('darkModeToggle').checked = true;
}

// Scroll animations (fade-in)
const faders = document.querySelectorAll('.fade-in');
const appearOptions = {
    threshold: 0.1
};
const appearOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

// Toggle the mobile navigation menu on click
document.querySelector('.nav-toggle').addEventListener('click', function () {
    document.querySelector('.nav-links').classList.toggle('active');
});

// 🖼️ Image Zoom Modal for Gallery
document.querySelectorAll('.gallery-grid img').forEach(img => {
  img.addEventListener('click', (e) => {
    e.preventDefault(); // prevent <a href=""> from triggering
    showImageModal(img.src, img.alt);
  });
});

function showImageModal(src, altText = '') {
  const overlay = document.createElement('div');
  overlay.classList.add('image-modal-overlay');

  const image = document.createElement('img');
  image.src = src;
  image.alt = altText;
  image.className = 'image-modal-img';

  const closeBtn = document.createElement('span');
  closeBtn.innerHTML = '&times;';
  closeBtn.className = 'image-modal-close';

  // Remove modal on click
  overlay.addEventListener('click', () => overlay.remove());
  closeBtn.addEventListener('click', () => overlay.remove());

  overlay.appendChild(image);
  overlay.appendChild(closeBtn);
  document.body.appendChild(overlay);
}