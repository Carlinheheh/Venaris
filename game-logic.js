// ==================== CONFIGURAÇÃO DE DADOS DO JOGO ====================
// TODO: ADICIONE AQUI SEUS PERSONAGENS, EVENTOS, ITENS E PLANETAS

// ========== PERSONAGENS INICIAIS (10 padrão) ==========
// ADICIONE AQUI seus 10 personagens iniciais
// Formato:
// {
//     id: número único,
//     name: "Nome do personagem",
//     description: "Descrição curta",
//     image: "url da imagem",
//     hp: 100,
//     maxHp: 100,
//     item: "id do item"
// }
const initialCharacters = [
    // ADICIONE OS 10 PERSONAGENS AQUI
    // Exemplo:
    // { id: 1, name: "Nome", description: "Desc", image: "url", hp: 100, maxHp: 100, item: "item1" },
    {id: 1, name: "Han Solo", description: "O Grande piloto da Millenium Falcom", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThFGPuNzz7JKx09ZlKtoL4s4aUGtxukNtWng&s", hp: 100, maxHp: 100, item: "item1"},
    {id: 2, name: "Vô Max", description: "Apenas um senhor de idade", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWmLKdLK9ufkTzWyz17gn8GkU62PzmbcVN1Q&s", hp: 100, maxHp: 100, item: "item2"},
    {id: 3, name: "Ethan", description: "O Sobrinho do Imperador Yohan", image: "C:\\Users\\Carlos Eduardo\\Downloads\\Icones\\1774104103196.jpg", hp: 100, maxHp: 100, item: "item3"},
    {id: 4, name: "Shrek", description: "O Grande Ogro Gentil", image: "https://i.pinimg.com/564x/b9/3e/7b/b93e7b9ded13b68b14bbfe1e32fe3f36.jpg", hp: 100, maxHp: 100, item: "item1"},
    {id: 5, name: "Luffy", description: "O Futuro Rei dos Piratas", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZO3teugqIDNw2qhrPfUqSOZwCQNfRP9xSjQ&s", hp: 100, maxHp: 100, item: "item4"},
    {id: 6, name: "Applejack", description: "A Pônei da Roça", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCT2TtRNr_P0JADH94t7hiJszQ6-n4tB1kaw&s", hp: 100, maxHp: 100, item: "item1"},
    {id: 7, name: "Yoda", description: "O Mestre Jedi", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStotWIIoOSDLBiiE1NLfSs-XN4CsnI2QRRkA&s", hp: 100, maxHp: 100, item: "item5"},
    {id: 8, name: "Nahara", description: "A Herdeira", image: "c:\\Users\\Carlos Eduardo\\Downloads\\Icones\\IMG-20260321-WA0027.jpg", hp: 100, maxHp: 100, item: "item6"},
    {id: 9, name: "Batman Absolute", description: "O Cavaleiro das Trevas", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmrXu25KU4oHdfDjaGFbpBhQdRO57tgBJfXA&s", hp: 100, maxHp: 100, item: "item7"},
    {id: 10, name: "Finn", description: "O Herói de OOO", image:"https://pbs.twimg.com/media/FgxlyqYWYAAoMNj.png", hp: 100, maxHp: 100, item: "item8"},
];

// ========== ITENS DO JOGO ==========
// ADICIONE AQUI os itens disponíveis no jogo
// Cada personagem começará com um desses itens
const gameItems = [
    { id: "item1", name: "Pistola Eagle", damage: 7, defense: 0, speed: 5 },
    { id: "item2", name: "Escudo Protetor", damage: 0, defense: 30, speed: 8 },
    { id: "item3", name: "Arma de Plasma", damage: 25, defense: 0, speed: 12 },
    { id: "item4", name: "Big Bazooka", damage: 60, defense: 0, speed: 15 },
    { id: "item5", name: "Sabre de Luz", damage: 50, defense: 10, speed: 6 },
    { id: "item6", name: "Cobra Amiga", damage: 40, defense: 5, speed: 6},
    { id: "item7", name: "Espada Amaldiçoada", damage: 30, defense: 10, speed: 13},
    { id: "item8", name: "Espada Dourada", damage: 20, defense: 0, speed: 10},
    // ADICIONE MAIS ITENS AQUI
];

// ========== PLANETAS ==========
// ADICIONE AQUI a lista de planetas
// Cada planeta tem sua própria cor temática, eventos e criaturas
const planets = [
    { 
        id: "planet1", 
        name: "Zakin", 
        description: "O Deserto dos Delinquentes.",
        introText: "O Calor é extremo e os indivíduos são traiçoeiros. Bem-Vindo ao Deserto dos Delinquentes",
        color: "#ff8800", 
        uniqueEvents: {
            passage: [
                "Uma tempestade de areia encobre o horizonte.",
                "{name1} encontra destroços de uma moto.",
                "{name2} fala para {name1} que está morrendo de calor.",
                "{name3} se encontra com um grupo de delinquentes, mas decide ignorá-los.",
                "{name1} dorme no meio do deserto e é roubado, perdendo 20 moedas.",
                "{name3} se espanta quando vê uma pilha de ossos no deserto.",
                "{name2} foge de algo.",
            ],
            negative: [
                { text: "Um bando de saqueadores ataca {name1}!", damage: 20 },
                { text: "{name1} sofre com a desidratação extrema.", damage: 10 },
                { text: "{name1} cai em uma areia movediça, mas {name2} lhe salva.", damage: 10, target: "name2"},
                { text: "{name1} sangra o nariz por causa da seca do deserto", damage: 1 },
            ],
            positive: [
                { text: "{name} encontra um oásis escondido.", healing: 25 }
            ],
            combat: [
                { text: "Um escorpião gigante bloqueia seu caminho!", enemy: { name: "Escorpião Gigante", hp: 80, damage: 15 } },
                { text: "{name1} encontra um general esqueleto no deserto!", enemy: { name: "General Esqueleto", hp: 100, damage: 20 } }
            ]
        }
    },
    { 
        id: "planet2", 
        name: "Gaia", 
        description: "A Tóxica Floresta",
        introText: "Chuvas ácidas caem de forma constante e plantas hostis querem te matar, tem certeza que quer explorar isso??",
        color: "#144e0f", 
        uniqueEvents: {
            passage: [
                "{name1} ouve um som assustador de longe.",
                "{name1} decide cheirar as plantas e fica completamente alucinado por um tempo.",
                "{name1} se pergunta se vale a pena viver com todas essas plantas querendo lhe matar.",
                "{name1} está escondido em uma caverna enquanto {name2} está lhe procurando desesperado.",
            ],
            negative: [
                { text: "Uma gota de chuva ácida cai no pescoço de {name}!", damage: 15 },
                { text: "Esporos alucinógenos afetam {name}.", damage: 10 }
            ],
            positive: [
                { text: "{name} encontra fungos regenerativos.", healing: 20 }
            ],
            combat: [
                { text: "Uma planta carnívora gigante ataca!", enemy: { name: "Planta Voraz", hp: 60, damage: 12 } }
            ]
        }
    },
    // ADICIONE MAIS PLANETAS AQUI
];

// ========== EVENTOS DO JOGO ==========
// Total de 5 tipos de eventos, cada dia tem 5 eventos

// TIPO 1: PASSAGEM (sem consequências)
const passageEvents = [
    "O dia transcorre sem maiores incidentes.",
    "{name} está com um pressentimento estranho hoje.",
    "{name} passou o dia polindo seus equipamentos.",
    "A tripulação teve uma conversa profunda sobre o sentido da vida.",
    // ADICIONE MAIS EVENTOS DE PASSAGEM AQUI
];

// TIPO 2: NEGATIVO (alguém leva dano)
const negativeEvents = [
    {
        text: "Uma criatura desconhecida ataca {name}!",
        damage: 15
    },
    {
        text: "{name} tropeçou em uma pedra e caiu feio.",
        damage: 10
    },
    // ADICIONE MAIS EVENTOS NEGATIVOS AQUI
];

// TIPO 3: POSITIVO (recupera vida ou ganha item)
const positiveEvents = [
    {
        text: "{name} cuidou de seus ferimentos.",
        healing: 20
    },
    // ADICIONE MAIS EVENTOS POSITIVOS AQUI
];

// TIPO 4: NOVO TRIPULANTE (adiciona novo tripulante ao time)
const newCrewEvents = [
    {
        text: "Você encontra um sobrevivente da nave!",
        crewAddition: true
    },
    // ADICIONE MAIS EVENTOS DE NOVO TRIPULANTE AQUI
];

// TIPO 5: COMBATE (inicia um combate)
const combatEvents = [
    {
        text: "Uma criatura agressiva bloqueia seu caminho!",
        enemy: { name: "Criatura Alienígena", hp: 50, damage: 10 }
    },
    // ADICIONE MAIS EVENTOS DE COMBATE AQUI
];

// ==================== VARIÁVEIS GLOBAIS DO JOGO ====================
let gameState = {
    currentDay: 1,
    maxDays: 10,
    selectedCrew: [], // Personagens selecionados
    customCharacters: [],
    currentPlanet: null,
    currentEventIndex: 0, // 0-4 (5 eventos por dia)
    inBattle: false,
    battleParticipants: null,
    deadCrew: [], // Tripulantes que morreram
    preloadedImages: {} // Cache de imagens pré-carregadas
};

// ==================== FUNÇÕES DE UTILITÁRIOS ====================

// Função para pré-carregar imagens e evitar atrasos na exibição
function preloadImage(url) {
    if (!url || gameState.preloadedImages[url]) return;
    
    const img = new Image();
    img.src = url;
    img.onload = () => {
        gameState.preloadedImages[url] = img;
        console.log(`Imagem carregada: ${url}`);
    };
    img.onerror = () => {
        console.warn(`Falha ao carregar imagem: ${url}`);
        // Mesmo se falhar, marcamos como tentado para não tentar de novo
        gameState.preloadedImages[url] = true;
    };
}

function preloadAllCharacterImages() {
    // Pré-carregar personagens iniciais
    initialCharacters.forEach(char => preloadImage(char.image));
    
    // Pré-carregar personagens customizados
    if (gameState.customCharacters) {
        gameState.customCharacters.forEach(char => preloadImage(char.image));
    }
}

// ==================== FUNÇÕES DE INICIALIZAÇÃO ====================

function initializeGame() {
    // Configurar botões se ainda não foram configurados
    setupGameButtons();

    // Carregar personagens customizados do localStorage
    const saved = localStorage.getItem('venaris-custom-characters');
    if (saved) {
        try {
            gameState.customCharacters = JSON.parse(saved);
        } catch (e) {
            console.error("Erro ao carregar personagens:", e);
            gameState.customCharacters = [];
        }
    }
    
    preloadAllCharacterImages();
    renderCharacterSelection();
}

function setupGameButtons() {
    // Botão Voltar do jogo
    const gameBackBtn = document.getElementById('game-back-btn');
    if (gameBackBtn) {
        gameBackBtn.onclick = () => {
            if (confirm("Tem certeza que deseja sair do jogo? Seu progresso atual será perdido.")) {
                resetGameState();
                renderCharacterSelection();
            }
        };
    }

    // Botão Gerenciar Tripulação
    const manageBtn = document.getElementById('open-crew-modal-btn');
    if (manageBtn) {
        manageBtn.onclick = showManageCrewModal;
    }
    
    // Botão Voltar para Menu (na tela de seleção)
    const backToMenuBtn = document.getElementById('back-to-menu-btn');
    if (backToMenuBtn) {
        backToMenuBtn.onclick = () => showScreen('home-screen');
    }

    // Botão Adicionar Personagem
    const addCharBtn = document.getElementById('add-character-btn');
    if (addCharBtn) {
        addCharBtn.onclick = openCharacterCreation;
    }

    // Botão Voltar da Criação de Personagem
    const closeCreationBtn = document.getElementById('close-creation');
    if (closeCreationBtn) {
        closeCreationBtn.onclick = () => renderCharacterSelection();
    }

    // Botão Iniciar Jogo
    const startGameBtn = document.getElementById('start-game-btn');
    if (startGameBtn) {
        startGameBtn.onclick = startGame;
    }
    
    // Botão Voltar para Personagens (na seleção de planetas)
    const backToCharsBtn = document.getElementById('back-to-chars-btn');
    if (backToCharsBtn) {
        backToCharsBtn.onclick = renderCharacterSelection;
    }
}

function renderCharacterSelection() {
    const screenId = 'character-selection-screen';
    showScreen(screenId);
    
    const grid = document.getElementById('character-grid');
    if (!grid) return;
    grid.innerHTML = '';
    
    // Atualizar visual da tripulação selecionada
    updateCrewDisplay();
    
    // Combinar personagens iniciais com customizados
    const allCharacters = [...initialCharacters, ...gameState.customCharacters];
    
    // Pré-carregar todas as imagens para garantir que estejam prontas
    preloadAllCharacterImages();
    
    if (allCharacters.length === 0) {
        grid.innerHTML = '<p style="color: white;">Nenhum personagem disponível. Crie um novo!</p>';
        return;
    }
    
    allCharacters.forEach(char => {
        const item = gameItems.find(i => i.id === char.item) || { damage: 0, defense: 0, speed: 10 };
        const card = document.createElement('div');
        card.className = 'character-card';
        card.innerHTML = `
            <img src="${char.image}" alt="${char.name}" onerror="this.src='https://via.placeholder.com/150?text=Sem+Foto'">
            <h3>${char.name}</h3>
            <p>${char.description}</p>
            <div class="item-stats" style="font-size: 12px; color: #aaa; margin-top: 10px; border-top: 1px solid #333; padding-top: 5px;">
                <p><strong>Item:</strong> ${getItemName(char.item)}</p>
                <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 5px; margin-top: 5px;">
                    <span title="Dano" style="color: #ff4444;">⚔️ ${item.damage || 0}</span>
                    <span title="Defesa" style="color: #44ff44;">🛡️ ${item.defense || 0}</span>
                    <span title="Velocidade (Dificuldade)" style="color: #4444ff;">⚡ ${item.speed || 10}</span>
                </div>
            </div>
        `;
        card.onclick = () => selectCharacter(char);
        grid.appendChild(card);
    });
}

function selectCharacter(character) {
    // Verificar se já tem 3 personagens
    if (gameState.selectedCrew.length >= 3) {
        alert('Você já tem 3 tripulantes!');
        return;
    }
    
    // Verificar se o personagem já está na tripulação (comparar por ID)
    const alreadySelected = gameState.selectedCrew.some(crew => crew.id === character.id);
    if (alreadySelected) {
        alert('Este personagem já está na sua tripulação!');
        return;
    }
    
    gameState.selectedCrew.push({...character});
    updateCrewDisplay();
    
    // Ativar botão iniciar se tiver 3 personagens
    const btn = document.getElementById('start-game-btn');
    if (gameState.selectedCrew.length === 3) {
        btn.disabled = false;
    }
}

function updateCrewDisplay() {
    for (let i = 1; i <= 3; i++) {
        const slot = document.getElementById(`crew-slot-${i}`);
        const content = document.getElementById(`slot-${i}-content`);
        const removeBtn = document.getElementById(`remove-crew-${i}`);
        
        if (i <= gameState.selectedCrew.length) {
            const char = gameState.selectedCrew[i - 1];
            content.textContent = char.name;
            removeBtn.style.display = 'flex';
            removeBtn.onclick = (e) => {
                e.stopPropagation();
                removeCrewMember(i - 1);
            };
        } else {
            content.textContent = `Slot ${i}`;
            removeBtn.style.display = 'none';
        }
    }
}

function removeCrewMember(index) {
    gameState.selectedCrew.splice(index, 1);
    updateCrewDisplay();
    
    const btn = document.getElementById('start-game-btn');
    btn.disabled = gameState.selectedCrew.length < 3;
}

function startGame() {
    if (gameState.selectedCrew.length !== 3) {
        alert('Selecione 3 tripulantes!');
        return;
    }
    
    // Pré-carregar explicitamente as imagens dos 3 selecionados
    gameState.selectedCrew.forEach(char => preloadImage(char.image));
    
    // Agora passamos para a seleção de planetas em vez de começar direto
    renderPlanetSelection();
}

function renderPlanetSelection() {
    showScreen('planet-selection-screen');
    
    const grid = document.getElementById('planet-grid');
    grid.innerHTML = '';
    
    planets.forEach(planet => {
        const card = document.createElement('div');
        card.className = 'planet-card';
        card.style.borderColor = planet.color;
        card.style.boxShadow = `0 0 10px ${planet.color}44`;
        
        card.innerHTML = `
            <div class="planet-icon" style="background: ${planet.color}; box-shadow: 0 0 20px ${planet.color};"></div>
            <h3 style="color: ${planet.color};">${planet.name}</h3>
            <p>${planet.description}</p>
            <div class="planet-stats">
                <span>Perigo: ???</span>
                <span>Recursos: ???</span>
            </div>
        `;
        
        card.onclick = () => selectPlanet(planet);
        grid.appendChild(card);
    });
}

function selectPlanet(planet) {
    gameState.currentPlanet = planet;
    gameState.currentDay = 1;
    gameState.currentEventIndex = 0;
    
    // Inicializar HP dos tripulantes
    gameState.selectedCrew.forEach(char => {
        char.hp = char.maxHp;
        char.isDead = false;
        // Forçar pré-carregamento das imagens da tripulação novamente aqui por segurança
        preloadImage(char.image);
    });
    
    // Aplicar cor do planeta ao cabeçalho do jogo
    document.getElementById('planet-name').style.color = planet.color;
    document.getElementById('open-crew-modal-btn').style.borderColor = planet.color;
    document.getElementById('open-crew-modal-btn').style.color = planet.color;
    
    // Preparar o display do jogo ANTES da introdução (escondido)
    updateGameDisplay();
    
    // Mostrar tela de jogo
    showScreen('game-screen');
    
    // Mostrar introdução do planeta com fade
    const overlay = document.getElementById('planet-intro-overlay');
    const nameEl = document.getElementById('intro-planet-name');
    const textEl = document.getElementById('intro-planet-text');
    
    nameEl.textContent = planet.name;
    nameEl.style.color = planet.color;
    nameEl.style.textShadow = `0 0 20px ${planet.color}`;
    textEl.textContent = planet.introText || "";
    
    overlay.classList.add('active');
    
    // Sumir com a introdução após alguns segundos e começar o jogo
    setTimeout(() => {
        overlay.style.opacity = '0';
        setTimeout(() => {
            overlay.classList.remove('active');
            overlay.style.opacity = '1'; // Reset para próxima vez
            playNextEvent();
        }, 1000);
    }, 4000);
}

function updateGameDisplay() {
    // Atualizar dia
    document.getElementById('current-day').textContent = gameState.currentDay;
    
    // Atualizar planeta
    document.getElementById('planet-name').textContent = `Planeta: ${gameState.currentPlanet.name}`;
    
    // Atualizar tripulação (apenas os 3 que estão "em jogo")
    for (let i = 0; i < 3; i++) {
        const idx = i + 1;
        const char = gameState.selectedCrew[i];
        const crewElement = document.getElementById(`crew-member-${idx}`);
        
        if (char && !char.isDead) {
            crewElement.style.opacity = '1';
            crewElement.querySelector('.crew-name').textContent = char.name;
            document.getElementById(`crew-image-${idx}`).src = char.image;
            document.getElementById(`hp-${idx}`).textContent = char.hp;
            
            const healthBar = document.getElementById(`health-fill-${idx}`);
            const healthPercent = (char.hp / char.maxHp) * 100;
            healthBar.style.width = healthPercent + '%';
        } else if (char && char.isDead) {
            // Mostrar que está morto mas manter o slot
            crewElement.style.opacity = '0.5';
            crewElement.querySelector('.crew-name').textContent = `${char.name} (MORTO)`;
            document.getElementById(`crew-image-${idx}`).src = char.image;
            document.getElementById(`hp-${idx}`).textContent = '0';
            document.getElementById(`health-fill-${idx}`).style.width = '0%';
        } else {
            // Slot vazio
            crewElement.style.opacity = '0.3';
            crewElement.querySelector('.crew-name').textContent = 'Vazio';
            document.getElementById(`crew-image-${idx}`).src = '';
            document.getElementById(`hp-${idx}`).textContent = '-';
            document.getElementById(`health-fill-${idx}`).style.width = '0%';
        }
    }
}

function playNextEvent() {
    // Se estiver em combate, não prosseguir com eventos normais
    if (gameState.inBattle) {
        return;
    }
    
    const eventIndex = gameState.currentEventIndex;
    
    if (eventIndex === 5) {
        // Fim do dia, passar para próximo
        gameState.currentDay++;
        gameState.currentEventIndex = 0;
        
        if (gameState.currentDay > gameState.maxDays) {
            // Ganhou!
            endGame(true);
            return;
        }
        
        updateGameDisplay();
        playNextEvent();
        return;
    }
    
    // Sortear tipo de evento usando probabilidade ponderada (Padrão RPG)
    const rand = Math.random();
    let eventType;
    
    if (rand < 0.40) {
        eventType = 0; // Passagem (40%)
    } else if (rand < 0.60) {
        eventType = 2; // Positivo (20%)
    } else if (rand < 0.80) {
        eventType = 1; // Negativo (20%)
    } else if (rand < 0.95) {
        eventType = 4; // Combate (10%)
    } else {
        eventType = 3; // Novo Tripulante (5%)
    }
    
    let event;
    
    // Pegar eventos específicos do planeta se existirem
    const pEvents = gameState.currentPlanet.uniqueEvents;
    
    switch(eventType) {
        case 0: // Passagem
            event = getRandomEvent([...passageEvents, ...(pEvents.passage || [])]);
            playPassageEvent(event);
            break;
        case 1: // Negativo
            event = getRandomEvent([...negativeEvents, ...(pEvents.negative || [])]);
            playNegativeEvent(event);
            break;
        case 2: // Positivo
            event = getRandomEvent([...positiveEvents, ...(pEvents.positive || [])]);
            playPositiveEvent(event);
            break;
        case 3: // Novo Tripulante
            event = getRandomEvent(newCrewEvents);
            playNewCrewEvent(event);
            break;
        case 4: // Combate
            event = getRandomEvent([...combatEvents, ...(pEvents.combat || [])]);
            playCombatEvent(event);
            break;
    }
}

// ==================== TIPOS DE EVENTOS ====================

// Função para obter participantes de um evento e mapear para {name1}, {name2}, {name3}
function getEventParticipants(protagonist) {
    const aliveInGame = gameState.selectedCrew.slice(0, 3).filter(char => !char.isDead);
    
    // O protagonista padrão é o que foi passado ou o primeiro vivo
    const name1 = protagonist || aliveInGame[0];
    
    // Filtra os outros membros vivos para name2 e name3
    const others = aliveInGame.filter(c => c.id !== (name1 ? name1.id : null));
    const shuffledOthers = [...others].sort(() => Math.random() - 0.5);
    
    return {
        name1: name1,
        name2: shuffledOthers[0] || null,
        name3: shuffledOthers[1] || null
    };
}

// Função auxiliar para substituir placeholders (ex: {name}, {name1}, {name2}) no texto do evento
function replacePlaceholders(text, participants) {
    if (!text || !participants) return text || "";
    
    let newText = text;

    // Substituir {name} e {name1} pelo protagonista do evento
    const name1Str = participants.name1 ? `<strong>${participants.name1.name}</strong>` : "alguém";
    newText = newText.replace(/{name}/g, name1Str);
    newText = newText.replace(/{name1}/g, name1Str);

    // Substituir {name2} e {name3} por outros membros da equipe
    const name2Str = participants.name2 ? `<strong>${participants.name2.name}</strong>` : "alguém";
    newText = newText.replace(/{name2}/g, name2Str);

    const name3Str = participants.name3 ? `<strong>${participants.name3.name}</strong>` : "alguém";
    newText = newText.replace(/{name3}/g, name3Str);

    return newText;
}

function playPassageEvent(event) {
    let text = event.text || event;
    
    // Se o evento tiver qualquer tipo de placeholder de nome
    if (text.includes("{name")) {
        const aliveInGame = gameState.selectedCrew.slice(0, 3).filter(char => !char.isDead);
        if (aliveInGame.length > 0) {
            // Escolhemos um protagonista aleatório para o evento de passagem
            const protagonist = aliveInGame[Math.floor(Math.random() * aliveInGame.length)];
            const participants = getEventParticipants(protagonist);
            text = replacePlaceholders(text, participants);
        }
    }
    
    showEventText(text);
    showNextButton();
}

function playNegativeEvent(event) {
    // Selecionar apenas entre os 3 tripulantes em jogo que estão vivos
    const aliveInGame = gameState.selectedCrew.slice(0, 3).filter(char => !char.isDead);
    
    if (aliveInGame.length === 0) {
        showEventText("Nenhum tripulante ativo para sofrer dano!");
        showNextButton();
        return;
    }
    
    // Protagonista padrão do evento
    const protagonist = aliveInGame[Math.floor(Math.random() * aliveInGame.length)];
    const participants = getEventParticipants(protagonist);
    
    // Determinar quem realmente sofre o dano (default é name1/protagonista)
    let affected = participants.name1;
    if (event.target === "name2" && participants.name2) affected = participants.name2;
    if (event.target === "name3" && participants.name3) affected = participants.name3;
    
    // Se por algum motivo o alvo não existir, volta para o name1
    if (!affected) affected = participants.name1;

    affected.hp = Math.max(0, affected.hp - event.damage);
    
    let eventText = replacePlaceholders(event.text, participants);
    eventText += `<br><strong>${affected.name} sofre ${event.damage} de dano!</strong>`;
    showEventText(eventText);
    
    // Verificar se tripulante morreu
    if (affected.hp <= 0) {
        affected.hp = 0;
        affected.isDead = true;
        
        // Remover o tripulante da lista de ativos/selecionados
        const index = gameState.selectedCrew.indexOf(affected);
        if (index !== -1) {
            gameState.selectedCrew.splice(index, 1);
            // Adicionar à lista global de mortos
            if (!gameState.deadCrew.some(c => c.id === affected.id)) {
                gameState.deadCrew.push(affected);
            }
        }
        
        updateGameDisplay();
        updateCrewMiniCard();
        
        showEventText(`${eventText}<br><span class="error">${affected.name} foi derrotado e removido da tripulação!</span>`);
        
        // Verificar se ainda resta alguém vivo (em qualquer lugar da tripulação)
        if (gameState.selectedCrew.length === 0) {
            setTimeout(() => {
                showEventText(`${eventText}<br><strong style="color: #ff0000;">Toda a sua tripulação foi derrotada! O jogo acabou!</strong>`);
                document.getElementById('event-actions').innerHTML = '<button class="btn btn-primary" onclick="showScreen(\'home-screen\');">Voltar ao Menu</button>';
            }, 1000);
            return;
        }
    } else {
        updateGameDisplay();
    }
    
    showNextButton();
}

function playPositiveEvent(event) {
    // Selecionar apenas entre os 3 tripulantes em jogo que estão vivos
    const aliveInGame = gameState.selectedCrew.slice(0, 3).filter(char => !char.isDead);
    
    if (aliveInGame.length === 0) {
        showEventText("Não há tripulantes vivos para receber o benefício.");
        showNextButton();
        return;
    }
    
    // Protagonista padrão do evento
    const protagonist = aliveInGame[Math.floor(Math.random() * aliveInGame.length)];
    const participants = getEventParticipants(protagonist);
    
    // Determinar quem realmente recebe o benefício
    let luckyChar = participants.name1;
    if (event.target === "name2" && participants.name2) luckyChar = participants.name2;
    if (event.target === "name3" && participants.name3) luckyChar = participants.name3;
    
    if (!luckyChar) luckyChar = participants.name1;
    
    if (event.healing) {
        luckyChar.hp = Math.min(luckyChar.maxHp, luckyChar.hp + event.healing);
        const eventText = `${replacePlaceholders(event.text, participants)}<br><strong>${luckyChar.name} recupera ${event.healing} de vida!</strong>`;
        showEventText(eventText);
    }
    
    updateGameDisplay();
    showNextButton();
}

function playNewCrewEvent(event) {
    // Criar novo tripulante aleatório dos personagens disponíveis
    const available = initialCharacters.concat(gameState.customCharacters);
    
    // Filtrar personagens que já estão na tripulação
    const availableNotSelected = available.filter(char => 
        !gameState.selectedCrew.some(crew => crew.id === char.id)
    );
    
    if (availableNotSelected.length === 0) {
        // Se todos já estão recrutados, just show event
        showEventText(`${event.text}<br><strong>Mas já tem todos os personagens!</strong>`);
        showNextButton();
        return;
    }
    
    const newMember = JSON.parse(JSON.stringify(availableNotSelected[Math.floor(Math.random() * availableNotSelected.length)]));
    newMember.hp = newMember.maxHp;
    
    gameState.selectedCrew.push(newMember);
    
    // Substituir placeholder se houver (quem encontrou o novo membro)
    let eventText = event.text;
    if (eventText.includes("{name")) {
        const aliveInGame = gameState.selectedCrew.slice(0, 3).filter(char => !char.isDead && char.id !== newMember.id);
        if (aliveInGame.length > 0) {
            const discoverer = aliveInGame[Math.floor(Math.random() * aliveInGame.length)];
            const participants = getEventParticipants(discoverer);
            eventText = replacePlaceholders(eventText, participants);
        }
    }
    
    eventText += `<br><strong>${newMember.name} se junta à sua tripulação! (Verifique o painel de tripulação)</strong>`;
    showEventText(eventText);
    updateGameDisplay();
    updateCrewMiniCard(); // Atualizar mini card de tripulação
    showNextButton(); // Sempre mostrar o botão próximo
}

function playCombatEvent(event) {
    gameState.inBattle = true;
    
    // Limpar qualquer combate anterior que possa estar ainda no DOM
    const oldBattleDisplay = document.getElementById('battle-character-display');
    if (oldBattleDisplay) {
        oldBattleDisplay.remove();
    }
    
    // Selecionar apenas entre os 3 tripulantes ativos que estão vivos
    const aliveInGame = gameState.selectedCrew.slice(0, 3).filter(char => !char.isDead);
    
    if (aliveInGame.length === 0) {
        gameState.inBattle = false;
        showEventText("Nenhum tripulante vivo para lutar!");
        showNextButton();
        return;
    }
    
    const playerChar = aliveInGame[Math.floor(Math.random() * aliveInGame.length)];
    const playerCharIndex = gameState.selectedCrew.indexOf(playerChar);
    const participants = getEventParticipants(playerChar);
    
    const enemy = {...event.enemy, hp: event.enemy.hp, maxHp: event.enemy.hp};
    
    gameState.battleParticipants = {
        player: playerChar,
        playerIndex: playerCharIndex,
        enemy: enemy,
        eventText: replacePlaceholders(event.text, participants)
    };
    
    // Esconder tripulação normal e events
    document.querySelector('.crew-display').style.display = 'none';
    document.querySelector('.event-display').style.display = 'none';
    
    // Mostrar ícone do personagem em combate
    const battleCenter = document.createElement('div');
    battleCenter.id = 'battle-character-display';
    battleCenter.style.cssText = `
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
        margin: 30px auto;
    `;
    
    battleCenter.innerHTML = `
        <img src="${playerChar.image}" alt="${playerChar.name}" style="
            width: 150px;
            height: 150px;
            border-radius: 10px;
            border: 3px solid #7700ff;
            object-fit: cover;
        ">
        <h2 style="color: #7700ff;">${playerChar.name} em Combate!</h2>
        <p style="color: #aaa;">${replacePlaceholders(event.text, participants)}</p>
    `;
    
    const gameContainer = document.querySelector('.game-container');
    gameContainer.insertBefore(battleCenter, gameContainer.children[2]);
    
    startBattle(playerChar, enemy);
}

function startBattle(playerChar, enemy) {
    const battleDisplay = document.getElementById('battle-display');
    battleDisplay.style.display = 'block';
    
    document.getElementById('battle-player').querySelector('.battle-name').textContent = playerChar.name;
    document.getElementById('battle-enemy').querySelector('.battle-name').textContent = enemy.name;
    updateBattleDisplay(playerChar, enemy);
    
    // Sorteando quem ataca primeiro
    gameState.battleParticipants.playerAttacksFirst = Math.random() > 0.5;
    
    const firstAttacker = gameState.battleParticipants.playerAttacksFirst ? playerChar.name : enemy.name;
    
    // Mostrar quem ataca primeiro no battle display
    const battleInfo = document.querySelector('.battle-info');
    let firstAttackerText = document.getElementById('first-attacker-text');
    if (!firstAttackerText) {
        firstAttackerText = document.createElement('p');
        firstAttackerText.id = 'first-attacker-text';
        firstAttackerText.style.cssText = 'color: #aa44ff; text-align: center; margin-bottom: 10px;';
        battleInfo.insertBefore(firstAttackerText, battleInfo.nextSibling);
    }
    firstAttackerText.textContent = `${firstAttacker} ataca primeiro!`;
}

function updateBattleDisplay(playerChar, enemy) {
    document.getElementById('battle-player-hp').textContent = `${playerChar.hp}/${playerChar.maxHp}`;
    document.getElementById('battle-enemy-hp').textContent = `${enemy.hp}/${enemy.maxHp}`;
    
    // Atualizar barras visuais
    const playerHealthPercent = (playerChar.hp / playerChar.maxHp) * 100;
    const enemyHealthPercent = (enemy.hp / enemy.maxHp) * 100;
    
    document.getElementById('battle-player-bar').style.width = playerHealthPercent + '%';
    document.getElementById('battle-enemy-bar').style.width = enemyHealthPercent + '%';
}

// ==================== SISTEMA DE COMBATE ====================

function performAttack() {
    // Verificar se ainda está em combate (proteção contra múltiplos cliques)
    if (!gameState.inBattle) {
        return;
    }
    
    const bp = gameState.battleParticipants;
    if (!bp || !bp.player || !bp.enemy) {
        return;
    }
    
    const playerChar = bp.player;
    const enemy = bp.enemy;
    const item = gameItems.find(i => i.id === playerChar.item) || { damage: 10, defense: 0, speed: 10 };
    
    // Desabilitar botão durante turno
    const attackBtn = document.getElementById('attack-btn');
    if (!attackBtn) return;
    attackBtn.disabled = true;
    
    // Dado de ataque (1-20)
    const attackRoll = Math.floor(Math.random() * 20) + 1;
    // A dificuldade de acertar (speed do item). Quanto menor o valor de speed do item, mais fácil acertar.
    const hitChance = item.speed || 10; 
    
    let messageText = `<strong>${playerChar.name} ataca com ${getItemName(playerChar.item)}!</strong><br>`;
    
    if (attackRoll >= hitChance) {
        // Acertou! Rolar dano: (Dano Base do Item) + (Rolo Aleatório 1-10)
        const damageRoll = Math.floor(Math.random() * 10) + 1;
        const totalDamage = (item.damage || 10) + damageRoll;
        
        enemy.hp = Math.max(0, enemy.hp - totalDamage);
        
        messageText += `Ataque: ${attackRoll} ✓ (ACERTOU!)<br>Dano: ${totalDamage}`;
        
        // Atualizar HP do inimigo na tela
        updateBattleDisplay(playerChar, enemy);
        showBattleMessage(messageText);
        
        if (enemy.hp <= 0) {
            setTimeout(() => {
                if (!gameState.inBattle) return; // Proteção contra combate já encerrado
                showBattleMessage(`<strong style="color: #00ff00;">${playerChar.name} venceu!</strong>`);
                setTimeout(() => {
                    if (gameState.inBattle) {
                        endBattle(true);
                    }
                }, 1500);
            }, 1500);
            return;
        }
    } else {
        messageText += `Ataque: ${attackRoll} ✗ (ERROU!) <br><small>Precisava de ${hitChance}+ para acertar</small>`;
        showBattleMessage(messageText);
    }
    
    // Agora o inimigo contra-ataca
    setTimeout(() => {
        if (!gameState.inBattle) {
            if (attackBtn) attackBtn.disabled = false;
            return; // Proteção contra combate já encerrado
        }
        
        const enemyAttackRoll = Math.floor(Math.random() * 20) + 1;
        // Probabilidade de acerto do inimigo é fixa (ex: 10+ para acertar)
        const enemyHitChance = 10;
        
        let enemyMessageText = `<strong>${enemy.name} contra-ataca!</strong><br>`;
        
        if (enemyAttackRoll >= enemyHitChance) {
            // Inimigo acertou. Dano base do inimigo menos a defesa do item.
            const enemyDamageRoll = Math.floor(Math.random() * 10) + 1;
            const rawEnemyDamage = (enemy.damage || 10) + enemyDamageRoll;
            // Defesa reduz diretamente o dano recebido
            const defenseReduction = item.defense || 0;
            const finalEnemyDamage = Math.max(5, rawEnemyDamage - defenseReduction);
            
            playerChar.hp = Math.max(0, playerChar.hp - finalEnemyDamage);
            
            enemyMessageText += `Ataque: ${enemyAttackRoll} ✓ (ACERTOU!)<br>Dano: ${finalEnemyDamage} <small>(Dano original: ${rawEnemyDamage} - Defesa: ${defenseReduction})</small>`;
            
            updateGameDisplay();
            updateBattleDisplay(playerChar, enemy);
            showBattleMessage(enemyMessageText);
            
            if (playerChar.hp <= 0) {
                setTimeout(() => {
                    if (!gameState.inBattle) return;
                    showBattleMessage(`<strong style="color: #ff0000;">${enemy.name} venceu!</strong>`);
                    setTimeout(() => {
                        if (gameState.inBattle) {
                            endBattle(false);
                        }
                    }, 1500);
                }, 1500);
                return;
            }
        } else {
            enemyMessageText += `Ataque: ${enemyAttackRoll} ✗ (ERROU!) <br><small>Precisava de ${enemyHitChance}+ para acertar</small>`;
            showBattleMessage(enemyMessageText);
        }
        
        updateGameDisplay();
        updateBattleDisplay(playerChar, enemy);
        if (attackBtn) attackBtn.disabled = false;
    }, 2000);
}

function showBattleMessage(message) {
    document.getElementById('battle-message').innerHTML = message;
}

function endBattle(playerWon) {
    // Proteção: se não estiver em combate, não faz nada
    if (!gameState.inBattle) {
        return;
    }
    
    const bp = gameState.battleParticipants;
    
    // Remover display do personagem em combate
    const battleCharDisplay = document.getElementById('battle-character-display');
    if (battleCharDisplay) {
        battleCharDisplay.remove();
    }
    
    // Remover texto de primeiro atacante
    const firstAttackerText = document.getElementById('first-attacker-text');
    if (firstAttackerText) {
        firstAttackerText.remove();
    }
    
    // Limpar mensagens de combate
    const battleMessage = document.getElementById('battle-message');
    if (battleMessage) {
        battleMessage.innerHTML = '';
    }
    
    // Restaurar views
    const crewDisplay = document.querySelector('.crew-display');
    const eventDisplay = document.querySelector('.event-display');
    const battleDisplay = document.getElementById('battle-display');
    
    if (crewDisplay) crewDisplay.style.display = 'grid';
    if (eventDisplay) eventDisplay.style.display = 'block';
    if (battleDisplay) battleDisplay.style.display = 'none';
    
    // Desabilitar botão de ataque
    const attackBtn = document.getElementById('attack-btn');
    if (attackBtn) {
        attackBtn.disabled = false;
    }
    
    gameState.inBattle = false;
    gameState.battleParticipants = null;
    
    // Mostrar resultado
    if (bp && bp.player) {
        if (playerWon) {
            showEventText(`<strong style="color: #00ff00;">${bp.player.name} venceu o combate!</strong>`);
        } else {
            // Tripulante foi derrotado - remover do jogo
            showEventText(`<strong style="color: #ff0000;">${bp.player.name} foi derrotado no combate e removido da tripulação!</strong>`);
            
            // Remover da lista de ativos
            const playerIndex = gameState.selectedCrew.findIndex(c => c.id === bp.player.id);
            if (playerIndex !== -1) {
                const deadCrewMember = gameState.selectedCrew[playerIndex];
                deadCrewMember.isDead = true;
                gameState.selectedCrew.splice(playerIndex, 1);
                
                // Adicionar à lista global de mortos
                if (!gameState.deadCrew.some(c => c.id === deadCrewMember.id)) {
                    gameState.deadCrew.push(deadCrewMember);
                }
            }
            
            updateGameDisplay();
            updateCrewMiniCard(); // Atualizar mini card de tripulação
            
            // Verificar se ainda resta alguém na tripulação
            if (gameState.selectedCrew.length === 0) {
                // Todos os tripulantes morreram - jogo acabou
                setTimeout(() => {
                    showEventText(`<strong style="color: #ff0000;">Todos os seus tripulantes foram derrotados! O jogo acabou!</strong>`);
                    document.getElementById('event-actions').innerHTML = '<button class="btn btn-primary" onclick="showScreen(\'home-screen\');">Voltar ao Menu</button>';
                }, 1500);
                return;
            }
        }
    }
    
    showNextButton();
}

// ==================== CONTROLES DO JOGO ====================

function showEventText(text) {
    document.getElementById('event-text').innerHTML = text;
}

function showNextButton() {
    const actions = document.getElementById('event-actions');
    // Não mostrar botão próximo durante combate
    if (gameState.inBattle) {
        actions.innerHTML = '';
        return;
    }
    actions.innerHTML = '<button class="btn btn-primary" onclick="gameState.currentEventIndex++; playNextEvent();">Próximo</button>';
}

function endGame(won) {
    if (won) {
        document.getElementById('end-screen').style.display = 'block';
        const survivingCrew = gameState.selectedCrew.map(c => c.name).join(', ');
        document.getElementById('final-crew').textContent = `Sua tripulação: ${survivingCrew} - Sobreviveu!`;
    }
}

function getRandomEvent(eventArray) {
    return eventArray[Math.floor(Math.random() * eventArray.length)];
}

function getItemName(itemId) {
    const item = gameItems.find(i => i.id === itemId);
    return item ? item.name : 'Nenhum';
}

function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
    
    // Limpar estado do jogo ao voltar para o menu
    if (screenId === 'home-screen') {
        resetGameState();
    }
}

// Função para resetar o estado do jogo
function resetGameState() {
    // Resetar variáveis de estado
    gameState.selectedCrew = [];
    gameState.currentDay = 1;
    gameState.currentEventIndex = 0;
    gameState.inBattle = false;
    gameState.battleParticipants = null;
    gameState.currentPlanet = null;
    gameState.deadCrew = [];
    
    // Limpar visuais da seleção
    updateCrewDisplay();
    
    // Resetar visibilidade dos elementos do jogo (caso estivesse em combate)
    const crewDisplay = document.querySelector('.crew-display');
    const eventDisplay = document.querySelector('.event-display');
    const battleDisplay = document.getElementById('battle-display');
    const endScreen = document.getElementById('end-screen');
    const battleCharDisplay = document.getElementById('battle-character-display');
    
    if (crewDisplay) crewDisplay.style.display = 'grid';
    if (eventDisplay) eventDisplay.style.display = 'block';
    if (battleDisplay) battleDisplay.style.display = 'none';
    if (endScreen) endScreen.style.display = 'none';
    if (battleCharDisplay) battleCharDisplay.remove();

    // Resetar texto de evento
    const eventText = document.getElementById('event-text');
    if (eventText) eventText.innerHTML = "Iniciando primeiro dia...";
    
    const eventActions = document.getElementById('event-actions');
    if (eventActions) eventActions.innerHTML = "";
    
    // Desabilitar botão de começar
    const startBtn = document.getElementById('start-game-btn');
    if (startBtn) {
        startBtn.disabled = true;
        startBtn.textContent = "Iniciar Jogo"; // Resetar texto caso tenha mudado
    }

    console.log("Estado do jogo resetado com sucesso.");
}

// ==================== PERSONAGENS CUSTOMIZADOS ====================

function openCharacterCreation() {
    showScreen('character-creation-screen');
    
    // Popular dropdown de itens
    const select = document.getElementById('char-item');
    if (!select) return;
    
    select.innerHTML = '<option value="">-- Escolha um item --</option>';
    gameItems.forEach(item => {
        const option = document.createElement('option');
        option.value = item.id;
        option.textContent = item.name;
        select.appendChild(option);
    });
}

document.getElementById('character-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('char-name').value;
    const description = document.getElementById('char-description').value;
    const itemId = document.getElementById('char-item').value;
    const imageInput = document.getElementById('char-image');
    
    let imageUrl = '';
    if (imageInput.files.length > 0) {
        const reader = new FileReader();
        reader.onload = function(event) {
            imageUrl = event.target.result;
            saveCustomCharacter(name, description, imageUrl, itemId);
        };
        reader.readAsDataURL(imageInput.files[0]);
    } else {
        alert('Selecione uma imagem!');
    }
});

function saveCustomCharacter(name, description, image, itemId) {
    const newCharacter = {
        id: Date.now(),
        name: name,
        description: description,
        image: image,
        hp: 100,
        maxHp: 100,
        item: itemId
    };
    
    gameState.customCharacters.push(newCharacter);
    localStorage.setItem('venaris-custom-characters', JSON.stringify(gameState.customCharacters));
    
    preloadImage(image); // Pré-carregar a nova imagem
    document.getElementById('close-creation').click();
    renderCharacterSelection();
}

function updateCrewMiniCard() {
    // Painel removido conforme solicitado
    return;
}

// Função para mostrar modal de gerenciar tripulação
function updateCrewModalDisplay() {
    const display = document.getElementById('full-crew-display');
    
    display.innerHTML = '';
    
    // Exibir todos os tripulantes
    gameState.selectedCrew.forEach((char, index) => {
        const isInGame = index < 3; // Primeiros 3 estão em jogo
        const isDead = char.isDead; // Verificar se está morto
        
        const card = document.createElement('div');
        card.draggable = !isDead; // Não permitir arrastar mortos
        card.dataset.index = index;
        
        card.style.cssText = `
            background: ${isDead ? 'rgba(100, 100, 100, 0.4)' : (isInGame ? 'rgba(0, 255, 100, 0.2)' : 'rgba(119, 0, 255, 0.1)')};
            border: 2px solid ${isDead ? '#666' : (isInGame ? '#00ff00' : '#7700ff')};
            border-radius: 10px;
            padding: 12px;
            text-align: center;
            cursor: ${isDead ? 'default' : 'grab'};
            transition: all 0.2s ease;
            position: relative;
            width: 150px;
            user-select: none;
            opacity: ${isDead ? '0.6' : '1'};
        `;
        
        card.innerHTML = `
            <div style="position: relative;">
                <img src="${char.image}" alt="${char.name}" style="width: 70px; height: 70px; border-radius: 5px; object-fit: cover; margin-bottom: 8px; filter: ${isDead ? 'grayscale(100%)' : 'none'};">
                ${isDead ? '<div style="position: absolute; top: 20px; left: 50%; transform: translateX(-50%); background: rgba(0, 0, 0, 0.7); color: #fff; padding: 5px 10px; border-radius: 5px; font-size: 12px; font-weight: bold; z-index: 5;">MORTO</div>' : ''}
            </div>
            <p style="color: ${isDead ? '#888' : (isInGame ? '#00ff00' : '#7700ff')}; font-weight: bold; margin: 5px 0;">${char.name}</p>
            <p style="color: ${isDead ? '#888' : '#aaa'}; font-size: 12px;">HP: ${char.hp}/${char.maxHp}</p>
            <p style="color: ${isDead ? '#888' : '#aaa'}; font-size: 10px; margin-top: 5px; font-weight: bold;">${isDead ? '✗ DERROTADO' : (isInGame ? '✓ EM JOGO' : 'RESERVA')}</p>
        `;
        
        if (!isDead) {
            card.onmouseover = () => {
                card.style.background = 'rgba(119, 0, 255, 0.3)';
                card.style.transform = 'scale(1.05)';
            };
            
            card.onmouseout = () => {
                card.style.background = isInGame ? 'rgba(0, 255, 100, 0.2)' : 'rgba(119, 0, 255, 0.1)';
                card.style.transform = 'scale(1)';
            };
            
            // Click para trocar
            card.onclick = () => swapCrewPosition(index);
            
            // Drag and drop
            card.ondragstart = (e) => {
                e.dataTransfer.effectAllowed = 'move';
                e.dataTransfer.setData('text/plain', index);
                card.style.opacity = '0.5';
                card.style.cursor = 'grabbing';
            };
            
            card.ondragend = (e) => {
                card.style.opacity = '1';
                card.style.cursor = 'grab';
            };
            
            card.ondragover = (e) => {
                e.preventDefault();
                e.dataTransfer.dropEffect = 'move';
                card.style.transform = 'scale(1.1)';
            };
            
            card.ondragleave = (e) => {
                card.style.transform = 'scale(1.05)';
            };
            
            card.ondrop = (e) => {
                e.preventDefault();
                const fromIndex = parseInt(e.dataTransfer.getData('text/plain'));
                if (fromIndex !== index && !gameState.selectedCrew[fromIndex].isDead && !isDead) {
                    // Trocar posições
                    const temp = gameState.selectedCrew[fromIndex];
                    gameState.selectedCrew[fromIndex] = gameState.selectedCrew[index];
                    gameState.selectedCrew[index] = temp;
                    
                    updateGameDisplay();
                    updateCrewModalDisplay();
                }
            };
        }
        
        display.appendChild(card);
    });
}

function showManageCrewModal() {
    const modal = document.getElementById('swap-crew-modal');
    
    // Atualizar título
    const modalContent = modal.querySelector('.modal-content');
    let title = modalContent.querySelector('h2');
    if (title) title.textContent = 'Gerenciar Tripulação';
    let desc = modalContent.querySelector('p');
    if (desc) desc.textContent = 'Clique em alguém para TROCAR entre EM JOGO (verde) e RESERVA';
    
    updateCrewModalDisplay();
    modal.style.display = 'flex';
}

// Funcao para trocar posição de tripulante (entre em jogo e reserva)
function swapCrewPosition(index) {
    const crew = gameState.selectedCrew[index];
    const isInGame = index < 3;
    
    if (isInGame) {
        // Mover para reserva (final da lista)
        gameState.selectedCrew.splice(index, 1);
        gameState.selectedCrew.push(crew);
    } else {
        // Mover para em jogo (posição de um dos primeiros 3)
        // Remove de onde está
        gameState.selectedCrew.splice(index, 1);
        // Insere no final dos primeiros 3 (substitui o último)
        gameState.selectedCrew.splice(2, 0, crew);
    }
    
    updateGameDisplay();
    updateCrewMiniCard();
    updateCrewModalDisplay(); // Apenas atualiza o display, não fecha
}

// Função para mostrar modal de trocar tripulante (compatibilidade com antigo modal)
function showSwapCrewModal() {
    showManageCrewModal();
}

// Função para trocar tripulante - compatibilidade
function swapCrewMember(index) {
    swapCrewPosition(index);
}

// ==================== EVENT LISTENERS ====================

// Remove redundant event listeners here as they are handled in setupGameButtons() or in their specific functions
document.addEventListener('DOMContentLoaded', () => {
    // initializeGame() será chamado pelo script.js quando o usuário clicar em "Jogar"
    
    // Adicionar listener para o botão de ataque (que é fixo no HTML)
    document.getElementById('attack-btn')?.addEventListener('click', performAttack);
    
    // Adicionar listener para o botão de retorno ao menu final
    document.getElementById('return-to-menu')?.addEventListener('click', () => {
        resetGameState();
        showScreen('home-screen');
    });

    // Fechar modal de gerenciar tripulação
    document.getElementById('swap-crew-modal')?.addEventListener('click', function(e) {
        if (e.target.classList.contains('modal-close') || e.target.classList.contains('modal-overlay')) {
            this.style.display = 'none';
        }
    });
});
