# 🎮 GUIA COMPLETO - SIMULADOR DE EVENTOS VENARIS

## 📋 ÍNDICE
1. Estrutura do Jogo
2. Onde Adicionar Dados
3. Personagens
4. Eventos
5. Itens
6. Planetas
7. Como Funciona o Jogo

---

## 1. ESTRUTURA DO JOGO

### Fluxo do Jogo:
```
Menu Inicial → Clica "Jogar" → Tela de Seleção de Personagens 
   → Escolhe 3 personagens → Clica "Iniciar" → Tela do Jogo
   → 10 dias × 5 eventos por dia → Final (Sucesso!)
```

### Arquivos Principais:
- **index.html** - Contém todas as telas do jogo
- **game-logic.js** - Lógica do jogo (AQUI VOCÊ ADICIONA OS DADOS)
- **style.css** - Estilos (já pronto)
- **script.js** - Lógica anterior do site (não mexer)

---

## 2. ONDE ADICIONAR DADOS

### 📌 TUDO ESTÁ NO ARQUIVO: `game-logic.js`

Abra esse arquivo e procure pelas seções marcadas com `// TODO:` ou comentários.

---

## 3. PERSONAGENS

### Local: `game-logic.js` - Linhas ~15

**Adicione aqui os 10 personagens iniciais:**

```javascript
const initialCharacters = [
    {
        id: 1,
        name: "Nyx",
        description: "Explorador experiente",
        image: "url_da_imagem_aqui",
        hp: 100,
        maxHp: 100,
        item: "item1"  // Use um ID de item
    },
    {
        id: 2,
        name: "Zephyr",
        description: "Técnico de nave",
        image: "url_da_imagem_aqui",
        hp: 100,
        maxHp: 100,
        item: "item2"
    },
    // ... adicione os outros 8 personagens
];
```

### Campos Obrigatórios:
- **id**: Número único (1, 2, 3...)
- **name**: Nome do personagem
- **description**: Descrição curta (1-2 linhas)
- **image**: URL da imagem (ou caminho local)
- **hp**: Vida inicial (recomendado 100)
- **maxHp**: Vida máxima (recomendado 100)
- **item**: ID do item que ele começa com

### Exemplo com Imagem Local:
Se as imagens estão em uma pasta `images/`:
```javascript
image: "images/nyx.png"
```

---

## 4. ITENS

### Local: `game-logic.js` - Linhas ~30

**Itens do jogo (cada personagem começa com um):**

```javascript
const gameItems = [
    { id: "item1", name: "Faca Plasma", damage: 10 },
    { id: "item2", name: "Escudo Cristal", defense: 15 },
    { id: "item3", name: "Granada Ácida", damage: 20 },
    { id: "item4", name: "Detector", special: "scan" },
    // ... adicione mais itens
];
```

### Notas sobre Itens:
- Use um ID único para cada item
- O nome aparece quando o personagem é selecionado
- Você pode definir damage, defense, ou special conforme quiser

---

## 5. PLANETAS

### Local: `game-logic.js` - Linhas ~40

**Um planeta será sorteado no início do jogo:**

```javascript
const planets = [
    { 
        id: "planet1", 
        name: "Kepler-442b", 
        description: "Um mundo gelado e hostil" 
    },
    { 
        id: "planet2", 
        name: "TRAPPIST-1e", 
        description: "Planeta com chuvas ácidas" 
    },
    { 
        id: "planet3", 
        name: "Proxima-c", 
        description: "Deserto rochoso cheio de cavernas" 
    },
    // ... adicione mais planetas
];
```

---

## 6. EVENTOS

### ⚠️ IMPORTANTE: Cada dia tem 5 eventos
### Há 5 TIPOS de eventos: Passagem, Negativo, Positivo, Novo Tripulante, Combate

### TIPO 1: PASSAGEM (Não faz nada)
**Local: Linhas ~60**

```javascript
const passageEvents = [
    "O dia transcorre sem maiores incidentes.",
    "A tripulação descansa e se prepara para o dia seguinte.",
    "Tudo permanece calmo... por enquanto.",
    // ... adicione mais mensagens
];
```

### TIPO 2: NEGATIVO (Alguém leva dano)
**Local: Linhas ~70**

```javascript
const negativeEvents = [
    {
        text: "Uma criatura desconhecida ataca!",
        damage: 15
    },
    {
        text: "Um acidente na nave causa ferimentos!",
        damage: 20
    },
    // ... adicione mais
];
```

⚠️ **damage**: Quanto de vida é perdido (número)

### TIPO 3: POSITIVO (Recupera vida)
**Local: Linhas ~85**

```javascript
const positiveEvents = [
    {
        text: "Você encontra uma estação abandonada com suprimentos!",
        healing: 30
    },
    {
        text: "A tripulação descobre água fresca!",
        healing: 25
    },
    // ... adicione mais
];
```

✅ **healing**: Quanto de vida é recuperada (número)

### TIPO 4: NOVO TRIPULANTE (Adiciona alguém)
**Local: Linhas ~100**

```javascript
const newCrewEvents = [
    {
        text: "Você encontra um sobrevivente da nave!",
        crewAddition: true
    },
    {
        text: "Sinal de vida! Um novo aliado se junta ao grupo!",
        crewAddition: true
    },
    // ... adicione mais
];
```

⚠️ **crewAddition**: Deve ser `true` (adiciona um personagem aleatório do banco)

### TIPO 5: COMBATE (Inicia uma luta)
**Local: Linhas ~115**

```javascript
const combatEvents = [
    {
        text: "Uma criatura agressiva bloqueia seu caminho!",
        enemy: { 
            name: "Criatura Alienígena", 
            hp: 50, 
            damage: 10 
        }
    },
    {
        text: "Um robô destruidor ataca!",
        enemy: { 
            name: "Robô Destruidor", 
            hp: 80, 
            damage: 15 
        }
    },
    // ... adicione mais
];
```

⚠️ **enemy**: Objeto com nome, hp e damage do inimigo

---

## 7. COMO FUNCIONA O JOGO

### SELEÇÃO DE PERSONAGENS
1. Jogador vê todos os personagens (iniciais + customizados)
2. Clica em 3 para selecionar
3. Pode clicar em "+ Adicionar Personagem Customizado" para criar

### CRIAÇÃO CUSTOMIZADA
1. Nome, descrição, foto, item
2. Dados salvos no navegador (localStorage)
3. Aparecem junto com os iniciais

### GAMEPLAY (10 DIAS)
- **Cada dia**: 5 eventos aleatórios
- **Cada evento**: Um dos 5 tipos é sorteado
- **Evento sorteado**: Uma mensagem aleatória daquele tipo
- **Personagem afetado**: Sorteado aleatoriamente

### COMBATE
1. Um personagem é sorteado para lutar
2. Sistema de dados:
   - Ataque: Precisa de 12+ em um dado (1-20)
   - Se acertou: Rola dado de dano (1-20) + 5
   - Se errou: Anuncia falha
3. Inimigo contra-ataca da mesma forma
4. Quem zerar HP primeiro perde

### Vitória
- Sobreviver até o **Dia 10** completamente
- Mensagem "SUCESSO: Planeta Explorado"

---

## 📝 EXEMPLO COMPLETO

### Adicionar um evento negativo:

1. Abra `game-logic.js`
2. Procure por `const negativeEvents = [`
3. Adicione antes do fechamento `];`:

```javascript
{
    text: "Um vaporizador tóxico surge do solo!",
    damage: 25
},
```

### Ficaria assim:
```javascript
const negativeEvents = [
    {
        text: "Uma criatura desconhecida ataca!",
        damage: 15
    },
    {
        text: "Um acidente na nave causa ferimentos!",
        damage: 20
    },
    {
        text: "Um vaporizador tóxico surge do solo!",
        damage: 25
    },
];
```

---

## 🎯 CHECKLIST

- [ ] Adicionei 10 personagens iniciais
- [ ] Adicionei 3+ itens do jogo
- [ ] Adicionei 2+ planetas
- [ ] Adicionei eventos de PASSAGEM
- [ ] Adicionei eventos NEGATIVOS
- [ ] Adicionei eventos POSITIVOS
- [ ] Adicionei eventos de NOVO TRIPULANTE
- [ ] Adicionei eventos de COMBATE
- [ ] Testei selecionando 3 personagens
- [ ] Testei o jogo funcionando até o dia 10

---

## 🐛 DICAS DE DEBUG

Se algo não funcionar:
1. Abra o console (F12)
2. Procure por erros vermelhos
3. Verifique se os nomes dos arrays estão certos
4. Verifique se as IDs coincidem (ex: item1 existe em gameItems)

---

## 📞 ESTRUTURA FINAL

Após adicionar TUDO, você terá:
- 10 personagens base
- Possibilidade de criar mais
- 3+ planetas
- 5+ eventos de cada tipo (25+ eventos totais)
- Sistema de combate completo
- 10 dias de exploração

**Bom jogo!** 🚀🌌
