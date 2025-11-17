// Script para gerenciar imagens de fundo em todas as páginas

// Imagens padrão
var defaultBackgroundImages = [
    { url: '1.png', name: 'Foto Especial #1' },
    { url: 'Screenshot_1.png', name: 'Foto Especial #2' },
    { url: 'Screenshot_2.png', name: 'Foto Especial #3' }
];

// Carrega imagens do localStorage ou usa as padrão
function loadBackgroundImages() {
    const saved = localStorage.getItem('backgroundImages');
    if (saved) {
        try {
            return JSON.parse(saved);
        } catch (e) {
            return defaultBackgroundImages;
        }
    }
    return defaultBackgroundImages;
}

// Aplica as imagens de fundo na página
function applyBackgroundImages() {
    const images = loadBackgroundImages();
    const backgroundContainer = document.querySelector('.background-container');
    
    if (!backgroundContainer) return;
    
    // Remove imagens antigas (exceto overlay)
    const existingImages = backgroundContainer.querySelectorAll('.bg-image');
    existingImages.forEach(img => img.remove());
    
    // Adiciona até 3 imagens (as primeiras 3)
    const imagesToShow = images.slice(0, 3);
    
    imagesToShow.forEach((img, index) => {
        const bgImage = document.createElement('div');
        bgImage.className = `bg-image bg-${index + 1}`;
        bgImage.style.backgroundImage = `url('${img.url}')`;
        bgImage.style.animationDelay = `${index * 7}s`;
        
        // Adiciona antes do overlay
        const overlay = backgroundContainer.querySelector('.overlay');
        if (overlay) {
            backgroundContainer.insertBefore(bgImage, overlay);
        } else {
            backgroundContainer.appendChild(bgImage);
        }
    });
}

// Aplica quando a página carregar
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applyBackgroundImages);
} else {
    applyBackgroundImages();
}

