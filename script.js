// Elementy DOM
const startPage = document.getElementById('start-page');
const intruderPage = document.getElementById('intruder-page');
const mainPage = document.getElementById('main-page');
const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const clickMeBtn = document.getElementById('click-me');
const openGiftBtn = document.getElementById('open-gift');
const bgMusic = document.getElementById('bg-music');
const scarySound = document.getElementById('scary-sound');
const confettiContainer = document.querySelector('.confetti-container');

// Ustawienie głośności muzyki w tle
bgMusic.volume = 0.1; // 10% głośności

// Odtwórz muzykę na stronie startowej
bgMusic.play();

// Obsługa przycisków na stronie startowej
yesBtn.addEventListener('click', function() {
    // Zatrzymaj muzykę ze strony startowej
    const bgMusic = document.getElementById('bg-music');
    bgMusic.pause();
    bgMusic.currentTime = 0;

    // Przejdź do strony głównej
    document.getElementById('start-page').classList.remove('active');
    document.getElementById('main-page').classList.add('active');

    // Odtwórz muzykę na stronie głównej
    bgMusic.play();
});

noBtn.addEventListener('click', function() {
    // Zatrzymaj muzykę ze strony startowej
    const bgMusic = document.getElementById('bg-music');
    bgMusic.pause();
    bgMusic.currentTime = 0;

    // Przejdź do strony dla intruzów
    document.getElementById('start-page').classList.remove('active');
    document.getElementById('intruder-page').classList.add('active');

    // Odtwórz straszny dźwięk
    const scarySound = document.getElementById('scary-sound');
    scarySound.play();
});

// Obsługa przycisków na stronie głównej
clickMeBtn.addEventListener('click', function() {
    // Usuń poprzednią wiadomość, jeśli istnieje
    const oldMessage = document.querySelector('.message');
    if (oldMessage) {
        oldMessage.remove();
    }

    // Utwórz nową wiadomość
    const message = document.createElement('div');
    message.className = 'message';
    message.textContent = 'Sabincia jesteś wpaniała malutką istotką i kochamy cie ponad wszystko!!';
    document.body.appendChild(message);

    // Usuń wiadomość po 5 sekundach
    setTimeout(() => {
        message.remove();
    }, 5000);

    // Dodaj efekt confetti
    createConfetti();
});

// Zmienna do przechowywania interwału serduszek
let heartsInterval;

// Funkcja do ciągłego tworzenia serduszek
function createContinuousHearts() {
    // Zatrzymaj poprzedni interwał, jeśli istnieje
    if (heartsInterval) {
        clearInterval(heartsInterval);
    }
    
    // Ustaw nowy interwał
    heartsInterval = setInterval(() => {
        createHearts();
    }, 1000);
}

// Funkcja do zatrzymywania serduszek
function stopHearts() {
    if (heartsInterval) {
        clearInterval(heartsInterval);
        heartsInterval = null;
    }
}

// Obsługa przycisku "Otwórz prezent"
document.getElementById('open-gift').addEventListener('click', function() {
    // Zatrzymaj muzykę z poprzedniej strony
    const bgMusic = document.getElementById('bg-music');
    bgMusic.pause();
    bgMusic.currentTime = 0;

    // Przejdź do strony z prezentem
    document.getElementById('main-page').classList.remove('active');
    document.getElementById('gift-page').classList.add('active');

    // Odtwórz nową muzykę
    const giftMusic = document.getElementById('gift-music');
    giftMusic.play();

    // Rozpocznij ciągłe tworzenie serduszek
    createContinuousHearts();
});

// Obsługa przycisku powrotu
document.getElementById('back-btn').addEventListener('click', function() {
    // Zatrzymaj muzykę z prezentu
    const giftMusic = document.getElementById('gift-music');
    giftMusic.pause();
    giftMusic.currentTime = 0;

    // Zatrzymaj tworzenie serduszek
    stopHearts();

    // Wróć do strony z życzeniami
    document.getElementById('gift-page').classList.remove('active');
    document.getElementById('main-page').classList.add('active');

    // Odtwórz muzykę z głównej strony
    const bgMusic = document.getElementById('bg-music');
    bgMusic.play();
});

// Obsługa przycisku powrotu na stronie dla intruzów
document.getElementById('scary-back-btn').addEventListener('click', function() {
    // Zatrzymaj straszny dźwięk
    const scarySound = document.getElementById('scary-sound');
    scarySound.pause();
    scarySound.currentTime = 0;

    // Wróć do strony startowej
    document.getElementById('intruder-page').classList.remove('active');
    document.getElementById('start-page').classList.add('active');

    // Odtwórz muzykę ze strony startowej
    const bgMusic = document.getElementById('bg-music');
    bgMusic.play();
});

// Obsługa przycisku powrotu na stronie z życzeniami
document.getElementById('main-back-btn').addEventListener('click', function() {
    // Zatrzymaj muzykę z głównej strony
    const bgMusic = document.getElementById('bg-music');
    bgMusic.pause();
    bgMusic.currentTime = 0;

    // Wróć do strony startowej
    document.getElementById('main-page').classList.remove('active');
    document.getElementById('start-page').classList.add('active');

    // Odtwórz muzykę ze strony startowej
    bgMusic.play();
});

// Funkcje pomocnicze
function showMessage(message) {
    const messageDiv = document.createElement('div');
    messageDiv.textContent = message;
    messageDiv.style.position = 'fixed';
    messageDiv.style.top = '50%';
    messageDiv.style.left = '50%';
    messageDiv.style.transform = 'translate(-50%, -50%)';
    messageDiv.style.background = 'rgba(255, 255, 255, 0.9)';
    messageDiv.style.padding = '20px';
    messageDiv.style.borderRadius = '10px';
    messageDiv.style.zIndex = '1000';
    document.body.appendChild(messageDiv);
    
    setTimeout(() => {
        messageDiv.remove();
    }, 3000);
}

function createHearts() {
    const colors = ['❤️', '💖', '💙']; // czerwone, różowe i niebieskie serduszka
    for (let i = 0; i < 60; i++) { // 3 razy więcej serduszek (20 * 3)
        const heart = document.createElement('div');
        heart.innerHTML = colors[Math.floor(Math.random() * colors.length)]; // losowy kolor serduszka
        heart.style.position = 'absolute';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.top = '100vh';
        heart.style.fontSize = '2rem';
        heart.style.animation = `floatUp ${2 + Math.random() * 2}s linear forwards`;
        document.body.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 4000);
    }
}

function createConfetti() {
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        confetti.style.animationDuration = (2 + Math.random() * 3) + 's';
        confettiContainer.appendChild(confetti);
        
        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }
}

function showGiftAnimation() {
    const gift = document.createElement('div');
    gift.innerHTML = 'Kochamy Cię';
    gift.style.position = 'fixed';
    gift.style.top = '50%';
    gift.style.left = '50%';
    gift.style.transform = 'translate(-50%, -50%)';
    gift.style.fontSize = '4rem';
    gift.style.color = '#ff69b4';
    gift.style.textShadow = '2px 2px 4px rgba(0, 0, 0, 0.2)';
    gift.style.fontWeight = 'bold';
    gift.style.animation = 'bounce 0.5s infinite';
    document.body.appendChild(gift);
    
    setTimeout(() => {
        gift.remove();
    }, 3000);
}

// Dodaj style do head
const style = document.createElement('style');
style.textContent = `
    @keyframes floatUp {
        0% { transform: translateY(0) rotate(0deg); }
        100% { transform: translateY(-100vh) rotate(360deg); }
    }
`;
document.head.appendChild(style); 