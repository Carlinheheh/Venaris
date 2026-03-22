// Narrativa de introdução
const introductionText = `
Histórias Esquecidas... Planetas Inexplorados...
Deuses Enterrados... Civilizações Alienígena...
O espaço pode parecer assustador para alguns, mas para outros é um belo e lindo desconhecido, 
e aqueles atraídos por esse desconhecido, são chamados de:
`;

// Configurações de timing (em milisegundos)
const INTRO_DISPLAY_TIME = 5000; // Introdução fica visível por 8 segundos
const TYPEWRITER_SPEED = 100; // Velocidade de digitação (ms por caractere)
const TITLE_SCREEN_DURATION = 5000; // Tela de título fica por 5 segundos

// AudioContext global
let audioContext = null;
let canSkipIntro = false;

// Função para inicializar AudioContext na primeira interação
function initAudioContext() {
    if (!audioContext) {
        try {
            const AudioContextClass = window.AudioContext || window.webkitAudioContext;
            audioContext = new AudioContextClass();
            console.log('AudioContext inicializado');
        } catch (e) {
            console.log('AudioContext não disponível:', e);
        }
    }
}

// Função para reproduzir som realista de teclado
function playTypingSound() {
    if (!audioContext) {
        initAudioContext();
    }
    
    if (!audioContext) return;
    
    try {
        const now = audioContext.currentTime;
        const duration = 0.08; // 80ms de duração
        
        // Som principal (mais agudo) - simula o click da tecla
        const osc1 = audioContext.createOscillator();
        const gain1 = audioContext.createGain();
        osc1.connect(gain1);
        gain1.connect(audioContext.destination);
        
        osc1.frequency.setValueAtTime(800 + Math.random() * 400, now);
        osc1.frequency.exponentialRampToValueAtTime(200, now + duration);
        osc1.type = 'sine';
        gain1.gain.setValueAtTime(0.1, now);
        gain1.gain.exponentialRampToValueAtTime(0.01, now + duration);
        
        // Som secundário (mais grave) - add profundidade
        const osc2 = audioContext.createOscillator();
        const gain2 = audioContext.createGain();
        osc2.connect(gain2);
        gain2.connect(audioContext.destination);
        
        osc2.frequency.setValueAtTime(300 + Math.random() * 100, now);
        osc2.frequency.exponentialRampToValueAtTime(80, now + duration);
        osc2.type = 'triangle';
        gain2.gain.setValueAtTime(0.08, now);
        gain2.gain.exponentialRampToValueAtTime(0.005, now + duration);
        
        osc1.start(now);
        osc1.stop(now + duration);
        osc2.start(now);
        osc2.stop(now + duration);
    } catch (e) {
        console.log('Erro ao reproduzir som:', e);
    }
}

// Função para pular a introdução
function skipIntroduction() {
    if (canSkipIntro) {
        const introScreen = document.getElementById('introduction-screen');
        const introText = document.getElementById('intro-text');
        
        // Mostra o texto completo
        introText.textContent = introductionText;
        
        // Passa direto para a tela de título após 500ms
        setTimeout(showTitleScreen, 500);
    }
}

// Função para exibir o texto com efeito de digitação
function typewriterEffect(element, text, speed, callback) {
    let index = 0;
    element.innerHTML = '';
    canSkipIntro = true;
    
    // Container para o texto
    const textSpan = document.createElement('span');
    element.appendChild(textSpan);

    function type() {
        if (index < text.length) {
            const char = text.charAt(index);
            
            // Adicionar o caractere antes do cursor
            if (char === '\n') {
                textSpan.appendChild(document.createElement('br'));
            } else {
                textSpan.appendChild(document.createTextNode(char));
            }
            
            index++;
            
            // Variar levemente a velocidade para parecer mais natural
            const naturalSpeed = speed + (Math.random() * 40 - 20);
            setTimeout(type, naturalSpeed);
        } else {
            if (callback) callback();
        }
    }

    // Pequeno atraso inicial para suavidade
    setTimeout(type, 1000);
}

// Função para mostrar a tela de introdução
function showIntroduction() {
    const introScreen = document.getElementById('introduction-screen');
    const introText = document.getElementById('intro-text');

    introScreen.classList.add('active');
    canSkipIntro = false; // Desativa pulo enquanto carrega
    
    // Inicializa AudioContext
    initAudioContext();

    // Usa efeito de digitação
    typewriterEffect(introText, introductionText, TYPEWRITER_SPEED, () => {
        // Após o texto terminar, aguarda um tempo antes de passar para a próxima tela
        setTimeout(showTitleScreen, 2000);
    });
}

// Função para mostrar a tela de título
function showTitleScreen() {
    const introScreen = document.getElementById('introduction-screen');
    const titleScreen = document.getElementById('title-screen');

    // Fade out da introdução
    introScreen.classList.add('fade-out');

    // Aguarda a animação de transição
    setTimeout(() => {
        introScreen.classList.remove('active');
        titleScreen.classList.add('active');

        // Após o tempo do título, transiciona para a tela inicial
        setTimeout(showHomeScreen, TITLE_SCREEN_DURATION);
    }, 500);
}

// Função para mostrar a tela inicial
function showHomeScreen() {
    const titleScreen = document.getElementById('title-screen');
    const homeScreen = document.getElementById('home-screen');

    titleScreen.classList.add('fade-out');

    setTimeout(() => {
        titleScreen.classList.remove('active');
        homeScreen.classList.add('active');
    }, 500);
}

// Função para voltar à tela inicial
function goToHome() {
    const currentScreen = document.querySelector('.screen.active');
    const homeScreen = document.getElementById('home-screen');

    if (currentScreen !== homeScreen) {
        currentScreen.classList.remove('active');
        homeScreen.classList.add('active');
    }
}

// Event listeners para os botões de menu
document.querySelectorAll('.menu-item a').forEach(link => {
    link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        
        if (href === '#sobre') {
            e.preventDefault();
            openAboutModal();
        } else if (href === '#jogar') {
            e.preventDefault();
            showCharacterSelection();
        } else {
            console.log('Clicado:', href);
            // Aqui você pode adicionar a lógica para navegar para as diferentes páginas
        }
    });
});

// Função para mostrar a tela de seleção
function showCharacterSelection() {
    document.querySelector('.screen.active').classList.remove('active');
    document.getElementById('character-selection-screen').classList.add('active');
    
    // Inicializa o jogo quando entra na tela de seleção
    initializeGame();
}

// Fazer o card inteiro do "Jogar" clicável
const jogarCard = document.querySelector('.menu-item.main-button');
if (jogarCard) {
    jogarCard.style.cursor = 'pointer';
    jogarCard.addEventListener('click', function(e) {
        e.preventDefault();
        showCharacterSelection();
    });
}

// Fazer o card inteiro do "Sobre" clicável
document.querySelectorAll('.menu-item.secondary-button').forEach(card => {
    const link = card.querySelector('a');
    if (link && link.getAttribute('href') === '#sobre') {
        card.style.cursor = 'pointer';
        card.addEventListener('click', function(e) {
            if (e.target !== link) {
                openAboutModal();
            }
        });
    }
});

// Funções para controlar o modal de Sobre
function openAboutModal() {
    const modal = document.getElementById('about-modal');
    modal.classList.add('active');
}

function closeAboutModal() {
    const modal = document.getElementById('about-modal');
    modal.classList.remove('active');
}

// Event listeners para fechar o modal
document.getElementById('about-modal').addEventListener('click', function(e) {
    if (e.target === this || e.target.classList.contains('modal-overlay') || e.target.classList.contains('modal-close')) {
        closeAboutModal();
    }
});

// Fechar modal ao pressionar ESC
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeAboutModal();
    }
});

// Inicia a sequência quando a página carrega
document.addEventListener('DOMContentLoaded', () => {
    showIntroduction();
});

// Inicializa AudioContext na primeira interação do usuário (Autoplay Policy)
document.addEventListener('click', () => {
    initAudioContext();
}, { once: true });

document.addEventListener('touchstart', () => {
    initAudioContext();
}, { once: true });

document.addEventListener('keydown', () => {
    initAudioContext();
}, { once: true });

// Evento de teclado para pular com espaço
document.addEventListener('keydown', (e) => {
    if ((e.code === 'Space' || e.key === 'Enter') && canSkipIntro && document.getElementById('introduction-screen').classList.contains('active')) {
        e.preventDefault();
        skipIntroduction();
    }
});

// Evento de clique/toque para pular a intro
document.getElementById('introduction-screen')?.addEventListener('click', () => {
    if (canSkipIntro) {
        skipIntroduction();
    }
});

document.addEventListener('touchstart', () => {
    initAudioContext();
}, { once: true });

// Adiciona animação fade-out ao CSS dinamicamente
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeOut {
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
        }
    }

    .fade-out {
        animation: fadeOut 0.5s ease-out forwards;
    }
`;
document.head.appendChild(style);
