// menssagen.js

function gerarMensagensParaClarisse() {
    const mensagens = [];

    // =================================================================
    // PARTE 1: 50 Mensagens Especiais (feitas à mão, alto impacto)
    // =================================================================
    const especiais = [
        "Clarisse, você é a poesia mais linda que a vida já escreveu. 📖✨",
        "Clarisse, sua existência é a prova de que milagres acontecem. 🌟",
        "Clarisse, não há nada no mundo que brilhe mais que sua alma. 💫",
        "Clarisse, você é o meu 'para sempre' favorito. 💖",
        "Clarisse, sua risada é a trilha sonora dos meus melhores dias. 🎶",
        "Clarisse, o mundo fica mais colorido quando você chega. 🌈",
        "Clarisse, você tem o dom de curar com um simples olhar. 🩹❤️",
        "Clarisse, sua bondade é um farol em meio à tempestade. ⚓",
        "Clarisse, amar você é a coisa mais fácil que já fiz. 💕",
        "Clarisse, você é a definição de tudo que é belo e puro. 🌸",
        "Clarisse, sua energia renova minhas forças todos os dias. 🔋✨",
        "Clarisse, você é a calmaria que eu sempre busquei. 🌊",
        "Clarisse, cada detalhe seu é uma obra de arte. 🎨",
        "Clarisse, você é a resposta para orações que nem fiz. 🙏",
        "Clarisse, sua luz não ofusca, ela ilumina e acolhe. 🕯️",
        "Clarisse, você é a minha notificação favorita. 📱💓",
        "Clarisse, sua presença transforma lugares comuns em paraísos. 🏝️",
        "Clarisse, você é doce como a brisa da primavera. 🍃",
        "Clarisse, ter você por perto é ter sorte no amor e no jogo da vida. 🍀",
        "Clarisse, sua inteligência e sua beleza competem para ver quem brilha mais. 🧠✨",
        "Clarisse, você é rara, única e insubstituível. 💎",
        "Clarisse, sua voz acalma até meus pensamentos mais agitados. 🧘‍♀️",
        "Clarisse, você é o sol que derrete qualquer gelo no coração. ☀️",
        "Clarisse, sua empatia é um superpoder que muda o mundo. 🦸‍♀️",
        "Clarisse, você merece o universo inteiro e mais um pouco. 🪐",
        "Clarisse, sua delicadeza é a sua maior força. 🌹",
        "Clarisse, você é a inspiração por trás dos meus melhores sorrisos. 😄",
        "Clarisse, não existem palavras no dicionário para descrever você. 📚",
        "Clarisse, você é a flor mais radiante de qualquer jardim. 🌻",
        "Clarisse, sua companhia é o melhor presente que o tempo me deu. ⏰🎁",
        "Clarisse, você é sinônimo de amor e perfeição. 💖",
        "Clarisse, sua essência é inconfundível e inesquecível. 🌺",
        "Clarisse, você é a paz em meio ao caos. 🏳️",
        "Clarisse, sua felicidade é o meu objetivo diário. 🎯",
        "Clarisse, você é mar, céu e terra; meu mundo todo. 🌍",
        "Clarisse, sua intuição nunca falha, assim como sua beleza. 🔮",
        "Clarisse, você é a protagonista da sua própria história linda. 🎬",
        "Clarisse, sua determinação move montanhas. 🏔️",
        "Clarisse, você é luz estelar em forma humana. ✨",
        "Clarisse, seu abraço é o único lugar onde o tempo para. ⏳",
        "Clarisse, você é a rainha do seu próprio destino. 👑",
        "Clarisse, sua elegância vem de dentro para fora. 💅",
        "Clarisse, você é o sonho mais bonito que virou realidade. 💤✨",
        "Clarisse, sua gratidão pela vida é contagiante. 🙌",
        "Clarisse, você é uma fortaleza envolta em flores. 🏰🌸",
        "Clarisse, sua sabedoria ilumina caminhos escuros. 💡",
        "Clarisse, você é a música favorita que nunca canso de ouvir. 🎧",
        "Clarisse, sua autenticidade é o que te faz tão especial. 🔑",
        "Clarisse, você é amor da cabeça aos pés. ❤️",
        "Clarisse, simplesmente obrigado por existir. 🙏💖"
    ];

    mensagens.push(...especiais);

    // =================================================================
    // PARTE 2: O GERADOR GRAMATICAL (Para chegar a 1200)
    // =================================================================
    
    // Listas de VOCABULÁRIO FEMININO PROJETADAS PARA CONCORDÂNCIA
    const adjetivosFemininos = [
        "maravilhosa", "incrível", "esplêndida", "radiante", "única", "perfeita", 
        "doce", "gentil", "amorosa", "carinhosa", "brilhante", "extraordinária", 
        "fantástica", "encantadora", "divina", "preciosa", "amada", "linda", 
        "iluminada", "mágica", "inspiradora", "poderosa", "forte", "corajosa", 
        "determinada", "otimista", "alegre", "feliz", "grata", "generosa", 
        "sincera", "autêntica", "genuína", "inesquecível", "bela", "formosa", 
        "deslumbrante", "magnífica", "gloriosa", "afetuosa", "cativante", "fascinante"
    ];

    // Substantivos que aceitam "SUA" ou "A"
    const caracteristicasFemininas = [
        "alma", "luz", "energia", "beleza", "bondade", "ternura", "presença", 
        "essência", "voz", "risada", "atitude", "personalidade", "inteligência", 
        "sabedoria", "criatividade", "dedicação", "paixão", "força", "coragem", 
        "delicadeza", "elegância", "aura", "vibração", "amizade", "companhia", 
        "vida", "natureza", "história", "jornada", "emoção", "doçura", 
        "vitória", "esperança", "fé"
    ];

    // Verbos para conectar
    const verbos = [
        "ilumina tudo", "encanta a todos", "faz o dia melhor", "traz paz", 
        "inspira amor", "transforma o mundo", "aquece o coração", "é pura magia", 
        "é um presente", "brilha como sol", "é inesquecível", "marca a vida", 
        "é poesia pura", "merece o mundo", "é um exemplo", "irradia alegria", 
        "contagia com o bem", "floresce a cada dia", "é puro carinho"
    ];

    const emojis = [
        "💕", "💖", "💗", "💝", "💞", "💓", "💘", "🌸", "🌺", "🌷", 
        "🌹", "🌻", "🌼", "✨", "⭐", "🌟", "💫", "🦄", "🦋", "🥰", 
        "😊", "😍", "😘", "🤗", "🤩", "❤️", "🧡", "💛", "💚", "💙", "💜"
    ];

    const inicios = [
        "saiba que", "a verdade é que", "Clarisse, eu acho que", 
        "Clarisse, nunca esqueça que", "você prova que", "Clarisse, vejo que", 
        "Clarisse, sinto que", "Pequeno lembrete:,", "Nota do dia: Clarisse,"
    ];

    // Gerar as 1150 mensagens restantes para completar 1200
    // Usando lógica de combinação para evitar repetição exata
    
    let contador = mensagens.length;
    
    while (contador < 1200) {
        const adj = adjetivosFemininos[Math.floor(Math.random() * adjetivosFemininos.length)];
        const noun = caracteristicasFemininas[Math.floor(Math.random() * caracteristicasFemininas.length)];
        const verb = verbos[Math.floor(Math.random() * verbos.length)];
        const emoji = emojis[Math.floor(Math.random() * emojis.length)];
        const intro = inicios[Math.floor(Math.random() * inicios.length)];

        // Sorteia um dos 4 templates gramaticais SEGUROS (sem erro de gênero)
        const tipo = Math.floor(Math.random() * 4);
        let msg = "";

        if (tipo === 0) {
            // Ex: Clarisse, sua alma é maravilhosa!
            msg = `Clarisse, sua ${noun} é simplesmente ${adj}! ${emoji}`;
        } else if (tipo === 1) {
            // Ex: Clarisse, você é uma mulher determinada e linda!
            msg = `Clarisse, você é uma mulher tão ${adj}! ${emoji}`;
        } else if (tipo === 2) {
            // Ex: Clarisse, vejo que sua beleza ilumina tudo!
            msg = `${intro} sua ${noun} ${verb}! ${emoji}`;
        } else {
            // Ex: Clarisse, nenhuma beleza se compara à sua!
            msg = `Clarisse, nenhuma ${noun} é tão ${adj} quanto a sua! ${emoji}`;
        }

        mensagens.push(msg);
        contador++;
    }

    // Embaralhar levemente para não ficarem as 50 primeiras sempre no topo, 
    // se desejar misturar as manuais com as geradas.
    // Se preferir as manuais primeiro, remova esta parte.
    for (let i = mensagens.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [mensagens[i], mensagens[j]] = [mensagens[j], mensagens[i]];
    }

    return mensagens;
}

// Gera a lista final
const allMessages = gerarMensagensParaClarisse();

// Se você estiver rodando isso num ambiente com console, 
// isso vai provar que tem 1200 mensagens.
// console.log(`Total de mensagens geradas: ${allMessages.length}`);
