const images = [
    { src: 'assets/img/Galeria/DSC_1280.jpg', alt: 'Zespół SMART w akcji' },
    { src: 'assets/img/Galeria/DSC_1283.jpg', alt: 'Występ zespołu SMART' },
    { src: 'assets\\img\\Galeria\\1.jpg', alt: 'Zdjęcie 1.jpg' },
    { src: 'assets\\img\\Galeria\\2.jpg', alt: 'Zdjęcie 2.jpg' },
    { src: 'assets\\img\\Galeria\\3.jpg', alt: 'Zdjęcie 3.jpg' },
    { src: 'assets\\img\\Galeria\\4.jpg', alt: 'Zdjęcie 4.jpg' },
    { src: 'assets\\img\\Galeria\\5.jpg', alt: 'Zdjęcie 5.jpg' },
    { src: 'assets\\img\\Galeria\\6.jpg', alt: 'Zdjęcie 6.jpg' },
    { src: 'assets\\img\\Galeria\\7.jpg', alt: 'Zdjęcie 7.jpg' },
    { src: 'assets\\img\\Galeria\\8.jpg', alt: 'Zdjęcie 8.jpg' },
    { src: 'assets\\img\\Galeria\\9.jpg', alt: 'Zdjęcie 9.jpg' },
    { src: 'assets\\img\\Galeria\\biesiada1.jpg', alt: 'Zdjęcie biesiada1.jpg' },
    { src: 'assets\\img\\Galeria\\biesiada2.jpg', alt: 'Zdjęcie biesiada2.jpg' },
    { src: 'assets\\img\\Galeria\\damian.jpg', alt: 'Zdjęcie damian.jpg' },
    { src: 'assets\\img\\Galeria\\droga.jpg', alt: 'Zdjęcie droga.jpg' },
    { src: 'assets\\img\\Galeria\\DSC_1285.jpg', alt: 'Zdjęcie DSC_1285.jpg' },
    { src: 'assets\\img\\Galeria\\DSC_1290.jpg', alt: 'Zdjęcie DSC_1290.jpg' },
    { src: 'assets\\img\\Galeria\\DSC_1484.jpg', alt: 'Zdjęcie DSC_1484.jpg' },
    { src: 'assets\\img\\Galeria\\DSC_1490.jpg', alt: 'Zdjęcie DSC_1490.jpg' },
    { src: 'assets\\img\\Galeria\\DSC_1504.jpg', alt: 'Zdjęcie DSC_1504.jpg' },
    { src: 'assets\\img\\Galeria\\DSC_1514.jpg', alt: 'Zdjęcie DSC_1514.jpg' },
    { src: 'assets\\img\\Galeria\\DSC_1519.jpg', alt: 'Zdjęcie DSC_1519.jpg' },
    { src: 'assets\\img\\Galeria\\DSC_1535.jpg', alt: 'Zdjęcie DSC_1535.jpg' },
    { src: 'assets\\img\\Galeria\\DSC_1539.jpg', alt: 'Zdjęcie DSC_1539.jpg' },
    { src: 'assets\\img\\Galeria\\DSC_1545.jpg', alt: 'Zdjęcie DSC_1545.jpg' },
    { src: 'assets\\img\\Galeria\\DSC_1628.jpg', alt: 'Zdjęcie DSC_1628.jpg' },
    { src: 'assets\\img\\Galeria\\DSC_1632.jpg', alt: 'Zdjęcie DSC_1632.jpg' },
    { src: 'assets\\img\\Galeria\\DSC_1660.jpg', alt: 'Zdjęcie DSC_1660.jpg' },
    { src: 'assets\\img\\Galeria\\DSC_1666.jpg', alt: 'Zdjęcie DSC_1666.jpg' },
    { src: 'assets\\img\\Galeria\\DSC_1670.jpg', alt: 'Zdjęcie DSC_1670.jpg' },
    { src: 'assets\\img\\Galeria\\DSC_1675.jpg', alt: 'Zdjęcie DSC_1675.jpg' },
    { src: 'assets\\img\\Galeria\\DSC_1689.jpg', alt: 'Zdjęcie DSC_1689.jpg' },
    { src: 'assets\\img\\Galeria\\DSC_1710 2.jpg', alt: 'Zdjęcie DSC_1710 2.jpg' },
    { src: 'assets\\img\\Galeria\\DSC_1714 2.jpg', alt: 'Zdjęcie DSC_1714 2.jpg' },
    { src: 'assets\\img\\Galeria\\DSC_1749.jpg', alt: 'Zdjęcie DSC_1749.jpg' },
    { src: 'assets\\img\\Galeria\\DSC_1855.jpg', alt: 'Zdjęcie DSC_1855.jpg' },
    { src: 'assets\\img\\Galeria\\DSC_1939.jpg', alt: 'Zdjęcie DSC_1939.jpg' },
    { src: 'assets\\img\\Galeria\\DSC_1979.jpg', alt: 'Zdjęcie DSC_1979.jpg' },
    { src: 'assets\\img\\Galeria\\DSC_7699.jpg', alt: 'Zdjęcie DSC_7699.jpg' },
    { src: 'assets\\img\\Galeria\\DSC_7709.jpg', alt: 'Zdjęcie DSC_7709.jpg' },
    { src: 'assets\\img\\Galeria\\DSC_7725.jpg', alt: 'Zdjęcie DSC_7725.jpg' },
    { src: 'assets\\img\\Galeria\\DSC_7745.jpg', alt: 'Zdjęcie DSC_7745.jpg' },
    { src: 'assets\\img\\Galeria\\DSC_8131.jpg', alt: 'Zdjęcie DSC_8131.jpg' },
    { src: 'assets\\img\\Galeria\\DSC_8290.jpg', alt: 'Zdjęcie DSC_8290.jpg' },
    { src: 'assets\\img\\Galeria\\DSC_8292.jpg', alt: 'Zdjęcie DSC_8292.jpg' },
    { src: 'assets\\img\\Galeria\\DSC_8295.jpg', alt: 'Zdjęcie DSC_8295.jpg' },
    { src: 'assets\\img\\Galeria\\DSC_8361.jpg', alt: 'Zdjęcie DSC_8361.jpg' },
    { src: 'assets\\img\\Galeria\\DSC_8434.jpg', alt: 'Zdjęcie DSC_8434.jpg' },
    { src: 'assets\\img\\Galeria\\DSC_8454.jpg', alt: 'Zdjęcie DSC_8454.jpg' },
    { src: 'assets\\img\\Galeria\\DSC_8460.jpg', alt: 'Zdjęcie DSC_8460.jpg' },
    { src: 'assets\\img\\Galeria\\DSC_9810.jpg', alt: 'Zdjęcie DSC_9810.jpg' },
    { src: 'assets\\img\\Galeria\\DSC_9819.jpg', alt: 'Zdjęcie DSC_9819.jpg' },
    { src: 'assets\\img\\Galeria\\DSC_9828.jpg', alt: 'Zdjęcie DSC_9828.jpg' },
    { src: 'assets\\img\\Galeria\\DSC_9835.jpg', alt: 'Zdjęcie DSC_9835.jpg' },
    { src: 'assets\\img\\Galeria\\DSC_9843.jpg', alt: 'Zdjęcie DSC_9843.jpg' },
    { src: 'assets\\img\\Galeria\\PS_0129_Original.jpeg', alt: 'PS_0129_Original.jpeg' },
    { src: 'assets\\img\\Galeria\\PS_0130_Original.jpeg', alt: 'PS_0130_Original.jpeg' },
    { src: 'assets\\img\\Galeria\\PS_0131_Original.jpeg', alt: 'PS_0131_Original.jpeg' },
    { src: 'assets\\img\\Galeria\\PS_0133_Original.jpeg', alt: 'PS_0133_Original.jpeg' },
    { src: 'assets\\img\\Galeria\\PS_0134_Original.jpeg', alt: 'PS_0134_Original.jpeg' },
    { src: 'assets\\img\\Galeria\\PS_0178_Original.jpeg', alt: 'PS_0178_Original.jpeg' },
    { src: 'assets\\img\\Galeria\\PS_0383_Original.jpeg', alt: 'PS_0383_Original.jpeg' },
    { src: 'assets\\img\\Galeria\\PS_0392_Original.jpeg', alt: 'PS_0392_Original.jpeg' },
    { src: 'assets\\img\\Galeria\\PS_0467_Original.jpeg', alt: 'PS_0467_Original.jpeg' },
    { src: 'assets\\img\\Galeria\\PS_0781_Original.jpeg', alt: 'PS_0781_Original.jpeg' },
    { src: 'assets\\img\\Galeria\\PS_0782_Original.jpeg', alt: 'PS_0782_Original.jpeg' },
    { src: 'assets\\img\\Galeria\\PS_0811_Original.jpeg', alt: 'PS_0811_Original.jpeg' },
    { src: 'assets\\img\\Galeria\\PS_0812_Original.jpeg', alt: 'PS_0812_Original.jpeg' },
    { src: 'assets\\img\\Galeria\\PS_0813_Original.jpeg', alt: 'PS_0813_Original.jpeg' },
    { src: 'assets\\img\\Galeria\\PS_0938_Original.jpeg', alt: 'PS_0938_Original.jpeg' },
    { src: 'assets\\img\\Galeria\\PS_0939_Original.jpeg', alt: 'PS_0939_Original.jpeg' },
    { src: 'assets\\img\\Galeria\\jacek.jpg', alt: 'Zdjęcie jacek.jpg' },
    { src: 'assets\\img\\Galeria\\fot. A (153).jpg', alt: 'fot. A (153).jpg' },
    { src: 'assets\\img\\Galeria\\fot. A (154).jpg', alt: 'fot. A (153).jpg' },
    { src: 'assets\\img\\Galeria\\fot. A (156).jpg', alt: 'fot. A (153).jpg' },
    { src: 'assets\\img\\Galeria\\fot. A (241).jpg', alt: 'fot. A (153).jpg' },
    { src: 'assets\\img\\Galeria\\fot. A (257).jpg', alt: 'fot. A (153).jpg' },
    { src: 'assets\\img\\Galeria\\fot. A (100).jpg', alt: 'fot. A (153).jpg' },
    { src: 'assets\\img\\Galeria\\sala.jpg', alt: 'Zdjęcie sala.jpg' },
    { src: 'assets\\img\\Galeria\\szare.jpg', alt: 'Zdjęcie szare.jpg' }
];

document.addEventListener('DOMContentLoaded', function() {
    const imageOptimizer = new ImageOptimizer();
    const imagesPerColumn = Math.ceil(images.length / 3);
    
    // Dystrybuuj zdjęcia do kolumn
    images.forEach((image, index) => {
        const columnNumber = Math.floor(index / imagesPerColumn) + 1;
        const column = document.getElementById(`column${columnNumber}`);
        
        if (column) {
            const container = document.createElement('a');
            container.href = image.src;
            container.className = 'gallery-item';
            
            const img = document.createElement('img');
            img.src = image.src;
            img.alt = image.alt;
            img.loading = 'lazy';
            
            container.appendChild(img);
            column.appendChild(container);
            
            // Zoptymalizuj ładowanie obrazu
            imageOptimizer.observe(img);
        }
    });

    // Inicjalizacja lightbox
    new SimpleLightbox('.gallery-item', {
        captionsData: 'alt',
        captionPosition: 'bottom',
        enableKeyboard: true,
        showCounter: true,
        closeText: '×',
        navText: ['←','→']
    });
});