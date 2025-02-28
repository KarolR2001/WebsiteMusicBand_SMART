const images = [
  { src: 'assets\\img\\Galeria\\1.jpg', alt: 'Zdjęcie 1.jpg' },
  { src: 'assets\\img\\Galeria\\2.jpg', alt: 'Zdjęcie 2.jpg' },
  { src: 'assets\\img\\Galeria\\3.jpg', alt: 'Zdjęcie 3.jpg' },
  { src: 'assets\\img\\Galeria\\4.jpg', alt: 'Zdjęcie 4.jpg' },
  { src: 'assets\\img\\Galeria\\5.jpg', alt: 'Zdjęcie 5.jpg' },
  { src: 'assets\\img\\Galeria\\6.jpg', alt: 'Zdjęcie 6.jpg' },
  { src: 'assets\\img\\Galeria\\7.jpg', alt: 'Zdjęcie 7.jpg' },
  { src: 'assets\\img\\Galeria\\8.jpg', alt: 'Zdjęcie 8.jpg' },
  { src: 'assets\\img\\Galeria\\9.jpg', alt: 'Zdjęcie 9.jpg' },
  {src: 'assets\\img\\Galeria\\biesiada1.jpg', alt: 'Zdjęcie biesiada1.jpg'},
  {
    src: 'assets\\img\\Galeria\\biesiada2.jpg',
    alt: 'Zdjęcie biesiada2.jpg'
  },
  {
    src: 'assets\\img\\Galeria\\damian.jpg',
    alt: 'Zdjęcie damian.jpg'
  },
  { src: 'assets\\img\\Galeria\\droga.jpg', alt: 'Zdjęcie droga.jpg' },
  {
    src: 'assets\\img\\Galeria\\DSC_1280.jpg',
    alt: 'Zdjęcie DSC_1280.jpg'
  },
  {
    src: 'assets\\img\\Galeria\\DSC_1283.jpg',
    alt: 'Zdjęcie DSC_1283.jpg'
  },
  {
    src: 'assets\\img\\Galeria\\DSC_1285.jpg',
    alt: 'Zdjęcie DSC_1285.jpg'
  },
  {
    src: 'assets\\img\\Galeria\\DSC_1290.jpg',
    alt: 'Zdjęcie DSC_1290.jpg'
  },
  {
    src: 'assets\\img\\Galeria\\DSC_1484.jpg',
    alt: 'Zdjęcie DSC_1484.jpg'
  },
  {
    src: 'assets\\img\\Galeria\\DSC_1490.jpg',
    alt: 'Zdjęcie DSC_1490.jpg'
  },
  {
    src: 'assets\\img\\Galeria\\DSC_1504.jpg',
    alt: 'Zdjęcie DSC_1504.jpg'
  },
  {
    src: 'assets\\img\\Galeria\\DSC_1514.jpg',
    alt: 'Zdjęcie DSC_1514.jpg'
  },
  {
    src: 'assets\\img\\Galeria\\DSC_1519.jpg',
    alt: 'Zdjęcie DSC_1519.jpg'
  },
  {
    src: 'assets\\img\\Galeria\\DSC_1535.jpg',
    alt: 'Zdjęcie DSC_1535.jpg'
  },
  {
    src: 'assets\\img\\Galeria\\DSC_1539.jpg',
    alt: 'Zdjęcie DSC_1539.jpg'
  },
  {
    src: 'assets\\img\\Galeria\\DSC_1545.jpg',
    alt: 'Zdjęcie DSC_1545.jpg'
  },
  {
    src: 'assets\\img\\Galeria\\DSC_1628.jpg',
    alt: 'Zdjęcie DSC_1628.jpg'
  },
  {
    src: 'assets\\img\\Galeria\\DSC_1632.jpg',
    alt: 'Zdjęcie DSC_1632.jpg'
  },
  {
    src: 'assets\\img\\Galeria\\DSC_1660.jpg',
    alt: 'Zdjęcie DSC_1660.jpg'
  },
  {
    src: 'assets\\img\\Galeria\\DSC_1666.jpg',
    alt: 'Zdjęcie DSC_1666.jpg'
  },
  {
    src: 'assets\\img\\Galeria\\DSC_1670.jpg',
    alt: 'Zdjęcie DSC_1670.jpg'
  },
  {
    src: 'assets\\img\\Galeria\\DSC_1675.jpg',
    alt: 'Zdjęcie DSC_1675.jpg'
  },
  {
    src: 'assets\\img\\Galeria\\DSC_1689.jpg',
    alt: 'Zdjęcie DSC_1689.jpg'
  },
  {
    src: 'assets\\img\\Galeria\\DSC_1710 2.jpg',
    alt: 'Zdjęcie DSC_1710 2.jpg'
  },
  {
    src: 'assets\\img\\Galeria\\DSC_1714 2.jpg',
    alt: 'Zdjęcie DSC_1714 2.jpg'
  },
  {
    src: 'assets\\img\\Galeria\\DSC_1749.jpg',
    alt: 'Zdjęcie DSC_1749.jpg'
  },
  {
    src: 'assets\\img\\Galeria\\DSC_1855.jpg',
    alt: 'Zdjęcie DSC_1855.jpg'
  },
  {
    src: 'assets\\img\\Galeria\\DSC_1939.jpg',
    alt: 'Zdjęcie DSC_1939.jpg'
  },
  {
    src: 'assets\\img\\Galeria\\DSC_1979.jpg',
    alt: 'Zdjęcie DSC_1979.jpg'
  },
  {
    src: 'assets\\img\\Galeria\\DSC_7699.jpg',
    alt: 'Zdjęcie DSC_7699.jpg'
  },
  {
    src: 'assets\\img\\Galeria\\DSC_7709.jpg',
    alt: 'Zdjęcie DSC_7709.jpg'
  },
  {
    src: 'assets\\img\\Galeria\\DSC_7725.jpg',
    alt: 'Zdjęcie DSC_7725.jpg'
  },
  {
    src: 'assets\\img\\Galeria\\DSC_7745.jpg',
    alt: 'Zdjęcie DSC_7745.jpg'
  },
  {
    src: 'assets\\img\\Galeria\\DSC_8131.jpg',
    alt: 'Zdjęcie DSC_8131.jpg'
  },
  {
    src: 'assets\\img\\Galeria\\DSC_8290.jpg',
    alt: 'Zdjęcie DSC_8290.jpg'
  },
  {
    src: 'assets\\img\\Galeria\\DSC_8292.jpg',
    alt: 'Zdjęcie DSC_8292.jpg'
  },
  {
    src: 'assets\\img\\Galeria\\DSC_8295.jpg',
    alt: 'Zdjęcie DSC_8295.jpg'
  },
  {
    src: 'assets\\img\\Galeria\\DSC_8361.jpg',
    alt: 'Zdjęcie DSC_8361.jpg'
  },
  {
    src: 'assets\\img\\Galeria\\DSC_8434.jpg',
    alt: 'Zdjęcie DSC_8434.jpg'
  },
  {
    src: 'assets\\img\\Galeria\\DSC_8454.jpg',
    alt: 'Zdjęcie DSC_8454.jpg'
  },
  {
    src: 'assets\\img\\Galeria\\DSC_8460.jpg',
    alt: 'Zdjęcie DSC_8460.jpg'
  },
  {
    src: 'assets\\img\\Galeria\\DSC_9810.jpg',
    alt: 'Zdjęcie DSC_9810.jpg'
  },
  {
    src: 'assets\\img\\Galeria\\DSC_9819.jpg',
    alt: 'Zdjęcie DSC_9819.jpg'
  },
  {
    src: 'assets\\img\\Galeria\\DSC_9828.jpg',
    alt: 'Zdjęcie DSC_9828.jpg'
  },
  {
    src: 'assets\\img\\Galeria\\DSC_9835.jpg',
    alt: 'Zdjęcie DSC_9835.jpg'
  },
  {
    src: 'assets\\img\\Galeria\\DSC_9843.jpg',
    alt: 'Zdjęcie DSC_9843.jpg'
  },
  { src: 'assets\\img\\Galeria\\jacek.jpg', alt: 'Zdjęcie jacek.jpg' },
  { src: 'assets\\img\\Galeria\\sala.jpg', alt: 'Zdjęcie sala.jpg' },
  { src: 'assets\\img\\Galeria\\szare.jpg', alt: 'Zdjęcie szare.jpg' }
];

// Funkcja do przetasowywania tablicy
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Funkcja do generowania elementu <img> i dodawania go do określonej kolumny
function addImageToColumn(columnId, image) {
  const column = document.getElementById(columnId);
  const imageElement = document.createElement('img');
  imageElement.src = image.src;
  imageElement.alt = image.alt;
  imageElement.className = "w-100 shadow-1-strong rounded mb-4 zdjecie";
  imageElement.setAttribute('data-bs-toggle', 'modal');
  imageElement.setAttribute('data-bs-target', '#imageModal');
  imageElement.setAttribute('data-image-src', image.src);

  if (columnId === 'column1') {
    imageElement.setAttribute('data-aos', 'fade-right');
    imageElement.setAttribute('data-aos-duration', '1350');
  } else if (columnId === 'column2') {
    imageElement.setAttribute('data-aos', 'fade-up');
    imageElement.setAttribute('data-aos-duration', '1300');
  } else if (columnId === 'column3') {
    imageElement.setAttribute('data-aos', 'fade-left');
    imageElement.setAttribute('data-aos-duration', '1350');
  }

  column.appendChild(imageElement);
}

// Liczba kolumn
const numColumns = 3;

// Przetasuj tablicę images przed iteracją
shuffleArray(images);

// Liczba zdjęć w każdej kolumnie
const imagesPerColumn = Math.ceil(images.length / numColumns);

// Inicjalizacja tablic do śledzenia liczby dodanych zdjęć w każdej kolumnie
const imagesInColumns = Array.from({ length: numColumns }, () => 0);

// Iteruj przez przetasowaną tablicę obiektów i dodawaj zdjęcia do odpowiednich kolumn
images.forEach((image) => {
  const orientation = getImageOrientation(image.src);

  // Szukaj kolumny z najmniejszą liczbą dodanych zdjęć
  const columnIndex = imagesInColumns.indexOf(Math.min(...imagesInColumns));

  // Sprawdź orientację i dodaj do kolumny z odpowiednią proporcją
  if (orientation === 'horizontal' && imagesInColumns[columnIndex] < imagesPerColumn * 2) {
    addImageToColumn(`column${columnIndex + 1}`, image);
    imagesInColumns[columnIndex] += 2;
  } else if (orientation === 'vertical' && imagesInColumns[columnIndex] < imagesPerColumn) {
    addImageToColumn(`column${columnIndex + 1}`, image);
    imagesInColumns[columnIndex]++;
  }
});

// Funkcja do sprawdzania orientacji zdjęcia
function getImageOrientation(imageSrc) {
  const img = new Image();
  img.src = imageSrc;

  return img.width > img.height ? 'horizontal' : 'vertical';
}

document.addEventListener('DOMContentLoaded', function () {
  const modalImage = document.getElementById('modalImage');
  const imageModal = new bootstrap.Modal(document.getElementById('imageModal'));

  let currentImageIndex = 0;

  // Funkcja do ustawiania zdjęcia w modalu
  function setImage(src, alt) {
    modalImage.src = src;
    modalImage.alt = alt;
  }

  // Funkcja do obsługi przycisku Następne
  function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    const nextImage = images[currentImageIndex];
    setImage(nextImage.src, nextImage.alt);
  }

  // Funkcja do obsługi przycisku Poprzednie
  function showPreviousImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    const previousImage = images[currentImageIndex];
    setImage(previousImage.src, previousImage.alt);
  }

  // Obsługa kliknięcia na miniaturę zdjęcia
  document.body.addEventListener('click', function (event) {
    if (event.target.classList.contains('zdjecie')) {
      const clickedImage = event.target;
      const imageSrc = clickedImage.getAttribute('data-image-src');
      const imageAlt = clickedImage.alt;

      currentImageIndex = images.findIndex(image => image.src === imageSrc);

      setImage(imageSrc, imageAlt);

      // Otwórz modal
      imageModal.show();
    }
  });

  // Obsługa przycisków Następne i Poprzednie w modalu
  document.getElementById('nextButton').addEventListener('click', showNextImage);
  document.getElementById('previousButton').addEventListener('click', showPreviousImage);

  // Obsługa zamknięcia modala
  document.getElementById('imageModal').addEventListener('hidden.bs.modal', function () {
    // Wyczyść zdjęcie po zamknięciu modala
    setImage('', '');
  });
});