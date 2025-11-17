// Array com mais de 1000 mensagens fofas para Clarisse
const messages = [
    "Clarisse, você é incrível! ✨",
    "Clarisse, seu sorriso ilumina meu dia! ☀️",
    "Clarisse, você tem um coração de ouro! 💛",
    "Clarisse, você é especial demais! 💕",
    "Clarisse, seu jeito único me encanta! 🌸",
    "Clarisse, você faz tudo ficar melhor! 💖",
    "Clarisse, sua presença é um presente! 🎁",
    "Clarisse, você é pura luz! ✨",
    "Clarisse, seu carinho aquece o coração! 🔥",
    "Clarisse, você é simplesmente perfeita! 💝",
];

// Função para gerar mais mensagens fofas
function generateMessages() {
    const templates = [
        "Você é {adj}! {emoji}",
        "Seu {noun} me {verb}! {emoji}",
        "Você tem um {noun} de {adj}! {emoji}",
        "Você é {adj} demais! {emoji}",
        "Seu {noun} {verb} meu dia! {emoji}",
        "Você faz tudo ficar {adj}! {emoji}",
        "Sua {noun} é um {noun}! {emoji}",
        "Você é pura {noun}! {emoji}",
        "Seu {noun} {verb} o coração! {emoji}",
        "Você é simplesmente {adj}! {emoji}",
    ];

    const adjectives = [
        "incrível", "especial", "único", "perfeito", "adorável", "doce", "gentil",
        "amoroso", "carinhoso", "brilhante", "maravilhoso", "extraordinário", "fantástico",
        "encantador", "divino", "precioso", "querido", "amado", "fofo", "lindo",
        "belo", "radiante", "iluminado", "mágico", "inspirador", "motivador", "forte",
        "corajoso", "determinado", "persistente", "otimista", "alegre", "feliz",
        "grato", "generoso", "compassivo", "empático", "sincero", "autêntico", "genuíno"
    ];

    const nouns = [
        "sorriso", "coração", "jeito", "presença", "carinho", "amor", "alma",
        "energia", "vibração", "essência", "espírito", "luz", "brilho", "calor",
        "abraço", "olhar", "voz", "toque", "gesto", "palavra", "ação", "atitude",
        "personalidade", "caráter", "bondade", "generosidade", "gentileza", "doçura",
        "ternura", "sensibilidade", "empatia", "compreensão", "paciência", "sabedoria"
    ];

    const verbs = [
        "ilumina", "aquece", "encanta", "toca", "inspira", "motiva", "alegra",
        "faz feliz", "conforta", "acalma", "energiza", "renova", "transforma",
        "eleva", "fortalece", "cura", "renova", "revigora", "animar", "emociona",
        "comove", "surpreende", "fascina", "cativar", "conquista", "encanta"
    ];

    const emojis = [
        "💕", "💖", "💗", "💝", "💞", "💓", "💘", "💟", "🌸", "🌺", "🌷",
        "🌹", "🌻", "🌼", "✨", "⭐", "🌟", "💫", "🦄", "🐰", "🐱", "🐶",
        "🐻", "🐼", "💐", "🎀", "🎁", "🎂", "🍰", "🧁", "🍭", "🍬", "🍫",
        "🍪", "🍩", "🥰", "😊", "😍", "🥺", "😘", "😗", "😙", "😚", "☺️",
        "🤗", "🤩", "😻", "💋", "👄", "💋", "🌙", "☀️", "🌈", "🦋", "🌺"
    ];

    const generated = [];
    
    // Adiciona as mensagens base
    generated.push(...messages);
    
    // Gera mensagens usando templates
    for (let i = 0; i < 500; i++) {
        const template = templates[Math.floor(Math.random() * templates.length)];
        const adj = adjectives[Math.floor(Math.random() * adjectives.length)];
        const noun = nouns[Math.floor(Math.random() * nouns.length)];
        const verb = verbs[Math.floor(Math.random() * verbs.length)];
        const emoji = emojis[Math.floor(Math.random() * emojis.length)];
        
        let msg = template
            .replace(/{adj}/g, adj)
            .replace(/{noun}/g, noun)
            .replace(/{verb}/g, verb)
            .replace(/{emoji}/g, emoji);
        
        generated.push(msg);
    }
    
    // Adiciona mais mensagens diretas para Clarisse
    const directMessages = [
        "Clarisse, você merece todo o amor do mundo! 💕",
        "Clarisse, seus sonhos são válidos! ✨",
        "Clarisse, você é mais forte do que imagina! 💪",
        "Clarisse, cada dia com você é especial! 🌸",
        "Clarisse, você traz alegria por onde passa! 😊",
        "Clarisse, seu coração é puro e belo! 💖",
        "Clarisse, você inspira todos ao redor! 🌟",
        "Clarisse, você é uma bênção! 🙏",
        "Clarisse, seu sorriso é contagiante! 😄",
        "Clarisse, você faz a diferença! 💫",
        "Clarisse, você é amada além das palavras! 💝",
        "Clarisse, seu jeito único é seu superpoder! 🦄",
        "Clarisse, você é uma estrela brilhante! ⭐",
        "Clarisse, cada momento com você é precioso! 💎",
        "Clarisse, você é corajosa e inspiradora! 🦁",
        "Clarisse, seu amor transforma vidas! 💕",
        "Clarisse, você é uma obra de arte! 🎨",
        "Clarisse, seu coração é um jardim de flores! 🌺",
        "Clarisse, você espalha felicidade! 🎉",
        "Clarisse, você é um presente para o mundo! 🎁",
        "Clarisse, seu carinho é inesquecível! 💗",
        "Clarisse, você é pura magia! ✨",
        "Clarisse, seu jeito doce aquece almas! 🍯",
        "Clarisse, você é uma luz na escuridão! 💡",
        "Clarisse, seu abraço é reconfortante! 🤗",
        "Clarisse, você é única e especial! 🌈",
        "Clarisse, seu coração é gigante! ❤️",
        "Clarisse, você merece toda a felicidade! 😊",
        "Clarisse, seu sorriso ilumina o mundo! ☀️",
        "Clarisse, você é uma inspiração! 🌟",
        "Clarisse, seu amor é infinito! ♾️",
        "Clarisse, você é perfeita do jeito que é! 💯",
        "Clarisse, seu jeito gentil toca corações! 💝",
        "Clarisse, você é uma bênção disfarçada! 🙌",
        "Clarisse, seu carinho é incondicional! 💕",
        "Clarisse, você faz o mundo melhor! 🌍",
        "Clarisse, seu coração é puro e verdadeiro! 💖",
        "Clarisse, você é amada além da compreensão! 💗",
        "Clarisse, seu sorriso é o sol! ☀️",
        "Clarisse, você é uma joia rara! 💎",
        "Clarisse, seu jeito único é adorável! 🥰",
        "Clarisse, você espalha amor por onde vai! 💕",
        "Clarisse, seu coração é um oceano de bondade! 🌊",
        "Clarisse, você é uma estrela cadente! 🌠",
        "Clarisse, seu carinho é como um abraço quente! 🤗",
        "Clarisse, você é uma fonte de alegria! 😄",
        "Clarisse, seu amor é puro e sincero! 💝",
        "Clarisse, você é uma inspiração diária! ✨",
        "Clarisse, seu jeito doce é inesquecível! 🍭",
        "Clarisse, você é uma luz brilhante! 💫",
    ];
    
    generated.push(...directMessages);
    
    // Gera mais mensagens variadas
    for (let i = 0; i < 500; i++) {
        const adj1 = adjectives[Math.floor(Math.random() * adjectives.length)];
        const adj2 = adjectives[Math.floor(Math.random() * adjectives.length)];
        const noun1 = nouns[Math.floor(Math.random() * nouns.length)];
        const noun2 = nouns[Math.floor(Math.random() * nouns.length)];
        const verb1 = verbs[Math.floor(Math.random() * verbs.length)];
        const emoji = emojis[Math.floor(Math.random() * emojis.length)];
        
        const patterns = [
            `Você é ${adj1} e ${adj2}! ${emoji}`,
            `Seu ${noun1} ${verb1} meu ${noun2}! ${emoji}`,
            `Você tem um ${noun1} ${adj1}! ${emoji}`,
            `Seu ${noun1} é ${adj1}! ${emoji}`,
            `Você ${verb1} com seu ${noun1}! ${emoji}`,
            `Seu ${noun1} ${verb1} tudo! ${emoji}`,
            `Você é ${adj1} no seu ${noun1}! ${emoji}`,
            `Seu ${noun1} é puro ${noun2}! ${emoji}`,
        ];
        
        const pattern = patterns[Math.floor(Math.random() * patterns.length)];
        generated.push(pattern);
    }
    
    return generated;
}

// Gera todas as mensagens
const allMessages = generateMessages();

