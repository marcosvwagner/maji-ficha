

const bancoItens = {
    trajes: {
        "couro": { nome: "Traje de Couro", defesa: "Reduzir 3", esp: "Resistência (Frio), Vulnerável (Fogo)", tags: ["leve", "couro", "traje"] },
        "malha": { nome: "Traje de Malha", defesa: "Reduzir 3", esp: "Durável, Vulnerável (Elétrico)", tags: ["medio", "malha", "traje"] },
        "placa": { nome: "Traje de Placa", defesa: "Reduzir 6", esp: "Durável, Vulnerável (Elétrico), Lento", tags: ["pesado", "placa", "traje"] },
        "cavaleiro": { nome: "Traje de Cavaleiro", defesa: "Reduzir 9", esp: "Vulnerável (Elétrico), Lento", tags: ["pesado", "traje"] },
        "gladiador": { nome: "Traje de Gladiador", defesa: "Reduzir 5", esp: "Espinhos, Vulnerável (Elétrico), Lento", tags: ["medio", "traje"] },
        "nori": { nome: "Traje Nori", defesa: "Reduzir 3", tags: ["leve", "traje"] },
        "sevilia": { nome: "Vestimenta Sevilia", defesa: "Reduzir 3", tags: ["leve", "traje"] }
    },

    armas: {
        // === ESCUDOS ===
        "escudo_peq": { nome: "Escudo Pequeno", dano: "2d6", def: "+1d6", tipo: "Impacto", esp: "uma mão, Arremesso 0-1", tags: ["uma mao", "arremesso", "escudo"] },
        "escudo_gde": { nome: "Escudo Grande", dano: "2d6", def: "+2d6", tipo: "Impacto", esp: "uma mão, pesada 3", tags: ["uma mao", "escudo"] },
        "escudo_duplo": { nome: "Escudo Duplo", dano: "2d6", def: "+3d6", tipo: "Impacto", esp: "duas mãos, pesada 3", tags: ["duas maos", "escudo"] },
        "escudo_espinho": { nome: "Escudo de Espinhos", dano: "2d6", def: "+1d6", tipo: "Perfurante", esp: "uma mão, espinhos", tags: ["uma mao", "espinhos", "escudo"] },
        "escudo_montado": { nome: "Escudo Montado", dano: "2d6", def: "+2d6", tipo: "Impacto", esp: "duas mãos, pesada 3", tags: ["duas maos", "escudo"] },

        // === ARCOS E BALESTRAS ===
        "arco_composto": { nome: "Arco Composto", dano: "Munição", alcance: "1-5", esp: "arma, duas mãos, recarga 1, manuseio +2", tipo: "distancia", tags: ["arma", "duas maos", "arco", "distancia"] },
        "arco_recurvo": { nome: "Arco Recurvo", dano: "Munição", alcance: "1-5", esp: "arma, duas mãos, recarga 1, perfurante, cortante", tipo: "distancia", tags: ["arma", "duas maos", "arco", "distancia"] },
        "arco_longo": { nome: "Arco Longo", dano: "Munição", alcance: "1-7", esp: "arma, duas mãos, recarga 1, manuseio -2", tipo: "distancia", tags: ["arma", "duas maos", "arco", "distancia"] },
        "arco_infiltracao": { nome: "Arco de Infiltração", dano: "Munição", alcance: "0-4", esp: "sub-arma, duas mãos, recarga 1", tipo: "distancia", tags: ["sub-arma", "duas maos", "arco", "distancia"] },
        "balestra": { nome: "Balestra", dano: "3d6", alcance: "0-3", esp: "arma, duas mãos, recarga 2, perfurar-5", tipo: "distancia", tags: ["arma", "duas maos", "balestra", "distancia"] },
        "balestra_leve": { nome: "Balestra Leve", dano: "3d6", alcance: "0-3", esp: "arma, duas mãos, recarga 1, perfurar-2", tipo: "distancia", tags: ["arma", "duas maos", "balestra", "distancia"] },
        "balestra_mini": { nome: "Balestra Mini", dano: "2d6", alcance: "0-2", esp: "sub-arma, uma mão, perfurar-2", tipo: "distancia", tags: ["sub-arma", "uma mao", "balestra", "distancia"] },
        "cho_ko_nu": { nome: "Cho-Ko-Nu", dano: "2d6", alcance: "0-3", esp: "arma, duas mãos", tipo: "distancia", tags: ["arma", "duas maos", "balestra", "distancia"] },

        // === AUXILIARES ===
        "desarmado": { nome: "Ataque Desarmado", dano: "1d6", esp: "poder", tipo: "auxiliar", tags: ["desarmado", "auxiliar"] },
        "luva": { nome: "Luva de Combate", dano: "+1d6", esp: "item, uma mão", tipo: "auxiliar", tags: ["item", "uma mao", "auxiliar", "luva"] },
        "tekko": { nome: "Tekko-Kagi", dano: "2d6", esp: "sub-arma, uma mão, ágil", tipo: "auxiliar", tags: ["sub-arma", "uma mao", "agil", "auxiliar"] },
        "pata": { nome: "Pata", dano: "2d6", esp: "arma, uma mão, poder, perfurar-2", tipo: "auxiliar", tags: ["arma", "uma mao", "perfurar", "auxiliar"] },
        "katar": { nome: "Katar", dano: "2d6", esp: "arma, uma mão, ágil", tipo: "auxiliar", tags: ["arma", "uma mao", "agil", "auxiliar"] },
        "chakram": { nome: "Chakram", dano: "2d6", esp: "sub-arma, uma mão, arremesso 0-1, perfurar-2, manuseio -2", tipo: "auxiliar", tags: ["sub-arma", "uma mao", "arremesso", "perfurar", "auxiliar"] },

        // === CORRENTES ===
        "chicote": { nome: "Chicote", dano: "2d6", esp: "arma, uma mão, alcance 0-1, crítico-preciso, ágil", tipo: "leve", tags: ["arma", "uma mao", "alcance", "agil", "leve"] },
        "kusarigama": { nome: "Kusarigama", dano: "3d6/2d6", esp: "arma, duas mãos, ágil, alcance 0-2", tipo: "leve", tags: ["arma", "duas maos", "agil", "alcance", "leve"] },
        "nunchaku": { nome: "Nunchaku", dano: "3d6", esp: "arma, uma mão, poder", tipo: "leve", tags: ["arma", "uma mao", "poder", "leve"] },
        "batafuraikatto": { nome: "Batafuraikatto", dano: "2d6", esp: "arma, uma mão, alcance 0-1, cortante", tipo: "leve", tags: ["arma", "uma mao", "alcance", "cortante", "leve"] },
        "kusari_fundo": { nome: "Kusari-Fundo", dano: "2d6", esp: "arma, uma mão, alcance 0-1, crítico-imobilizar, ágil", tipo: "leve", tags: ["arma", "uma mao", "alcance", "imobilizar", "agil", "leve"] },
        "kyoketsu": { nome: "Kyoketsu-Shoge", dano: "3d6", esp: "arma, duas mãos, alcance 0-2, crítico-imobilizar, ágil", tipo: "leve", tags: ["arma", "duas maos", "alcance", "imobilizar", "agil", "leve"] },
        "mangual": { nome: "Mangual", dano: "3d6", esp: "arma, uma mão, perfurar-3, manuseio -2, ágil", tipo: "pesada", tags: ["arma", "uma mao", "perfurar", "agil", "pesada"] },


        // === ESPADAS ===
        "espada_bastarda": { nome: "Espada Bastarda", dano: "3d6", esp: "arma, uma mão, poder", tipo: "leve", tags: ["arma", "uma mao", "poder", "espada", "leve"] },
        "rapieira": { nome: "Rapieira", dano: "2d6", esp: "arma, uma mão, perfurar-5, manuseio +2, ágil", tipo: "leve", tags: ["arma", "uma mao", "perfurar", "agil", "espada", "leve"] },
        "espada_borboleta": { nome: "Espada Borboleta", dano: "2d6/3d6", esp: "arma, uma mão (separadas) / duas mãos (unidas), ágil", tipo: "leve", tags: ["arma", "duas maos", "agil", "espada", "leve"] },
        "lamina_dupla": { nome: "Lâmina Dupla", dano: "3d6+4", esp: "arma, duas mãos, crítico-desarme, poder", tipo: "leve", tags: ["arma", "duas maos", "poder", "espada", "leve"] },
        "katana": { nome: "Katana", dano: "3d6", esp: "arma, duas mãos, cortante, ágil", tipo: "leve", tags: ["arma", "duas maos", "cortante", "agil", "espada", "leve"] },
        "sakabato": { nome: "Sakabatō", dano: "2d6", esp: "arma, duas mãos, poder", tipo: "leve", tags: ["arma", "duas maos", "poder", "espada", "leve"] },
        "montante": { nome: "Montante", dano: "4d6", esp: "arma, duas mãos, perfurar-2, pesada 3, poder", tipo: "pesada", tags: ["arma", "duas maos", "pesada", "poder", "espada", "pesada"] },
        "ninjato": { nome: "Ninjato", dano: "2d6", esp: "arma, uma mão, cortante, ágil", tipo: "leve", tags: ["arma", "uma mao", "cortante", "agil", "espada", "leve"] },
        "gladio": { nome: "Gládio", dano: "3d6", esp: "arma, uma mão, perfurar-3, poder", tipo: "leve", tags: ["arma", "uma mao", "perfurar", "poder", "espada", "leve"] },
        "zweihander": { nome: "Zweihänder", dano: "5d6", esp: "arma, duas mãos, pesada 3, poder", tipo: "pesada", tags: ["arma", "duas maos", "pesada", "poder", "espada", "pesada"] },

        // === FACAS ===
        "adaga": { nome: "Adaga", dano: "2d6", esp: "sub-arma, uma mão, perfurar-4, ágil", tipo: "leve", tags: ["sub-arma", "uma mao", "perfurar", "agil", "adaga", "faca", "leve"] },
        "faca_t": { nome: "Bolsa Faca-T", dano: "2d6", esp: "sub-arma, uma mão, perfurar-5 (ao lançar), arremesso 0-2, ágil", tipo: "leve", tags: ["sub-arma", "uma mao", "perfurar", "arremesso", "agil", "faca", "faca_t", "leve"] },
        "kunai": { nome: "Bolsa Kunai", dano: "2d6", esp: "sub-arma, uma mão, perfurar-2, arremesso 0-2, ágil", tipo: "leve", tags: ["sub-arma", "uma mao", "perfurar", "arremesso", "agil", "faca", "leve"] },
        "facao": { nome: "Facão", dano: "2d6", esp: "sub-arma, uma mão, poder, cortante", tipo: "leve", tags: ["sub-arma", "uma mao", "poder", "cortante", "faca", "leve"] },
        "lamina_oculta": { nome: "Lâmina Oculta", dano: "2d6", esp: "sub-arma, uma mão, ágil", tipo: "leve", tags: ["sub-arma", "uma mao", "agil", "faca", "leve"] },
        "sai": { nome: "Sai", dano: "2d6", esp: "sub-arma, uma mão, perfurar-3, crítico-desarme, ágil", tipo: "leve", tags: ["sub-arma", "uma mao", "perfurar", "desarme", "agil", "faca", "leve"] },
        "punhal": { nome: "Punhal", dano: "2d6", esp: "sub-arma, uma mão, perfurar-4, ágil", tipo: "leve", tags: ["sub-arma", "uma mao", "perfurar", "agil", "faca", "leve"] },

        // === HASTES ===
        "alabarda": { nome: "Alabarda", dano: "4d6", esp: "arma, duas mãos, alcance 0-1, crítico-derrubar, poder", tipo: "pesada", tags: ["arma", "duas maos", "alcance", "poder", "haste", "pesada"] },
        "bastao": { nome: "Bastão", dano: "2d6", esp: "arma, duas mãos, alcance 0-1, crítico-derrubar, poder", tipo: "leve", tags: ["arma", "duas maos", "alcance", "poder", "haste", "leve"] },
        "berdiche": { nome: "Berdiche", dano: "3d6", esp: "arma, duas mãos, alcance 0-1, perfurar-5", tipo: "pesada", tags: ["arma", "duas maos", "alcance", "perfurar", "haste", "pesada"] },
        "bisento": { nome: "Bisento", dano: "3d6", esp: "arma, duas mãos, alcance 0-1, cortante", tipo: "leve", tags: ["arma", "duas maos", "alcance", "cortante", "haste", "leve"] },
        "foice": { nome: "Foice", dano: "2d6", esp: "arma, duas mãos, alcance 0-1, perfurar-5, ágil", tipo: "leve", tags: ["arma", "duas maos", "alcance", "agil", "haste", "leve"] },

        // === LANÇAS ===
        "dardo": { nome: "Dardo", dano: "2d6", esp: "arma, uma mão, alcance 0-1, perfurar-5, arremesso 4, ágil", tipo: "leve", tags: ["arma", "uma mao", "alcance", "arremesso", "agil", "lanca", "leve"] },
        "dory": { nome: "Dory", dano: "3d6", esp: "arma, duas mãos, alcance 1, perfurar-3, arremesso 1-2, ágil", tipo: "leve", tags: ["arma", "duas maos", "alcance", "perfurar", "agil", "lanca", "leve"] },
        "lanca_qiang": { nome: "Qiang", dano: "3d6", esp: "arma, duas mãos, alcance 0-1, perfurar-2, arremesso 1-2, ágil", tipo: "leve", tags: ["arma", "duas maos", "alcance", "agil", "lanca", "leve"] },
        "justa": { nome: "Justa", dano: "4d6", esp: "arma, uma mão, pesada 4, manuseio -5, poder", tipo: "pesada", tags: ["arma", "uma mao", "poder", "lanca", "pesada"] },
        "lanca_sarissa": { nome: "Sarissa", dano: "2d6", esp: "arma, duas mãos, alcance 2, perfurar-2, arremesso 2-3, poder", tipo: "pesada", tags: ["arma", "duas maos", "alcance_2", "poder", "lanca", "pesada"] },
        "tridente": { nome: "Tridente", dano: "2d6", esp: "arma, uma mão, alcance 0-1, perfurar-5, arremesso 2, poder", tipo: "leve", tags: ["arma", "uma mao", "alcance", "perfurar", "poder", "lanca", "leve"] },

        // === MACHADOS & MARTELOS ===
        "maca": { nome: "Maça", dano: "3d6", esp: "arma, uma mão, perfurar-3, pesada 3, poder", tipo: "pesada", tags: ["arma", "uma mao", "perfurar", "pesada", "poder", "martelo"] },
        "maca_lisa": { nome: "Maça Lisa", dano: "3d6", esp: "arma, uma mão, poder", tipo: "pesada", tags: ["arma", "uma mao", "poder", "martelo", "pesada"] },
        "machadinha": { nome: "Machadinha", dano: "2d6", esp: "arma, uma mão, arremesso 0-1, poder", tipo: "leve", tags: ["arma", "uma mao", "arremesso", "poder", "machado", "leve"] },
        "machado_batalha": { nome: "Machado de Batalha", dano: "4d6", esp: "arma, duas mãos, poder", tipo: "pesada", tags: ["arma", "duas maos", "poder", "machado", "pesada"] },
        "marreta_guerra": { nome: "Marreta de Guerra", dano: "5d6", esp: "arma, duas mãos, poder, pesada 3, manuseio -2", tipo: "pesada", tags: ["arma", "duas maos", "poder", "martelo", "pesada"] },
        "martelo": { nome: "Martelo", dano: "3d6", esp: "arma, uma mão, manuseio -2, pesada 3, poder", tipo: "pesada", tags: ["arma", "uma mao", "pesada", "poder", "martelo"] },

    }
};

const dadosGuildas = {
    "ardor": {
        bonus: "Agilidade",
        slotsArmas: [
            { label: "Luva de Combate", item: "luva" },
            { label: "Luva de Combate", item: "luva" },
            { label: "Taca T", item: "faca_t" },
            { label: "Taca T", item: "faca_t" }
        ],
        slotsTraje: [{ label: "Traje de Couro", item: "couro" }],
        riqueza: "2",
        maji: "Maji Base de Sinal (Godama), Ataque Acelerado, Duas Maji a sua escolha",
        hab1: { nome: "Força e Esquiva", desc: "Use a força do inimigo contra ele. Ao realizar a reação Esquiva com sucesso contra um ataque a alcance 0, o inimigo recebe a Força dele em d6-dano." },
        hab2: { nome: "Disciplina Formidável", desc: "Pode realizar a Manobra Crítica Desarme com 1-Crítico ao invés de 2. Porém apenas usando ataques desarmados a alcance-0.", req: "Força 2" },
        hab3: { nome: "Arma Temporária", desc: "Use qualquer coisa ao seu redor. Gaste 1 Ação para pegar um objeto (pedra, cadeira, garrafa, caneta), que causa 2d6-dano com Força como modificador. Sua Força é usada para atacar e após acertar um golpe a arma quebra.", req: "Astúcia 2" },
        hab4: { nome: "Fraqueza do Alvo", desc: "Gaste 2 Ações para entender os movimentos e fragilidades de um alvo. Recebe +1d6-dano em qualquer ataque com a Perícia Lutar contra ele até o fim da cena.", req: "Carisma 2" }
    },
    "blugarony": {
        bonus: "Força",
        slotsArmas: [
            { label: "Arma ou Sub-Arma", filtros: ["arma", "sub-arma"] }
        ],
        slotsTraje: [{ label: "Traje de Malha", filtros: ["malha"] }],
        riqueza: "3",
        maji: "Maji Base de Sinal (Godama), Duas Maji de Sinal, Duas Maji",
        hab1: { nome: "Impacto Devastador", desc: "Ao realizar um ataque desarmado, pode gastar mais 1 Ação para causar +1d6-dano, além disso o alvo não pode escolher a reação Defesa." },
        hab2: { nome: "Disciplina Formidável", desc: "Uma vez por cena, pode ignorar qualquer Penalidade que esteja sofrendo até o fim do seu Turno de Equipe.", req: "Vigor 3" },
        hab3: { nome: "Maratona Implacável", desc: "Sempre que acertar um ataque desarmado, pode se mover para um local a alcance 1, sem gastar ação.", req: "Agilidade 2 /Força 3" },
        hab4: { nome: "Ritmo Ascendente", desc: "Uma vez por Turno de Equipe ao acertar um ataque desarmado, recebe 1 Ação extra.", req: "Agilidade 4" }
    },
    "borealis": {
        bonus: "Agilidade",
        slotsArmas: [
            { label: "Espada Leve", filtros: ["espada", "leve"], modo: "E" },
            { label: "Espada Leve", filtros: ["espada", "leve"], modo: "E" },
            { label: "Balestra", filtros: ["balestra"] }
        ],
        slotsTraje: [{ label: "Traje de Couro", filtros: ["couro"] }],
        riqueza: "3",
        maji: "Maji Base de Fala (Godai), Duas Maji de Vento, Uma Maji Qualquer",
        hab1: { nome: "Dupla Defensiva", desc: "Em Dupla Empunhadura ao usar a ação Postura Defensiva, recebe 1d6-defesa, ao invés de +2." },
        hab2: { nome: "Contrafluxo", desc: "Enquanto estiver empunhando duas armas, uma vez por rodada, quando usar a reação Contra Ataque, se tiver o maior resultado, além de atacar, consegue defender todo o dano que o oponente causaria.", req: "Agilidade 4" },
        hab3: { nome: "Corte X", desc: "Enquanto estiver empunhando duas armas, ao realizar um ataque pode gastar 1 Ação para realizar outro com a segunda arma, porém, escolha apenas um dos dois testes como resultado para efetivamente ser usado contra o alvo.", req: "Agilidade 3" },
        hab4: { nome: "Ponto de Ruptura", desc: "Você sabe o ponto fraco em um traje só de olhar, com ataques usando Agilidade pode utilizar as Manobras Críticas Preciso e Quebrar com 1 Crítico ao invés de 2.", req: "Astúcia 2" }
    },
    "canis": {
        bonus: "Agilidade",
        slotsArmas: [
            { label: "Arma", filtros: ["arma"] },
            { label: "Sub-Arma", filtros: ["sub-arma"] }
        ],
        slotsTraje: [{ label: "Traje de Couro", item: "couro" }],
        riqueza: "1",
        maji: "Maji Base de Fala ou Sinal, duas Maji de Sol, duas Maji qualquer",
        hab1: { nome: "Canis Louco", desc: "Com as mãos livres, você pode apoiar as duas no chão, aumentando seu deslocamento na ação Mover em Alcance 1. Você pode segurar armas de uma mão com a boca e armas de duas mãos quando tiver Força 3." },
        hab2: { nome: "Ataque Feroz", desc: "Ao acertar um ataque com armas leves ou pesadas, você pode realizar um ataque desarmado sem gastar ação.", req: "Agilidade 3" },
        hab3: { nome: "Furia Ferion", desc: "Acostumados ao calor e treinados em vulcões, os Canis possuem reduzir 2 contra dano de fogo. Além disso, toda Maji de Fala ou Sinal de Sol que causar dano recebe +1d6 de dano.", req: "Vigor 2" },
        hab4: { nome: "Investida Destrutiva", desc: "Ao realizar um ataque após se mover no mesmo Turno de Equipe, você recebe +1d6 de dano extra por Alcance deslocado, porém também sofre esse dano extra devido ao impacto.", req: "Força 3/ Vigor 2" }
    },
    "duellante": {
        bonus: "Agilidade",
        slotsArmas: [
            { label: "Arma", filtros: ["arma"] }
        ],
        slotsTraje: [{ label: "Traje de Couro", item: "couro" }],
        riqueza: "3",
        maji: "Quatro Maji",
        hab1: { nome: "Iniciativa de Duelo", desc: "Sua Equipe vence a Iniciativa em caso de empate. Na cena de Maji-Du, recebe +2 em seu teste de Agilidade na Fase 1." },
        hab2: { nome: "Bravo Duellante", desc: "Uma vez por Rodada, após usar Contra Ataque, você também pode realizar a reação Esquiva para tentar evitar sofrer o ataque. Em uma cena de Maji-Du, o oponente precisa superar em 2 os Pontos de Essência gastos para Contra Ataque.", req: "Agilidade 3, Inteligência 2" },
        hab3: { nome: "Manipulação Essencial", desc: "Gastando 3 Ações, pode adicionar uma Característica do Ambiente no campo que está, contando que faça sentido com a cena. Exemplo: manipular a essência para fazer chover.", req: "Inteligência 2" },
        hab4: { nome: "Preparo Antecipado", desc: "Tem +2-Ponto em sua Reserva de Pontos de Essência.", req: "Astúcia 2, Inteligência 2" }
    },
    "eco": {
        bonus: "Inteligência",
        slotsArmas: [
            { label: "suportes", filtros: [] }
        ],
        // slotsTraje: [{ label: "Nenhum", filtros: [] }],
        riqueza: "3",
        maji: "Maji Base de Escrita, Duas Maji de Escrita, Duas Maji Qualquer",
        hab1: { nome: "Economia Florestal", desc: "Ao utilizar uma Maji Elemental de Controle, Defesa ou Suporte, você pode atingir +1-alvo ou dar +5-cura." },
        hab2: { nome: "Benção da Floresta", desc: "Enquanto estiver em uma Zona Zero Elemental, você pode gastar 1 Ação para devolver a micro-essência residual ao campo. Assim, os efeitos da Zona Zero Elemental são anulados por 1 rodada. Pode ser usada 3 vezes por cena.", req: "Inteligência 4" },
        hab3: { nome: "Ecológico", desc: "Preserve a natureza. Você tem +4 na Reserva de Pontos Essência.", req: "Inteligência 3" },
        hab4: { nome: "Força da Terra", desc: "Ao usar uma Maji Elemental, recebe +1 uso ou +1 rodada. Esta habilidade só funciona se houver 5 ou mais Pontos Elemental no campo.", req: "Astúcia 2, Inteligência 3" }
    },
    "royal": {
        bonus: "Inteligência",
        slotsArmas: [
            { label: "Arma", filtros: ["arma"] }
        ],
        slotsTraje: [{ label: "Traje de Couro", item: "couro" }],
        riqueza: "3",
        maji: "Maji Base de Escrita, Duas Maji de Escrita, Duas Maji",
        hab1: { nome: "Querido Grimório", desc: "Você possui um Grimório capaz de armazenar Maji, com limite de 5-espaços. Cada Maji de Escrita Pequena ocupa 1-espaço. Registre toda Maji escrita no Grimório." },
        hab2: { nome: "Grimório Grande", desc: "Seu Grimório tem +5-espaços.", req: "Inteligência 3" },
        hab3: { nome: "Grimório Robusto", desc: "Gastando 3-espaços do seu Grimório, você pode armazenar uma Maji de Escrita de Pergaminho Grande.", req: "Astúcia 2" },
        hab4: { nome: "Grimório Voador", desc: "Seu Grimório pode se mover por conta própria, sem precisar ser segurado.", req: "Inteligência 3" }
    },
    "justica": {
        bonus: "Vigor",
        slotsArmas: [
            { label: "Espada Bastarda", item: "espada_bastarda" },
            { label: "Escudo", filtros: ["escudo"] }
        ],
        slotsTraje: [{ label: "Traje de Malha ou Placa", filtros: ["malha", "placa"] }],
        riqueza: "2",
        maji: "Maji Base de Fala (Godai), Quatro Maji",
        hab1: { nome: "Código de Justiça", desc: "Justo sempre. Você tem +2 em todos os testes com armas. Porém você não pode atacar um alvo que esteja incapaz de lutar ou que não queira lutar. Apague essa habilidade de sua Ficha se quebrar uma regra. Pode adquirir essa habilidade novamente refazendo seus votos gastando EXP." },
        hab2: { nome: "Combate Justo", desc: "Enquanto estiver sofrendo de desvantagem em combate (lutando em menor número ou sofrendo mais penalidades que o oponente), recebe 1 Ação extra.", req: "Vigor 4" },
        hab3: { nome: "Condenar", desc: "Se decidir a pena de um alvo baseado nos atos que ele realizou, você tem +1d6 em todo ataque (menos Maji) e +5 em qualquer teste que use Carisma contra ele, porém, seus atos devem estar de acordo com a pena. Exemplo: Se decidir pena de morte só ganha o bônus para atos mortais.", req: "Carisma 2" },
        hab4: { nome: "Justiça Cega", desc: "Capaz de avaliar rapidamente a verdade. Tem +5 em testes de Astúcia para perceber mentiras e em Carisma para sentir emoções e intenções ocultas.", req: "Astúcia 2/Carisma 2" }
    },
    "nadyat": {
        bonus: "Vigor",
        slotsArmas: [
            { label: "Arma", filtros: ["arma"] }
        ],
        slotsTraje: [{ label: "Traje de Couro ou Malha", filtros: ["couro", "malha"] }],
        riqueza: "1",
        maji: "Cinco Maji Qualquer",
        hab1: { nome: "Quebrando os Limites", desc: "Ao utilizar Superar Limites, seus benefícios são mantidos até o fim do seu próximo Turno de Equipe, assim como o efeito de ignorar as Penalidades." },
        hab2: { nome: "Berserker", desc: "Ao ativar Superar Limites, recebe +Xd6-dano com arma, onde X é o nível do Superar Limites ativo.", req: "Força 2, Vigor 3, Carisma 2" },
        hab3: { nome: "Legado de Firion", desc: "O legado de superação de Firion vive em cada membro da Nadyat, ao ativar o 3° Superar Limites, recebe o dobro do efeito, ou seja, 2 Ações e +10.", req: "Vigor 3, Carisma 2" },
        hab4: { nome: "Rompendo as Barreiras", desc: "Quando usar Superar Limites, você se liberta de qualquer Condição que esteja sofrendo (menos se não quiser se libertar).", req: "Vigor 3" }
    },
    "oberon": {
        bonus: "Vigor",
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
        maji: "Maji Base de Fala, Reequipar, Duas Maji a sua escolha",
        hab1: { nome: "Arsenal Oberon", desc: "A Maji que torna os implacáveis. Sua Maji Reequipar aumenta em +4 níveis." },
        hab2: { nome: "Ataques Fluidos", desc: "Ao realizar um ataque com uma arma, uma vez por Turno de Equipe, pode gastar 1 Ação para realizar outro ataque com uma arma diferente.", req: "Agilidade 2, Força 2" },
        hab3: { nome: "Mestre das Armas", desc: "Para cada arma diferente que utilizar para realizar um ataque durante o mesmo Turno de Equipe, tem um bônus de +1d6-dano no próximo ataque.", req: "Força 3" },
        hab4: { nome: "Retaliação Contraposta", desc: "Quando um oponente declara um Contra Ataque usando armas, pode escolher anular o ataque e a reação com as armas se atingindo, para causar Atordoado 1 no alvo.", req: "Agilidade 3" }
    },
    "strike": {
        bonus: "Astúcia",
        slotsArmas: [
            { label: "Arma", filtros: ["arma"] },
            { label: "Sub-Arma ou escudo", filtros: ["sub-arma", "escudo"] }
        ],
        slotsTraje: [{ label: "Traje de Couro", item: "couro" }],
        riqueza: "3",
        maji: "Maji Base de Fala ou Escrita, Três Maji a sua escolha",
        hab1: { nome: "Estratégia", desc: "Durante uma cena crie um plano em colaboração com todos presentes. Cada um escolhe um atributo e como vai usa-la no plano, fornecendo +1d10 uma vez para executar o ato no plano na cena." },
        hab2: { nome: "Plano B", desc: "Quando um plano sai do controle, você sempre tem outras alternativas. Gaste 3 Ações, refaça um aspecto narrativo na cena, como se estivesse usando a Manobra Crítica Narrativo. Só pode usar essa habilidade uma vez por sessão.", req: "Inteligência 2/Astúcia 3" },
        hab3: { nome: "Raciocinio Rápido", desc: "Você é capaz de adaptar-se rapidamente a qualquer situação. Se falhar ao usar a reação Esquiva, pode usar a reação Defesa uma vez por rodada.", req: "Agilidade 2/Astúcia 3" },
        hab4: { nome: "Sintonia de Guerra", desc: "Em uma situação em que está liderando o grupo, Habilidades de Sinergia de Nível 1, podem ser usadas por seus aliados na cena, mesmo que não tenham qualquer sinergia entre si.", req: "Carisma 2" }
    },
    "tayport": {
        bonus: "Inteligência",
        slotsArmas: [
            { label: "Arma ou Sub-Arma", filtros: ["arma", "sub-arma"] }
        ],
        // slotsTraje: [{ label: "Traje", filtros: [] }],
        riqueza: "3",
        maji: "Maji Base de Fala, Sem Obstáculos, Maji Base de Escrita, Teleporte, uma Maji.",
        hab1: { nome: "Em Todo Lugar", desc: "Você cria um portal estratégico. Ao conjurar Sem Obstáculos, pode alterar seu texto, para criar portais que conectam o caminho percorrido por você, onde os seres podem atravessar pelo portal até o final do Turno de Equipe." },
        hab2: { nome: "Portal Tático", desc: "Pode usar uma vez em seu turno de equipe um uso da Maji Sem Obstáculos, para teleportar um ataque que use um projétil, como flechas e disparos de Maji a distância, efetivamente aumentando o seu alcance.", req: "Agilidade 2" },
        hab3: { nome: "Rede de Portais", desc: "A sua Maji Teleporte, agora pode ter até 5 pergaminhos conectados a ele. Ao entrar ou enviar algo, deve escolher para qual deles será teleportado.", req: "Inteligência 3" },
        hab4: { nome: "Salto de Coordenação", desc: "Seu profundo conhecimento sobre a manipulação das moléculas e disposição física permite otimizar seus próximos movimentos. Sempre que gastar um uso da Maji Sem Obstáculos, você ganha uma ação extra.", req: "Agilidade 2/Inteligência 4" }
    },
    "tigre": {
        bonus: "Agilidade",
        slotsArmas: [
            { label: "Espada ou Lança", filtros: ["espada", "lanca"] }
        ],
        slotsTraje: [{ label: "Traje de Malha ou Couro", filtros: ["malha", "couro"] }],
        riqueza: "3",
        maji: "Maji Base de Fala, Uma Maji de Fala, Três Maji",
        hab1: { nome: "Sangue de Tigre", desc: "Um guerreiro é temido por sua persistência. Enquanto estiver sofrendo da  Primeira Penalidade, recebe reduzir 2. Aumenta para reduzir 5 enquanto estiver na Segunda Penalidade." },
        hab2: { nome: "Encare a Morte", desc: "Eles podem correr, mas não para sempre. Uma vez por cena, após o alvo declarar sua reação, pode fazer um teste oposto de Presença contra ele. Se vencer, pode obrigar o alvo a mudar sua reação para Contra Ataque.", req: "Carisma 2" },
        hab3: { nome: "Ferocidade", desc: "Quando realizar um ataque com armas, pode escolher ter entre -1 a -5 no ataque, para receber o mesmo número em soma, seja +1 a +5 no dano.", req: "Força 2" },
        hab4: { nome: "Presas e Sangue", desc: "Ao usar ou usarem contra você a reação Contra Ataque, cause +2d6-dano nesse ataque.", req: "Agilidade 3" }
    },
    "yastrev": {
        bonus: "Força",
        slotsArmas: [
            { label: "Espada ou Lança", filtros: ["espada", "lanca"] }
        ],
        slotsTraje: [{ label: "Traje de Malha ou Couro", filtros: ["malha", "couro"] }],
        riqueza: "3",
        maji: "Maji Base de Fala, Uma Maji de Fala, Três Maji",
        hab1: { nome: "Golpe Unico", desc: "Ao realizar um ataque desarmado com sucesso, pode gastar ações restantes para dar +1d6-dano por ação gasta." },
        hab2: { nome: "Estrangular", desc: "Enquanto está imobilizando um alvo, pode gastar 1 Ação e causar 2d6-dano que o alvo não pode reduzir e o bloqueia de usar Maji de Fala nessa rodada.", req: "Força 3" },
        hab3: { nome: "Historico Problematico", desc: "Realize um teste oposto de Carisma contra um alvo, se tiver sucesso o alvo recebe Medo 1, se retirar o dobro do resultado do alvo, se torna Medo 2.", req: "Carisma 2" },
        hab4: { nome: "Velocidade de Rapina", desc: "Os insetos tentam fugir. Pode gastar 2 Ações para se mover em 3-alcances.", req: "Agilidade 2" }
    },
    "blusan": {
        bonus: "Inteligência",
        slotsArmas: [
            { label: "Arma", filtros: ["arma"] }],
        slotsTraje: [
            { label: "Traje de Couro ou Malha", filtros: ["couro", "malha"] }],
        riqueza: "2",
        maji: "Maji Base de Sinal, Duas Maji de Sol, Duas Maji",
        hab1: { nome: "Sol Azul", desc: "Ao utilizar uma Maji de Sol que causaria a condição Queimando, você pode escolher causar Atordoado do mesmo nível em vez disso. Nesse caso, a Maji não causa dano." },
        hab2: { nome: "Sol Verde", desc: "Ao utilizar uma Maji de Sol que causaria Queimando, você pode alterar o efeito para, em vez de causar dano, conceder cura por 3 rodadas. Só pode ser usado uma vez por alvo na cena.", req: "Inteligência 3" },
        hab3: { nome: "Sol Vermelho", desc: "Ao utilizar uma Maji de Sol que causaria Queimando, você pode escolher, em vez disso, causar 2d6 de dano de fogo por nível de Queimando que seria aplicado ao alvo.", req: "Inteligência 4" },
        hab4: { nome: "Sol Roxo", desc: "Ao ativar Sol Azul, você pode causar Queimando e Atordoado do mesmo nível ao mesmo tempo. Se a Maji causar dano normalmente, ela ainda causa o dano, porém você gasta o dobro de Pontos Celestiais.", req: "Sol Azul, Inteligência 5" }
    },

    "exterminadores": {
        bonus: "Vigor",
        slotsArmas: [
            { label: "Arma Pesada", filtros: ["pesada"] }
        ],
        slotsTraje: [{ label: "Traje de Malha", filtros: ["malha"] }],
        riqueza: "1",
        maji: "Maji Base de Fala, Três Maji",
        hab1: { nome: "Extermínio", desc: "Você treinou para rastrear e eliminar Vorulos com precisão. Sempre que fizer um teste para encontrar sinais da presença de seres, pode rolar com +1d10. Além disso, recebe +1d6-dano contra Vorulos em ataque com Arma Pesada." },
        hab2: { nome: "Auto Sacrificio", desc: "Para cada vez que escolher não usar uma Reação, no seu próximo ataque receba +1d6-dano.", req: "Vigor 3" },
        hab3: { nome: "Força Devastadora", desc: "Todo dado de dano que resultar em 6, pode rolar +1d6 no dano.", req: "Força 4" },
        hab4: { nome: "Homem Sem Medo", desc: "A experiência em batalhas contra Vorulos fortaleceu sua mente. Você reduz Medo 1 para Medo 0 (ou seja, não sofre a condição) e Medo 2 para Medo 1.", req: "Carisma 2" }
    },

    "dancarinas": {
        bonus: "Agilidade",
        slotsArmas: [
            { label: "Pata", item: "pata" },
            { label: "Pata", item: "pata" }
        ],
        slotsTraje: [{ label: "Traje de Couro", item: "couro" }],
        riqueza: "2",
        maji: "Maji Base de Fala, Duas Maji de Fala, Uma Maji",
        hab1: { nome: "Dança de Ataque", desc: "Enquanto estiver com uma pata em cada mão, se errar um ataque com pata, você pode realizar um ataque com a outra pata gastando 1 Ação neste Turno de Equipe." },
        hab2: { nome: "Dança Imprevisível", desc: "A reação Esquiva não pode ser usada contra seus ataques com pata.", req: "Agilidade 3, Astúcia 2" },
        hab3: { nome: "Dança Esquiva", desc: "Uma vez por rodada, ao usar a reação Esquiva, você pode usar seu nível de Astúcia como modificador. Apenas se estiver usando duas patas.", req: "Agilidade 3, Astúcia 3" },
        hab4: { nome: "Dança Veloz", desc: "Depois de acertar um ataque com pata, você recebe a condição Rápido durante este Turno de Equipe.", req: "Agilidade 3" }
    },

    "prime": {
        bonus: "Inteligência",
        slotsArmas: [
            { label: "Arma", filtros: ["arma"] },
            { label: "Sub-Arma", filtros: ["sub-arma"] }
        ],
        slotsTraje: [{ label: "Traje de Malha", item: "malha" }],
        riqueza: "2",
        maji: "Maji Base de Sinal, Três Maji",
        hab1: { nome: "Reformular", desc: "Uma vez por cena, você pode aumentar em +1 nível (escolhendo uma evolução) uma de suas Maji, mas ela passa a custar o dobro de Pontos de Essência ao ser usada. Ao fim da cena, a Maji retorna ao seu nível normal." },
        hab2: { nome: "Convergência Dissonante", desc: "Uma vez por cena, ao usar uma Maji de Fala ou Sinal (ou ao criar uma Maji de Escrita), você pode realizar outra Maji ao mesmo tempo, no mesmo ato. No entanto, a fusão te machuca, causando Atordoado 1.", req: "Inteligência 3, Vigor 2" },
        hab3: { nome: "Subtração Máxima", desc: "Ao usar uma Maji de Fala ou Sinal (ou ao criar uma Maji de Escrita), você pode aumentar o dano em até 2d6, sofrendo o mesmo valor de dano em si mesmo sem poder reduzir.", req: "Inteligência 4, Vigor 2" },
        hab4: { nome: "Subversão Instável", desc: "Você pode alterar parâmetros numéricos ao utilizar uma Maji de Fala ou Sinal (ou ao criar uma Maji de Escrita). Sempre que fizer isso, você recebe Exausto 1 devido à potência da Maji.", req: "Inteligência 5, Vigor 2" }
    },

    "varbar": {
        bonus: "Força",
        slotsArmas: [
            { label: "Arma", filtros: ["arma"] },
            { label: "Arma", filtros: ["arma"] }
        ],
        slotsTraje: [{ label: "Traje de Couro", item: "couro" }],
        riqueza: "2",
        maji: "Nenhuma",
        hab1: { nome: "Esforço Eterno", desc: "Você é imune aos efeitos causados pela 1ª Penalidade." },
        hab2: { nome: "Ato Final", desc: "Ao escolher Agarre a Vida como Ato de Morte, você pode escolher ativar a condição Morrendo e não realizar a rolagem de dados.", req: "Vigor 2" },
        hab3: { nome: "Vigoroso", desc: "Você é imune aos efeitos causados pela 2ª Penalidade.", req: "Vigor 3" },
        hab4: { nome: "Furiso", desc: "Duas vezes por cena, você pode ativar essa habilidade, recebendo +1d10 por 3 rodadas em testes de Força ou Agilidade, à sua escolha. Ao final dessas rodadas, recebe Atordoado 1 até o fim da cena. Na segunda ativação da habilidade na mesma cena, recebe Atordoado 2.", req: "Agilidade 2, Força 2, Vigor 2" }
    },

    "runa": {
        bonus: "Inteligência",
        slotsTraje: [{ label: "Traje de Couro", item: "couro" }],
        slotsOutros: [{ label: "Potes de Tinta", item: "tinta" }],
        riqueza: "2",
        maji: "Maji Base de Escrita, Duas Maji de Escrita, Duas Maji",
        hab1: { nome: "Tinta Maji", desc: "Uma vez por cena, você pode transferir um tipo de essência para um pote. Cada pote tem 3 usos: gaste 1 uso para Maji de Escrita Pequena ou 2 usos para Maji de Escrita Grande. Ao usar a tinta, escolha uma Maji compatível com o tipo de essência contida no pote." },
        hab2: { nome: "Encantamento Rúnico", desc: "Uma vez por cena, você pode marcar uma Maji de Escrita Pequena em um Equipamento. Quem usar o equipamento pode gastar 3 Ações para ativar a Maji; após isso, as escritas somem.", req: "Astúcia 2, Inteligência 3" },
        hab3: { nome: "Lacre de Encantamento", desc: "O Encantamento Rúnico não some ao ser usado. Porém, após cada ativação, ele exige 3 rodadas para poder ser usado novamente.", req: "Encantamento Rúnico, Inteligência 3" },
        hab4: { nome: "Super Tinta", desc: "Ao usar uma Maji com Tinta Maji, você pode gastar 1 Ação para usá-la novamente. Apenas após isso a tinta some.", req: "Tinta Maji, Astúcia 3" }
    },

    "ampulheta": {
        bonus: "Inteligência",
        slotsTraje: [{ label: "Traje de Malha ou Couro", filtros: ["malha", "couro"] }],
        slotsArmas: [{ label: "Arma ou Sub-Arma", filtros: ["arma", "sub-arma"] }],
        riqueza: "3",
        maji: "Maji Base de Sinal ou Escrita, Duas Maji de Tempo, Uma Maji",
        hab1: { nome: "Flecha do Tempo", desc: "Ao usar Maji de Tempo, elas possuem +1 uso ou +1 rodada. Essa habilidade só funciona se o Ponto Cósmico do Campo estiver maior ou igual a 5." },
        hab2: { nome: "Entropicamente", desc: "Ao usar uma Maji de Tempo, você pode escolher causar 1d6 de dano em todos no campo.", req: "Inteligência 3" },
        hab3: { nome: "Causalidade", desc: "Ao usar uma Maji de Tempo, você cria uma reação temporal a partir da essência residual usada. No mesmo turno, se conjurar outra Maji de Tempo, ela não custará Ponto Cósmico.", req: "Inteligência 3" },
        hab4: { nome: "Cronologia Quebrada", desc: "Uma vez por cena, você pode escolher ter sucesso automático em qualquer teste.", req: "Agilidade 4" }
    },

    

};