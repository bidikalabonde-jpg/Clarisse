let currentIndex = 0;
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

// Elementos do DOM
const messageText = document.getElementById('messageText');
const messageIcon = document.querySelector('.message-icon');
const currentIndexSpan = document.getElementById('currentIndex');
const totalMessagesSpan = document.getElementById('totalMessages');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
const randomButton = document.getElementById('randomButton');
const favoriteButton = document.getElementById('favoriteButton');
const floatingParticles = document.getElementById('floatingParticles');

// Atualiza o total de mensagens
totalMessagesSpan.textContent = allMessages.length;

// Emojis para o ícone da mensagem
const messageEmojis = ['💕', '💖', '💗', '💝', '💞', '💓', '💘', '💟', '🌸', '🌺', '🌷', '🌹', '🌻', '🌼', '✨', '⭐', '🌟', '💫', '🦄', '🐰', '🐱', '🐶', '🐻', '🐼', '💐', '🎀', '🎁', '🎂', '🍰', '🧁', '🍭', '🍬', '🍫', '🍪', '🍩', '🥰', '😊', '😍', '🥺', '😘', '😗', '😙', '😚', '☺️', '🤗', '🤩', '😻', '💋', '👄', '💋', '🌙', '☀️', '🌈', '🦋', '🌺'];

// Cria partículas flutuantes no fundo
function createFloatingParticles() {
    const emojis = ['💕', '✨', '🌸', '💖', '⭐', '🌟', '💫', '🦄', '💐', '🎀'];
    
    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.textContent = emojis[Math.floor(Math.random() * emojis.length)];
            particle.style.left = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 15 + 's';
            particle.style.animationDuration = (10 + Math.random() * 10) + 's';
            floatingParticles.appendChild(particle);
            
            setTimeout(() => {
                particle.remove();
            }, 25000);
        }, i * 1000);
    }
    
    // Recria partículas continuamente
    setInterval(() => {
        if (floatingParticles.children.length < 15) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.textContent = emojis[Math.floor(Math.random() * emojis.length)];
            particle.style.left = Math.random() * 100 + '%';
            particle.style.animationDelay = '0s';
            particle.style.animationDuration = (10 + Math.random() * 10) + 's';
            floatingParticles.appendChild(particle);
            
            setTimeout(() => {
                particle.remove();
            }, 25000);
        }
    }, 2000);
}

// Efeito de partículas ao mudar mensagem
function createParticles() {
    const rect = messageText.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    
    const emojis = ['💕', '✨', '🌸', '💖', '⭐', '🌟', '💫'];
    
    for (let i = 0; i < 5; i++) {
        const particle = document.createElement('div');
        particle.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        particle.style.position = 'fixed';
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        particle.style.fontSize = '20px';
        particle.style.pointerEvents = 'none';
        particle.style.zIndex = '9999';
        const randomX = (Math.random() * 100 - 50);
        const randomY = (Math.random() * 100 - 50);
        particle.style.animation = `particleFloat ${1 + Math.random()}s ease-out forwards`;
        particle.style.setProperty('--random-x', randomX + 'px');
        particle.style.setProperty('--random-y', randomY + 'px');
        
        document.body.appendChild(particle);
        
        setTimeout(() => {
            particle.remove();
        }, 1000);
    }
}

// Função para atualizar ícone da mensagem
function updateMessageIcon() {
    const randomEmoji = messageEmojis[Math.floor(Math.random() * messageEmojis.length)];
    messageIcon.textContent = randomEmoji;
}

// Função para atualizar botão de favorito
function updateFavoriteButton() {
    if (favorites.includes(currentIndex)) {
        favoriteButton.classList.add('active');
        favoriteButton.title = 'Remover dos favoritos';
    } else {
        favoriteButton.classList.remove('active');
        favoriteButton.title = 'Adicionar aos favoritos';
    }
}

// Função para exibir mensagem
function displayMessage(index, updateHash = true) {
    if (index < 0 || index >= allMessages.length) {
        return;
    }
    
    currentIndex = index;
    messageText.textContent = allMessages[currentIndex];
    currentIndexSpan.textContent = currentIndex + 1;
    
    // Atualiza ícone
    updateMessageIcon();
    
    // Atualiza estado dos botões
    prevButton.disabled = currentIndex === 0;
    nextButton.disabled = currentIndex === allMessages.length - 1;
    updateFavoriteButton();
    
    // Adiciona animação
    messageText.style.animation = 'none';
    setTimeout(() => {
        messageText.style.animation = 'fadeIn 0.5s ease-in';
    }, 10);
    
    // Adiciona partículas
    createParticles();
    
    // Atualiza hash se necessário
    if (updateHash) {
        window.location.hash = index;
    }
}

// Event listeners
prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        displayMessage(currentIndex - 1);
    }
});

nextButton.addEventListener('click', () => {
    if (currentIndex < allMessages.length - 1) {
        displayMessage(currentIndex + 1);
    }
});

// Botão de mensagem aleatória
randomButton.addEventListener('click', () => {
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * allMessages.length);
    } while (randomIndex === currentIndex && allMessages.length > 1);
    
    displayMessage(randomIndex);
});

// Botão de favoritar
favoriteButton.addEventListener('click', () => {
    if (favorites.includes(currentIndex)) {
        favorites = favorites.filter(fav => fav !== currentIndex);
        favoriteButton.classList.remove('active');
        favoriteButton.title = 'Adicionar aos favoritos';
    } else {
        favorites.push(currentIndex);
        favoriteButton.classList.add('active');
        favoriteButton.title = 'Remover dos favoritos';
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
});

// Navegação com teclado
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft' && currentIndex > 0) {
        displayMessage(currentIndex - 1);
    } else if (e.key === 'ArrowRight' && currentIndex < allMessages.length - 1) {
        displayMessage(currentIndex + 1);
    } else if (e.key === 'r' || e.key === 'R') {
        randomButton.click();
    } else if (e.key === 'f' || e.key === 'F') {
        favoriteButton.click();
    }
});

// Adiciona animação CSS para partículas
const style = document.createElement('style');
style.textContent = `
    @keyframes particleFloat {
        0% {
            opacity: 1;
            transform: translate(0, 0) scale(1) rotate(0deg);
        }
        100% {
            opacity: 0;
            transform: translate(calc(var(--random-x, 0)), calc(var(--random-y, 0))) scale(0) rotate(360deg);
        }
    }
`;
document.head.appendChild(style);

// Verifica se há hash na URL (para navegação de favoritos)
function checkHash() {
    const hash = window.location.hash;
    if (hash) {
        const index = parseInt(hash.substring(1));
        if (!isNaN(index) && index >= 0 && index < allMessages.length) {
            displayMessage(index, false);
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        }
    }
    displayMessage(0, false);
}

// Inicializa
checkHash();

// Inicia partículas flutuantes
createFloatingParticles();
