class ImageOptimizer {
    constructor() {
        this.observer = null;
        this.loadedImages = 0;
        this.totalImages = 0;
        this.initIntersectionObserver();
    }

    initIntersectionObserver() {
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    this.loadImage(img);
                    this.observer.unobserve(img);
                }
            });
        }, {
            rootMargin: '50px 0px',
            threshold: 0.1
        });
    }

    async loadImage(img) {
        if (!img.dataset.src) return;
        
        try {
            await this.loadImageWithProgress(img);
            img.classList.add('loaded');
        } catch (error) {
            console.error('Error loading image:', error);
            img.classList.add('error');
        }
    }

    loadImageWithProgress(img) {
        return new Promise((resolve, reject) => {
            img.onload = () => {
                this.updateLoadingProgress();
                resolve();
            };
            img.onerror = reject;
            img.src = img.dataset.src;
        });
    }

    updateLoadingProgress() {
        this.loadedImages++;
        const progress = (this.loadedImages / this.totalImages) * 100;
        const progressBar = document.getElementById('loadingProgress');
        
        if (progressBar) {
            progressBar.style.width = `${progress}%`;
            if (progress >= 100) {
                setTimeout(() => {
                    progressBar.style.opacity = '0';
                }, 500);
            }
        }
    }

    observe(img) {
        if (img.dataset.src) {
            this.totalImages++;
            this.observer.observe(img);
        }
    }
}

// Eksportuj klasę
window.ImageOptimizer = ImageOptimizer;