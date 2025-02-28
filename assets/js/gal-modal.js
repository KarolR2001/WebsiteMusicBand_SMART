// Aktualizacja zawartości modala po kliknięciu w miniaturkę
document.querySelectorAll('[data-bs-toggle="modal"]').forEach(item => {
    item.addEventListener('click', event => {
      const targetImage = document.getElementById('modalImage');
      const imageSrc = event.target.getAttribute('data-image-src');
      targetImage.setAttribute('src', imageSrc);
    });
  });