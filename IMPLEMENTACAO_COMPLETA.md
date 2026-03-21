# ✅ SIMULADOR DE EVENTOS - ESTRUTURA CRIADA

## 🎮 O QUE FOI IMPLEMENTADO

Toda a estrutura base do simulador de eventos está pronta! Faltam apenas os **dados** (personagens, eventos, itens, planetas).

---

## 📂 ARQUIVOS CRIADOS/MODIFICADOS

### ✨ NOVO:
1. **game-logic.js** - Lógica completa do jogo
2. **JOGO_SETUP_GUIDE.md** - Guia detalhado para adicionar dados
3. **LOGO_INSTRUCTIONS.md** - Como adicionar logos (já existia)

### 📝 MODIFICADO:
1. **index.html** - Adicionadas 3 novas telas
2. **style.css** - Adicionados estilos para o jogo
3. **script.js** - Conexão do botão "Jogar"

---

## 🎯 FLUXO DO JOGO (PRONTO)

```
Menu Inicial
    ↓ (clica "Jogar")
Tela de Seleção de Personagens
    ↓ (escolhe 3 + clica "Iniciar")
Tela do Jogo
    ├─ Dia 1-9: 5 eventos cada
    │  ├─ Sorteio de tipo de evento
    │  ├─ Random do event daquele tipo
    │  ├─ Aplicação da consequência
    │  └─ Próximo evento
    │
    └─ Dia 10: Sucesso! Planeta Explorado

```

---

## 🛠️ O QUE JÁ FUNCIONA

✅ **Tela de Seleção**
- Mostrar personagens em grid
- Selecionar 3 personagens
- Botão "+ Adicionar Personagem" funcional
- Iniciar jogo quando tiver 3 selecionados

✅ **Criação de Personagens**
- Formulário para nome, descrição, foto, item
- Salvar no navegador (localStorage)
- Aparecer junto com os 10 iniciais

✅ **Tela de Jogo**
- Exibir dia atual (1-10)
- Mostrar planeta sorteado
- Mostrar tripulação com HP
- Barra de saúde visual

✅ **Sistema de Eventos**
- Sorteio aleatório de tipo
- Sorteio aleatório de evento dentro do tipo
- Aplicação de dano/cura
- Adição de novo tripulante

✅ **Sistema de Combate**
- Dado de ataque (1-20)
- Dado de dano (1-20)
- Turnos de ataque alternados
- Vitória/Derrota

✅ **Progressão**
- 5 eventos por dia
- Transição automática entre dias
- Detecção de vitória (Dia 10)
- Tela de sucesso

---

## 📋 PRÓXIMOS PASSOS (O QUE VOCÊ PRECISA FAZER)

### 1. Abra `game-logic.js`

### 2. Adicione os 10 Personagens Iniciais
**Entre as linhas 10-20:**
```javascript
const initialCharacters = [
    // SEU CÓDIGO AQUI
];
```

**Mínimo: 1 personagem de cada tipo com tudo preenchido**

### 3. Adicione os Itens do Jogo
**Entre as linhas 30-35:**
```javascript
const gameItems = [
    // SEU CÓDIGO AQUI
];
```

**Mínimo: 3 itens**

### 4. Adicione os Planetas
**Entre as linhas 40-45:**
```javascript
const planets = [
    // SEU CÓDIGO AQUI
];
```

**Mínimo: 1 planeta (pode ser apenas um)**

### 5. Adicione os EVENTOS
**Total de 5 tipos × múltiplos eventos cada = ~25 eventos**

#### Tipo 1: Passagem (Linhas ~60)
```javascript
const passageEvents = [
    // Apenas texto, sem consequências
];
```

#### Tipo 2: Negativo (Linhas ~70)
```javascript
const negativeEvents = [
    // Alguém leva dano
    { text: "...", damage: 15 }
];
```

#### Tipo 3: Positivo (Linhas ~85)
```javascript
const positiveEvents = [
    // Alguém recupera vida
    { text: "...", healing: 30 }
];
```

#### Tipo 4: Novo Tripulante (Linhas ~100)
```javascript
const newCrewEvents = [
    // Novo membro entra
    { text: "...", crewAddition: true }
];
```

#### Tipo 5: Combate (Linhas ~115)
```javascript
const combatEvents = [
    // Inicia um combate
    { text: "...", enemy: { name: "...", hp: 50, damage: 10 } }
];
```

---

## 🎨 AMOSTRA DO QUE ADICIONAR

### Personagem Exemplo:
```javascript
{
    id: 1,
    name: "Zorn",
    description: "Um Eldari guerreiro experiente",
    image: "https://via.placeholder.com/150",
    hp: 100,
    maxHp: 100,
    item: "item1"
}
```

### Item Exemplo:
```javascript
{ id: "item1", name: "Espada de Cristal", damage: 15 }
```

### Eventos Exemplo:
```javascript
// Passagem
"O dia passa sem incidentes."

// Negativo
{ text: "Monstresia alienígena ataca!", damage: 20 }

// Positivo
{ text: "Encontram alimentos e água!", healing: 40 }

// Novo Tripulante
{ text: "Encontram um sobrevivente!", crewAddition: true }

// Combate
{ 
    text: "Criatura hostil bloqueia o caminho!", 
    enemy: { name: "Repta-Hulk", hp: 60, damage: 12 } 
}
```

---

## 🧪 COMO TESTAR

1. Abra `index.html` no navegador
2. Clique em "Jogar"
3. Adicione/selecione personagens
4. Clique em "Iniciar Jogo"
5. Acompanhe os 10 dias de exploração

---

## ⚠️ IMPORTANTE

- **Tudo precisa estar em game-logic.js**
- Não mexe nos outros arquivos (script.js, style.css)
- Use as imagens que quiser (local ou URL)
- Os eventos são sorteados ALEATORIAMENTE

---

## 📞 DÚVIDAS COMUNS

**P: E se eu tiver menos de 10 personagens?**  
R: Fica 5+ (você consegue criar mais no "+ Adicionar Personagem")

**P: Posso alterar os 10 dias?**  
R: Sim, mude `maxDays: 10` no gameState (linha ~115)

**P: Posso mudar a vida dos personagens?**  
R: Sim, mude `maxHp: 100` em cada personagem

**P: Como adiciono descrição no inimigo?**  
R: Pode adicionar um campo `description` no enemy object

**P: Os eventos podem ter mais informações?**  
R: Sim! Adicione campos que quiser, a estrutura é flexível

---

## 🚀 VOCÊ ESTÁ PRONTO!

A estrutura agora está completamente funcional. Basta adicionar seus personagens, eventos, itens e planetas e o jogo está 100% operacional!

**Divirta-se criando o universo de Venaris!** 🌌⚡
