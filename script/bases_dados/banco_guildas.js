// ==================================================================================
// ARQUIVO: banco_guildas.js
// Dados das guildas disponíveis para seleção na ficha de personagem
// ==================================================================================

const dadosGuildas = {
    "ardor": {
        bonus: "Agilidade",
        filtrosMaji: ["sinal", "base"],
        slotsArmas: [
            { label: "Luva de Combate", item: "luva" },
            { label: "Luva de Combate", item: "luva" },
            { label: "Faca-T", item: "faca_t" },
            { label: "Faca-T", item: "faca_t" }
        ],
        slotsTraje: [
            { label: "Traje de Couro", item: "couro" }
        ],
        riqueza: "2",
        maji: "Maji Base de Sinal, Ataque Acelerado, duas Maji à sua escolha.",
        hab1: { nome: "Força e Esquiva", desc: "Use a força do inimigo contra ele. Ao realizar a reação Esquiva com sucesso contra um ataque a Alcance 0, o inimigo sofre dano igual à Força dele, em d6." },
        hab2: { nome: "Disciplina Formidável", desc: "Pode realizar a Manobra Crítica Desarmar com 1 Crítico em vez de 2, porém apenas com ataques desarmados a Alcance 0.", req: "Força 1" },
        hab3: { nome: "Arma Temporária", desc: "Gaste 1 Ação para pegar um objeto (pedra, cadeira, garrafa), que causa 2d6 de dano. Sua Força é usada para atacar e, após acertar um golpe, a arma quebra.", req: "Sentidos 1" },
        hab4: { nome: "Fraqueza do Alvo", desc: "Gaste 2 Ações para entender os movimentos e fragilidades de um alvo. Você recebe +1d6 de dano em qualquer ataque desarmado contra ele até o fim da cena.", req: "Sentidos 1" }
    },
    "blugarony": {
        bonus: "Força",
        filtrosMaji: ["sinal", "base"],
        slotsArmas: [
            { label: "Arma ou Sub-Arma", filtros: ["arma", "sub-arma"] }
        ],
        slotsTraje: [
            { label: "Traje de Malha", filtros: ["malha"] }
        ],
        riqueza: "3",
        maji: "Maji Base de Sinal, duas Maji de Sinal, duas Maji à sua escolha.",
        hab1: { nome: "Impacto Devastador", desc: "Ao realizar um ataque desarmado, você pode gastar +1 Ação para causar +1d6 de dano. Além disso, impede o alvo de escolher a reação Defesa." },
        hab2: { nome: "Disciplina Formidável", desc: "Uma vez por cena, você pode ignorar qualquer Penalidade que esteja sofrendo até o fim do seu Turno de Equipe.", req: "Vigor 1" },
        hab3: { nome: "Maratona Implacável", desc: "Sempre que acertar um ataque desarmado, você pode se mover para um local a Alcance 1 sem gastar ação.", req: "Agilidade 1, Força 1" },
        hab4: { nome: "Ritmo Ascendente", desc: "Uma vez por Turno de Equipe, ao acertar um ataque desarmado, você recebe 1 Ação extra.", req: "Agilidade 4" }
    },
    "borealis": {
        bonus: "Agilidade",
        filtrosMaji: ["fala", "vento", "base"],
        slotsArmas: [
            { label: "Espada Leve", filtros: ["espada", "leve"], modo: "E" },
            { label: "Espada Leve", filtros: ["espada", "leve"], modo: "E" },
            { label: "Balestra", filtros: ["balestra"] }
        ],
        slotsTraje: [
            { label: "Traje de Couro", filtros: ["couro"] }
        ],
        riqueza: "3",
        maji: "Maji Base de Fala, duas Maji de Vento, uma Maji à sua escolha.",
        hab1: { nome: "Dupla Defensiva", desc: "Em Dupla Empunhadura ao usar a reação Defesa, recebe Defesa +4 (em vez de +2)." },
        hab2: { nome: "Contrafluxo", desc: "Enquanto estiver empunhando duas armas, uma vez por rodada, ao usar a reação Contra-ataque, se você vencer o teste, além de causar seu dano, você também anula todo o dano que o oponente causaria.", req: "Agilidade 4" },
        hab3: { nome: "Corte X", desc: "Enquanto estiver empunhando duas armas, ao realizar um ataque, você pode gastar 1 Ação para atacar novamente com a segunda arma.", req: "Agilidade 1" },
        hab4: { nome: "Ponto de Ruptura", desc: "Você identifica o ponto fraco de um traje só de olhar. Em ataques usando Agilidade, você pode usar as Manobras Críticas Preciso e Quebrar com 1 Crítico em vez de 2.", req: "Sentidos 1" }
    },
    "canis": {
        bonus: "Agilidade",
        filtrosMaji: ["fala", "sinal", "sol", "base"],
        slotsArmas: [
            { label: "Arma", filtros: ["arma"] },
            { label: "Sub-Arma", filtros: ["sub-arma"] }
        ],
        slotsTraje: [
            { label: "Traje de Couro", item: "couro" }
        ],
        riqueza: "1",
        maji: "Maji Base de Fala ou Sinal, duas Maji de Sol, duas Maji à sua escolha.",
        hab1: { nome: "Canis Louco", desc: "Com as mãos livres, você pode apoiar as duas no chão, aumentando seu deslocamento na ação Mover em Alcance 1. Você pode segurar armas de uma mão com a boca e armas de duas mãos quando tiver Força 3." },
        hab2: { nome: "Ataque Feroz", desc: "Ao acertar um ataque com armas leves ou pesadas, você pode realizar um ataque desarmado sem gastar ação.", req: "Agilidade 3" },
        hab3: { nome: "Fúria Ferion", desc: "Acostumados ao calor, possuem reduzir 2 contra dano de fogo. Além disso, toda Maji de Fala ou Sinal de Sol que causar dano recebe +1d6 de dano.", req: "Vigor 1" },
        hab4: { nome: "Investida Destrutiva", desc: "Ao realizar um ataque após se mover no mesmo Turno de Equipe, você recebe +1d6 de dano extra por Alcance deslocado, porém também sofre esse dano extra devido ao impacto.", req: "Força 1, Vigor 1" }
    },
    "duellante": {
        bonus: "Agilidade",
        filtrosMaji: ["fala", "sinal", "escrita", "base"],
        slotsArmas: [
            { label: "Arma", filtros: ["arma"] }
        ],
        slotsTraje: [
            { label: "Traje de Couro", item: "couro" }
        ],
        riqueza: "3",
        maji: "Quatro Maji à sua escolha.",
        hab1: { nome: "Iniciativa de Duelo", desc: "Sua Equipe vence a Iniciativa em caso de empate. Na cena de Maji-Du, recebe +2 em seu teste de Agilidade na Fase 1." },
        hab2: { nome: "Bravo Duellante", desc: "Uma vez por Rodada, após usar Contra Ataque, você também pode realizar a reação Esquiva para tentar evitar sofrer o ataque. Em uma cena de Maji-Du, o oponente precisa superar em 2 nos Pontos de Essência gastos para Contra Ataque.", req: "Agilidade 1, Estudos 1" },
        hab3: { nome: "Manipulação Essencial", desc: "Gastando 3 Ações, pode adicionar uma Característica do Ambiente no campo que está, contando que faça sentido com a cena.", req: "Estudos 1" },
        hab4: { nome: "Preparo Antecipado", desc: "Tem +2-Ponto em sua Reserva de Pontos de Essência.", req: "Sentidos 1, Estudos 1" }
    },
    "eco": {
        bonus: "Estudos",
        filtrosMaji: ["escrita", "base"],
        slotsArmas: [
            { label: "Suportes", filtros: [] }
        ],
        riqueza: "3",
        maji: "Maji Base de Escrita, duas Maji de Escrita, duas Maji à sua escolha.",
        hab1: { nome: "Economia Florestal", desc: "Ao utilizar uma Maji Elemental de Controle, Defesa ou Suporte, você pode atingir +1-alvo ou dar +5-cura." },
        hab2: { nome: "Benção da Floresta", desc: "Enquanto estiver em uma Zona Zero Elemental, você pode gastar 1 Ação para devolver a micro-essência residual ao campo. Assim, os efeitos da Zona Zero Elemental são anulados por 1 rodada. Pode ser usada 3 vezes por cena.", req: "Estudos 1" },
        hab3: { nome: "Ecológico", desc: "Preserve a natureza. Você tem +4 na Reserva de Pontos Essência.", req: "Estudos 1" },
        hab4: { nome: "Força da Terra", desc: "Ao usar uma Maji Elemental, recebe +1 uso ou +1 rodada. Esta habilidade só funciona se houver 5 ou mais Pontos Elemental no campo.", req: "Sentidos 1, Estudos 1" }
    },
    "royal": {
        bonus: "Estudos",
        filtrosMaji: ["escrita", "base"],
        slotsArmas: [
            { label: "Arma", filtros: ["arma"] }
        ],
        slotsTraje: [
            { label: "Traje de Couro", item: "couro" }
        ],
        riqueza: "3",
        maji: "Maji Base de Escrita, duas Maji de Escrita, duas Maji à sua escolha.",
        hab1: { nome: "Querido Grimório", desc: "Você possui um Grimório capaz de armazenar Maji, com limite de 5-espaços. Cada Maji de Escrita Pequena ocupa 1-espaço. Registre toda Maji escrita no Grimório." },
        hab2: { nome: "Grimório Grande", desc: "Seu Grimório tem +5-espaços.", req: "Querido Grimório, Estudos 1" },
        hab3: { nome: "Grimório Robusto", desc: "Gastando 3-espaços do seu Grimório, você pode armazenar uma Maji de Escrita de Pergaminho Grande.", req: "Querido Grimório, Estudos 3" },
        hab4: { nome: "Grimório Voador", desc: "Seu Grimório pode se mover por conta própria, sem precisar ser segurado.", req: "Querido Grimório, Estudos 1" }
    },
    "justica": {
        bonus: "Vigor",
        filtrosMaji: ["fala", "base"],
        slotsArmas: [
            { label: "Espada Bastarda", item: "espada_bastarda" },
            { label: "Escudo", filtros: ["escudo"] }
        ],
        slotsTraje: [
            { label: "Traje de Malha ou Placa", filtros: ["malha", "placa"] }
        ],
        riqueza: "2",
        maji: "Maji Base de Fala, quatro Maji à sua escolha.",
        hab1: { nome: "Código de Justiça", desc: "Sempre que você fizer um ato justo, ganhe 1 Selo de Justiça. Em combate, você pode gastar 5 Selos de Justiça para ganhar 1 Ação extra até o fim do seu Turno de Equipe." },
        hab2: { nome: "Combate Justo", desc: "Você nunca está em desvantagem. Se a Equipe inimiga estiver em maior número, ela não recebe os benefícios dessa vantagem na Iniciativa.", req: "Agilidade 3" },
        hab3: { nome: "Sentença Proclamada", desc: "Você pode proclamar a sentença de um alvo por cena, recebendo um bônus que só funciona contra ele. Capturar: manobras Desarmar, Quebrar e Imobilizar custam 1 crítico. Executar: ataques com arma recebem +1d6 de dano.", req: "Carisma 1" },
        hab4: { nome: "Justiça Cega", desc: "Você recebe +5 para perceber com audição (Sentidos) e ler as intenções (Carisma).", req: "Sentidos 1, Carisma 1" }
    },
    "nadyat": {
        bonus: "Vigor",
        filtrosMaji: ["fala", "sinal", "escrita", "base"],
        slotsArmas: [
            { label: "Arma", filtros: ["arma"] }
        ],
        slotsTraje: [
            { label: "Traje de Couro ou Malha", filtros: ["couro", "malha"] }
        ],
        riqueza: "1",
        maji: "Cinco Maji à sua escolha.",
        hab1: { nome: "Quebrando os Limites", desc: "Ao usar Superar Limites, seus benefícios são mantidos até o fim do seu próximo Turno de Equipe, incluindo o efeito de ignorar Penalidades." },
        hab2: { nome: "Berserker", desc: "Ao ativar Superar Limites, você recebe +Xd6 de dano em ataques com arma, onde X é o nível do Superar Limites ativo.", req: "Força 1, Vigor 1, Carisma 1" },
        hab3: { nome: "Legado de Firion", desc: "O legado de superação de Firion vive em cada membro. Ao ativar o 3° Superar Limites, você recebe o dobro do efeito (ou seja, 2 Ações e +10 em DA).", req: "Vigor 1, Carisma 1" },
        hab4: { nome: "Rompendo as Barreiras", desc: "Quando usar Superar Limites, você remove qualquer Condição que esteja sofrendo, a menos que escolha mantê-la.", req: "Vigor 1" }
    },
    "oberon": {
        bonus: "Vigor",
        filtrosMaji: ["fala", "espaco", "base"],
        slotsArmas: [
            { label: "Arma", filtros: ["arma"] },
            { label: "Arma", filtros: ["arma"] },
            { label: "Arma", filtros: ["arma"] },
            { label: "Sub-Arma", filtros: ["sub-arma"] },
            { label: "Sub-Arma", filtros: ["sub-arma"] },
            { label: "Sub-Arma", filtros: ["sub-arma"] }
        ],
        slotsTraje: [
            { label: "Traje", filtros: ["traje"] },
            { label: "Traje", filtros: ["traje"] }
        ],
        riqueza: "2",
        maji: "Maji Base de Fala, Reequipar, duas Maji à sua escolha.",
        hab1: { nome: "Arsenal Oberon", desc: "A Maji que os torna implacáveis. Sua Maji Reequipar aumenta em +4 níveis." },
        hab2: { nome: "Ataques Fluidos", desc: "Ao realizar um ataque com uma arma, uma vez por Turno de Equipe, você pode gastar 1 Ação para realizar outro ataque com uma arma diferente.", req: "Agilidade 1, Força 1" },
        hab3: { nome: "Mestre das Armas", desc: "Para cada arma diferente que você usar para atacar no mesmo Turno de Equipe, você recebe +1d6 de dano no próximo ataque.", req: "Força 1" },
        hab4: { nome: "Retaliação Contraposta", desc: "Quando um oponente declarar um Contra Ataque usando armas, você pode anular os dois ataques chocando as armas para causar Desorientado no alvo.", req: "Agilidade 3" }
    },
    "polares": {
        bonus: "Sentidos",
        filtrosMaji: ["fala", "base"],
        slotsArmas: [
            { label: "Arma", filtros: ["arma"] },
            { label: "Arma", filtros: ["arma"] }
        ],
        slotsTraje: [
            { label: "Traje de Couro", filtros: ["couro"] }
        ],
        riqueza: "3",
        maji: "Maji Base de Fala, Sopro de Gelo, uma Maji, duas Maji de Chuva.",
        hab1: { nome: "Defesa de Gelo", desc: "Cada carga de Congelado concede Reduzir 2. Pode gastar 1 Ponto de Essência Elemental para receber Congelado." },
        hab2: { nome: "Caçada de Cristal", desc: "Enquanto estiver com pelo menos 2 cargas de Congelado, você pode ficar oculto. Inimigos são considerados Cegos contra você até você atacar.", req: "Sentidos 1" },
        hab3: { nome: "Domínio do Inverno", desc: "Uma vez por cena, gaste 1 Ação para criar nevada. Enquanto houver 2 Pontos Elementais no Campo, todo efeito de Congelado causa +1 carga.", req: "Estudos 3" },
        hab4: { nome: "Sangue de Geada", desc: "A condição Congelado em você precisa de 4 cargas para ativar.", req: "Vigor 1" }
    },
    "strike": {
        bonus: "Sentidos",
        filtrosMaji: ["fala", "escrita", "base"],
        slotsArmas: [
            { label: "Arma", filtros: ["arma"] },
            { label: "Sub-Arma ou Escudo", filtros: ["sub-arma", "escudo"] }
        ],
        slotsTraje: [
            { label: "Traje de Couro", item: "couro" }
        ],
        riqueza: "3",
        maji: "Maji Base de Fala ou Escrita, Três Maji à sua escolha.",
        hab1: { nome: "Estratégia", desc: "Durante uma cena, crie um plano. Cada participante escolhe um Atributo e descreve como usá-lo, recebendo +1d10 em um teste para executar sua parte." },
        hab2: { nome: "Plano B", desc: "Gaste 3 Ações para alterar um aspecto narrativo da cena, como se estivesse usando a Manobra Crítica Narrativo. Só pode usar uma vez por sessão.", req: "Estudos 1, Sentidos 1" },
        hab3: { nome: "Raciocinio Rápido", desc: "Você é capaz de se adaptar rapidamente. Uma vez por rodada, se falhar ao usar a reação Esquiva, pode usar a reação Defesa.", req: "Agilidade 1, Sentidos 1" },
        hab4: { nome: "Sintonia de Guerra", desc: "Em uma situação em que você esteja liderando o grupo, Ações de Sinergia de Nível 1 podem ser usadas por seus aliados mesmo sem Sinergia entre si.", req: "Carisma 1" }
    },
    "tayport": {
        bonus: "Estudos",
        filtrosMaji: ["fala", "escrita", "espaco", "base"],
        slotsArmas: [
            { label: "Arma", filtros: ["arma"] },
            { label: "Arma", filtros: ["arma"] }
        ],
        riqueza: "3",
        maji: "Maji Base de Fala, Sem Obstáculos, Maji Base de Escrita, Teleporte, uma Maji.",
        hab1: { nome: "Em Todo Lugar", desc: "Ao conjurar Sem Obstáculos, você pode alterar o texto da Maji para criar portais que conectam os pontos por onde você passou até o final do Turno de Equipe." },
        hab2: { nome: "Portal Tático", desc: "Uma vez por Turno de Equipe, pode usar Sem Obstáculos para teleportar um ataque de projétil, aumentando efetivamente o alcance do ataque.", req: "Agilidade 1" },
        hab3: { nome: "Rede de Portais", desc: "Sua Maji Teleporte pode ter até 5 pergaminhos conectados a ela. Ao entrar ou enviar algo, escolha para qual pergaminho será teleportado.", req: "Estudos 1" },
        hab4: { nome: "Salto de Coordenação", desc: "Sempre que gastar um uso de Sem Obstáculos, ganha 1 Ação.", req: "Agilidade 1, Estudos 1" }
    },
    "tigre": {
        bonus: "Agilidade",
        filtrosMaji: ["fala", "base"],
        slotsArmas: [
            { label: "Espada ou Lança", filtros: ["espada", "lanca"] }
        ],
        slotsTraje: [
            { label: "Traje de Malha ou Couro", filtros: ["malha", "couro"] }
        ],
        riqueza: "3",
        maji: "Maji Base de Fala, uma Maji de Fala, três Maji.",
        hab1: { nome: "Sangue de Tigre", desc: "Enquanto estiver sofrendo a Primeira Penalidade, você recebe reduzir 2. Esse valor aumenta para reduzir 5 enquanto estiver na Segunda Penalidade." },
        hab2: { nome: "Encare a Morte", desc: "Uma vez por cena, após o alvo declarar sua reação, você pode fazer um teste oposto de Presença. Se vencer, obriga o alvo a mudar a reação para Contra Ataque.", req: "Carisma 1" },
        hab3: { nome: "Ferocidade", desc: "Ao realizar um ataque com arma, você pode escolher sofrer de -2 no ataque para receber +1d6 de dano.", req: "Força 1" },
        hab4: { nome: "Presas e Sangue", desc: "Quando um inimigo usar Contra Ataque contra você, seu ataque causa +2d6 de dano.", req: "Agilidade 3" }
    },
    "yastrev": {
        bonus: "Força",
        filtrosMaji: ["fala", "base"],
        slotsArmas: [
            { label: "Espada ou Lança", filtros: ["espada", "lanca"] }
        ],
        slotsTraje: [
            { label: "Traje de Malha ou Couro", filtros: ["malha", "couro"] }
        ],
        riqueza: "3",
        maji: "Maji Base de Fala, uma Maji de Fala, três Maji.",
        hab1: { nome: "Golpe Unico", desc: "Ao realizar um ataque desarmado com sucesso, você pode gastar as ações restantes para receber +1d6 de dano por ação gasta." },
        hab2: { nome: "Estrangular", desc: "Enquanto estiver imobilizando um alvo, você pode gastar 1 Ação para causar 2d6 de dano que o alvo não pode reduzir e impedi-lo de usar Maji de Fala nesta rodada.", req: "Força 1" },
        hab3: { nome: "Historico Problematico", desc: "Uma vez por cena, pode realizar um teste oposto de Carisma contra um alvo. Se vencer, o alvo recebe Amedrontado (ou Amedrontado² se dobrar o resultado).", req: "Carisma 1" },
        hab4: { nome: "Velocidade de Rapina", desc: "Uma vez por Turno de Equipe, pode usar a Ação Mover sem gastar Ações.", req: "Agilidade 1" }
    },
    "blusan": {
        bonus: "Estudos",
        filtrosMaji: ["sinal", "sol", "base"],
        slotsArmas: [
            { label: "Arma", filtros: ["arma"] }
        ],
        slotsTraje: [
            { label: "Traje de Couro ou Malha", filtros: ["couro", "malha"] }
        ],
        riqueza: "2",
        maji: "Maji Base de Sinal, duas Maji de Sol, duas Maji.",
        hab1: { nome: "Sol Azul", desc: "Ao utilizar uma Maji de Sol que causaria a condição Queimando, você pode escolher, em vez disso, causar Atordoado do mesmo nível. Nesse caso, a Maji não causa dano." },
        hab2: { nome: "Sol Verde", desc: "Ao utilizar uma Maji de Sol que causaria Queimando, você pode alterar o efeito para conceder cura por 3 rodadas. Só pode ser usado uma vez por alvo na cena.", req: "Estudos 1" },
        hab3: { nome: "Sol Vermelho", desc: "Ao utilizar uma Maji de Sol que causaria Queimando, você pode escolher causar 2d6 de dano de fogo ao alvo para cada nível de Queimando que seria aplicado.", req: "Estudos 4" },
        hab4: { nome: "Sol Roxo", desc: "Ao ativar Sol Azul, você pode causar Queimando e Atordoado do mesmo nível ao mesmo tempo. Se a Maji causar dano, ela ainda causa, porém custa o dobro de Pontos Celestiais.", req: "Sol Azul, Estudos 1" }
    },
    "exterminadores": {
        bonus: "Vigor",
        filtrosMaji: ["fala", "base"],
        slotsArmas: [
            { label: "Arma Pesada", filtros: ["pesada"] }
        ],
        slotsTraje: [
            { label: "Traje de Malha", filtros: ["malha"] }
        ],
        riqueza: "1",
        maji: "Maji Base de Fala, Três Maji.",
        hab1: { nome: "Extermínio", desc: "Sempre que fizer um teste para encontrar sinais da presença de seres, você rola +1d10. Além disso, recebe +1d6 de dano contra Vorulos em ataques com Arma Pesada." },
        hab2: { nome: "Auto Sacrificio", desc: "Sempre que você escolher não usar uma Reação, no seu próximo ataque você recebe +1d6 de dano.", req: "Vigor 1" },
        hab3: { nome: "Força Devastadora", desc: "Sempre que um dado de dano resultar em 6, você pode rolar +1d6 de dano.", req: "Força 4" },
        hab4: { nome: "Homem Sem Medo", desc: "A experiência em batalhas contra Vorulos fortaleceu sua mente. Você não sofre a condição Amedrontado.", req: "Carisma 1" }
    },
    "fulmen": {
        bonus: "Força",
        filtrosMaji: ["sinal", "base"],
        slotsArmas: [
            { label: "Arma", filtros: ["arma"] },
            { label: "Mini Balestra", filtros: ["balestra"] }
        ],
        slotsTraje: [
            { label: "Traje de Couro", filtros: ["couro"] }
        ],
        riqueza: "2",
        maji: "Maji Base de Sinal, Punho elétrico, Duas Maji.",
        hab1: { nome: "Condutor", desc: "Ao atacar um alvo com a condição Condutivo usando uma Maji que cause dano elétrico, causa +1d6 de dano elétrico." },
        hab2: { nome: "Eletrocutor", desc: "Pode gastar 1 Ponto de Essência Elemental quando um alvo completar todas as cargas de Condutivo, fazendo com que o alvo sofra 3d6 de dano elétrico que não pode reduzir.", req: "Estudos 3" },
        hab3: { nome: "Passo de Pressão", desc: "Uma vez por rodada, quando você empurrar um alvo, você pode se mover Alcance 1 imediatamente em direção a ele, sem gastar Ação.", req: "Agilidade 1" },
        hab4: { nome: "Vira-Corrente", desc: "Uma vez por rodada, ao realizar Contra-ataque com sucesso, você pode empurrar o alvo para um local a Alcance 1. Se atingir obstáculo, cause +1d6 de dano.", req: "Força 1" }
    },
    "garra_mansa": {
        bonus: "Carisma",
        filtrosMaji: [],
        slotsArmas: [
            { label: "Arma", filtros: ["arma"] },
            { label: "Arma", filtros: ["arma"] }
        ],
        slotsTraje: [
            { label: "Traje de Couro", filtros: ["couro"] }
        ],
        riqueza: "2",
        maji: "Quatro Maji.",
        hab1: { nome: "Laço de Amizade", desc: "Escolha uma Criatura de Nível de Ameaça 0 ou 1 para te seguir. Você controla as 3 Ações dela no Turno de Equipe." },
        hab2: { nome: "Forte Companheiro", desc: "Você pode adquirir uma Criatura de Nível de Ameaça 2. Se preferir, pode melhorar a ficha de uma Criatura de NA 0 ou 1.", req: "Carisma 1" },
        hab3: { nome: "Grande Família", desc: "Você pode ter dois companheiros por meio da Habilidade Laço de Amizade.", req: "Carisma 4" },
        hab4: { nome: "Protetor Instintivo", desc: "Enquanto você ou sua Criatura estiver com metade da vida ou menos, o outro recebe +1d6 em todo Dano (exceto por Maji) e reduzir +2 ao usar a reação Defesa.", req: "Carisma 1" }
    },
    "dancarinas": {
        bonus: "Agilidade",
        filtrosMaji: ["fala", "base"],
        slotsArmas: [
            { label: "Pata", item: "pata" },
            { label: "Pata", item: "pata" }
        ],
        slotsTraje: [
            { label: "Traje de Couro", item: "couro" }
        ],
        riqueza: "2",
        maji: "Maji Base de Fala, Duas Maji de Fala, Uma Maji.",
        hab1: { nome: "Dança de Ataque", desc: "Enquanto estiver com uma pata em cada mão, se errar um ataque com pata, você pode realizar um ataque com a outra pata gastando 1 Ação neste Turno de Equipe." },
        hab2: { nome: "Dança Imprevisível", desc: "A reação Esquiva não pode ser usada contra seus ataques com pata.", req: "Agilidade 1, Sentidos 1" },
        hab3: { nome: "Dança Esquiva", desc: "Uma vez por rodada, ao usar a reação Esquiva, você pode usar seu nível de Sentidos como modificador. Apenas se estiver usando duas patas.", req: "Agilidade 1, Sentidos 1" },
        hab4: { nome: "Dança Veloz", desc: "Depois de acertar um ataque com pata, você recebe a condição Rápido durante este Turno de Equipe.", req: "Agilidade 3" }
    },
    "prime": {
        bonus: "Estudos",
        filtrosMaji: ["sinal", "base"],
        slotsArmas: [
            { label: "Arma", filtros: ["arma"] },
            { label: "Sub-Arma", filtros: ["sub-arma"] }
        ],
        slotsTraje: [
            { label: "Traje de Malha", item: "malha" }
        ],
        riqueza: "2",
        maji: "Maji Base de Sinal, Três Maji.",
        hab1: { nome: "Reformular", desc: "Uma vez por cena, você pode aumentar em +1 nível uma de suas Maji, mas ela passa a custar o dobro de Pontos de Essência. Ao fim da cena, a Maji retorna ao normal." },
        hab2: { nome: "Convergência Dissonante", desc: "Uma vez por cena, ao usar uma Maji, você pode fazer uma outra Maji ao mesmo tempo, no mesmo ato. No entanto, a fusão te machuca, causando Atordoado 1.", req: "Estudos 1, Vigor 1" },
        hab3: { nome: "Subtração Máxima", desc: "Ao usar uma Maji, você pode aumentar o dano em até 2d6, e sofre o mesmo valor de dano em si mesmo sem poder reduzir.", req: "Estudos 1, Vigor 1" },
        hab4: { nome: "Subversão Instável", desc: "Você pode alterar parâmetros numéricos ao utilizar uma Maji. Sempre que fizer isso, você recebe Exausto devido à potência da Maji.", req: "Estudos 5, Vigor 1" }
    },
    "runa": {
        bonus: "Estudos",
        filtrosMaji: ["escrita", "base"],
        slotsTraje: [
            { label: "Traje de Couro", item: "couro" }
        ],
        slotsOutros: [
            { label: "Potes de Tinta", item: "tinta" }
        ],
        riqueza: "2",
        maji: "Maji Base de Escrita, Duas Maji de Escrita, Duas Maji.",
        hab1: { nome: "Tinta Maji", desc: "Uma vez por cena, você pode transferir essência para um pote (3 usos). Gaste 1 uso para Maji Pequena ou 2 usos para Grande. Ao usar a tinta, escolha uma Maji compatível." },
        hab2: { nome: "Encantamento Rúnico", desc: "Uma vez por cena pode marcar uma Maji de Escrita Pequena em um Equipamento. Quem usar pode gastar 3 Ações para ativar a Maji; depois disso, as escritas somem.", req: "Estudos 1" },
        hab3: { nome: "Lacre de Encantamento", desc: "O Encantamento Rúnico não some ao ser usado. Porém, após cada ativação, ele exige 3 rodadas para poder ser usado novamente.", req: "Encantamento Rúnico, Estudos 1" },
        hab4: { nome: "Super Tinta", desc: "Ao usar uma Maji com Tinta Maji, você pode gastar 1 Ação para usá-la novamente. Só depois disso a tinta some.", req: "Tinta Maji, Estudos 1" }
    },
    "varbar": {
        bonus: "Força",
        filtrosMaji: [],
        slotsArmas: [
            { label: "Arma", filtros: ["arma"] },
            { label: "Arma", filtros: ["arma"] }
        ],
        slotsTraje: [
            { label: "Traje de Couro", item: "couro" }
        ],
        riqueza: "2",
        maji: "Nenhuma (Varbar não usa Maji)",
        hab1: { nome: "Esforço Eterno", desc: "Enquanto estiver sofrendo da Penalidade da Caixa 2, recebe +1-ação em todo turno até o fim da cena." },
        hab2: { nome: "Ato Final", desc: "Ao escolher Agarre A Vida, automaticamente recebe 15+ (ativando a condição Morrendo, mas ficando consciente).", req: "Vigor 1" },
        hab3: { nome: "Vigoroso", desc: "Você é imune aos efeitos causados pela 1ª Penalidade.", req: "Vigor 3" },
        hab4: { nome: "Furiso", desc: "Duas vezes por cena, pode ativar essa habilidade, recebendo +1d10 por 3 rodadas em testes de Força ou Agilidade. Ao final, recebe Atordoado 1 (ou Atordoado 2 na segunda ativação).", req: "Agilidade 1, Força 1, Vigor 1" }
    },
    "ampulheta": {
        bonus: "Estudos",
        filtrosMaji: ["sinal", "escrita", "tempo", "base"],
        slotsTraje: [
            { label: "Traje de Malha ou Couro", filtros: ["malha", "couro"] }
        ],
        slotsArmas: [
            { label: "Arma ou Sub-Arma", filtros: ["arma", "sub-arma"] }
        ],
        riqueza: "3",
        maji: "Maji Base de Sinal ou Escrita, Duas Maji de Tempo, Uma Maji à sua escolha.",
        hab1: { nome: "Flecha do Tempo", desc: "O tempo sempre avança. Ao usar Maji de Tempo, elas têm +1 uso ou +1 rodada. Só funciona se Pontos Cósmicos do campo >= 5." },
        hab2: { nome: "Entropicamente", desc: "Ao usar uma Maji de Tempo, você pode escolher causar 1d6 de dano que não pode reduzir em todos no Campo, inclusive você.", req: "Estudos 1" },
        hab3: { nome: "Causalidade", desc: "Ao usar uma Maji de Tempo, se conjurar outra Maji de Tempo no mesmo Turno de Equipe, ela não custará Pontos de Essência Cósmica.", req: "Estudos 1" },
        hab4: { nome: "Cronologia Quebrada", desc: "Uma vez por cena, você pode escolher obter sucesso automático em qualquer teste, antes de rolar os seus dados.", req: "Agilidade 3" }
    },
    "ateliere": {
        bonus: "Sentidos",
        filtrosMaji: ["sinal", "base"],
        slotsArmas: [
            { label: "Faca", filtros: ["faca"] },
            { label: "Arma", filtros: ["arma"] }
        ],
        riqueza: "3",
        maji: "Maji Base de Sinal, três Maji.",
        hab1: { nome: "Segunda Pele", desc: "Você não pode usar Traje, mas seu corpo foi reforçado por costura e enxertos, recebendo naturalmente Reduzir 4." },
        hab2: { nome: "Costura Armada", desc: "Suas Armas passam a fazer parte do seu corpo. Você não pode sofrer a manobra Desarme.", req: "Sentidos 1" },
        hab3: { nome: "Estourar Ponto", desc: "Uma vez por rodada, quando causar dano em um alvo Sangrando, pode gastar 1 Ação para impedir o alvo de usar a reação Defesa.", req: "Sentidos 1, Força 1" },
        hab4: { nome: "Ponto Fechado", desc: "Uma vez por cena, gaste 2 Ações para se costurar e curar totalmente a Caixa de Vida atual. Pode gastar 1 Ação para remover Sangrando.", req: "Sentidos 1" }
    },
    "balci": {
        bonus: "Estudos",
        filtrosMaji: [],
        slotsArmas: [
            { label: "Maça", filtros: ["maca"] },
            { label: "Arma", filtros: ["arma"] }
        ],
        slotsTraje: [
            { label: "Traje de Couro", filtros: ["couro"] }
        ],
        riqueza: "3",
        maji: "Quatro Maji.",
        hab1: { nome: "Alquimia Éter", desc: "O alquimista pode criar poções de Éter da lista de itens. Pode fazer 3 poções Éter por Cena." },
        hab2: { nome: "Coquetéis Éter", desc: "Ao criar uma Éter Maji, pode combinar duas Maji de Fala na mesma poção.", req: "Estudos 1" },
        hab3: { nome: "Éter Turbo", desc: "Uma vez por Cena, pode: evoluir uma Éter Maji em +3 Níveis, restaurar +3 de Reserva de Essência com Éter, ou adicionar +2d6 em Éter Cura ou Éter Dano.", req: "Estudos 1" },
        hab4: { nome: "Vira Vira", desc: "Seus Éteres possuem duas doses: ao beber, ainda pode usá-la mais uma vez.", req: "Estudos 4" }
    },
    "nebula": {
        bonus: "Estudos",
        filtrosMaji: ["escrita", "base"],
        slotsArmas: [
            { label: "Arma ou Sub-Arma", filtros: ["arma", "sub-arma"] }
        ],
        riqueza: "2",
        maji: "Maji Base de Escrita, Uma Maji de Escrita, Duas Maji à sua escolha.",
        hab1: { nome: "Escritas Sobre a Pele", desc: "Uma vez por cena, você pode inscrever uma Maji de Escrita na própria pele. Seu corpo possui 7 espaços." },
        hab2: { nome: "Escritas Permanentes", desc: "Você pode fazer tatuagens permanentes. Porém, deve gastar 1 Ponto de Essência toda vez que usar a Maji tatuada.", req: "Escrita sobre a Pele, Estudos 1" },
        hab3: { nome: "Fusão da Tormenta", desc: "Você pode fundir duas Maji permanentes em uma só, ocupando a soma dos espaços. Ao usar, ambos os efeitos são realizados.", req: "Ter 2 tatuagens Permanentes" },
        hab4: { nome: "Tinta Corruptiva", desc: "Ao utilizar uma Maji tatuada, você pode marcar a Penalidade da Caixa em que está para aumentar essa Maji em +3 níveis.", req: "Estudos 1" }
    },
    "prizark": {
        bonus: "Agilidade",
        filtrosMaji: ["fala", "base"],
        slotsTraje: [
            { label: "Traje de Malha ou Couro", filtros: ["malha", "couro"] }
        ],
        slotsArmas: [
            { label: "Arma de Corrente", filtros: ["corrente"] },
            { label: "Arma de Corrente", filtros: ["corrente"] }
        ],
        riqueza: "3",
        maji: "Maji Base de Fala, Quatro Maji.",
        hab1: { nome: "Empurrão Libertador", desc: "Enquanto estiver Imobilizando um alvo com armas de corrente, você pode gastar 1 Ação para mover arremessando o alvo até o alcance máximo da arma." },
        hab2: { nome: "Aprisionador Implacável", desc: "Enquanto estiver Imobilizando um alvo com arma de corrente, você pode gastar 1 Ação para causar a condição Sangrando no alvo.", req: "Força 1" },
        hab3: { nome: "Corrente Fantasma", desc: "Se estiver usando duas armas de corrente e errar o ataque com uma delas, você pode realizar um ataque com a outra sem gastar ação.", req: "Agilidade 3" },
        hab4: { nome: "Redoma de Correntes", desc: "Usando duas armas de corrente, você pode gastar 3 Ações para realizar um ataque circular que atinge todos os alvos dentro do alcance da arma.", req: "Agilidade 1, Força 1" }
    },
    "sacrifice": {
        bonus: "Agilidade",
        filtrosMaji: ["fala", "base"],
        slotsTraje: [
            { label: "Traje de Couro", item: "couro" }
        ],
        slotsArmas: [
            { label: "Faca, Haste ou Espada", filtros: ["faca", "haste", "espada"] }
        ],
        riqueza: "2",
        maji: "Maji Base de Fala, Três Maji.",
        hab1: { nome: "Sangue Essencial", desc: "Ao usar uma Maji Elemental, você pode se cortar, sofrendo 2 de dano por Nível da Maji (não redutível) e usando seu próprio sangue como Ponto de Essência." },
        hab2: { nome: "Ritual de Poder", desc: "Uma vez por sessão, você pode realizar um ritual no qual uma criatura é sacrificada. Você recebe reduzir igual ao Nível de Ameaça da criatura até o fim da sessão.", req: "Sentidos 3" },
        hab3: { nome: "Pacto de Vida", desc: "Uma vez por sessão, você pode curar PV igual ao valor da sua 1ª Caixa de PV, ao custo de 2 Pontos Elementais.", req: "Ritual de Poder, Estudos 1" },
        hab4: { nome: "Poder Sangrento", desc: "Sempre que usar Sangue Essencial, a Maji conjurada pode receber +1 rodada, +1 uso ou +1d6 de dano, à sua escolha.", req: "Sangue Essencial, Estudos 3" }
    },
    "umbral": {
        bonus: "Agilidade",
        filtrosMaji: ["fala", "lua", "base"],
        slotsArmas: [
            { label: "Katana", filtros: ["espada"] },
            { label: "Arma", filtros: ["arma"] }
        ],
        slotsTraje: [
            { label: "Traje de Malha", filtros: ["malha"] }
        ],
        riqueza: "3",
        maji: "Maji Base de Fala, Seu Medo, duas Maji de Lua, uma Maji.",
        hab1: { nome: "Cicatriz Sombria", desc: "Sempre que causar Sangrando em um alvo que já esteja com essa condição, cause +1d6 de dano. Seus ataques com arma corpo a corpo possuem Perfurar +2." },
        hab2: { nome: "Breu de Tsuki", desc: "Durante a noite, um Servo da Lua que esteja ao ar livre não gasta Pontos de Essência para invocar qualquer Maji de Lua." },
        hab3: { nome: "Medo Completo", desc: "Quando atingir um alvo com um ataque de arma enquanto ele estiver sofrendo a condição Amedrontado²¹, cause +1d6 de dano.", req: "Sentidos 1" },
        hab4: { nome: "Inversão Sombria", desc: "Uma vez por cena, ao realizar a reação Contra Ataque com sucesso, você pode causar a condição Sangrando no alvo.", req: "Agilidade 1" }
    }
};