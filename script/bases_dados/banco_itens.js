// =================================================================================
// ARQUIVO: banco_itens.js
// Dados dos itens disponíveis para seleção na ficha de personagem
// =================================================================================

const bancoItens = {
    trajes: {
        "couro": { nome: "Traje de Couro", defesa: "Reduzir 3", esp: "Resistência (Frio), Vulnerável (Fogo)", tags: ["leve", "couro", "traje"] },
        "malha": { nome: "Traje de Malha", defesa: "Reduzir 3", esp: "Durável, Vulnerável (Elétrico)", tags: ["medio", "malha", "traje"] },
        "placa": { nome: "Traje de Placa", defesa: "Reduzir 6", esp: "Durável, Vulnerável (Elétrico), Lento", tags: ["pesado", "placa", "traje"] },
        // "cavaleiro": { nome: "Traje de Cavaleiro", defesa: "Reduzir 9", esp: "Vulnerável (Elétrico), Lento", tags: ["pesado", "traje"] },
        "gladiador": { nome: "Traje de Gladiador", defesa: "Reduzir 5", esp: "Espinhos, Vulnerável (Elétrico), Lento", tags: ["medio", "traje"] },
        "nori": { nome: "Traje Nori", defesa: "Reduzir 3", tags: ["leve", "traje"] },
        // "sevilia": { nome: "Vestimenta Sevilia", defesa: "Reduzir 3", tags: ["leve", "traje"] }
    },

    armas: {
        // === ESCUDOS ===

        "escudo_peq": {
            nome: "Escudo Pequeno",
            dano: "1d6",
            def: 3,
            acoes: 2,
            alcance: "0-1",
            riqueza: 1,
            esp: "uma mão, arremesso 0-1 ",
            tags: ["escudo", "uma_mao", "arremesso", "leve"]
        },

        "escudo_gde": {
            nome: "Escudo Grande",
            dano: "2d6",
            def: 5,
            acoes: 2,
            alcance: "0",
            riqueza: 2,
            esp: "uma mão, pesada 2",
            tags: ["escudo", "uma_mao", "pesada", "protecao"]
        },

        "escudo_Duplo": {
            nome: "Escudo Duplo",
            dano: "3d6",
            def: 8,
            acoes: 2,
            alcance: "0",
            riqueza: 3,
            esp: "duas mãos, pesada 3",
            tags: ["escudo", "duas_maos", "pesada"]
        },

        // === ITENS RETIRADOS (Escudos) ===
        // "escudo_espinho": virou propriedade de customização ou item raro
        // "escudo_montado": fundido com Escudo de Torre

        // === ARCOS E BALESTRAS ===

        "arco_composto": {
            nome: "Arco Composto",
            dano: "Munição",
            acoes: 2,
            alcance: "1-5",
            riqueza: 4,
            esp: "duas mãos, recarga 1, manuseio +1",
            tags: ["arma", "arco", "distancia", "duas_maos"]
        },

        "arco_recurvo": {
            nome: "Arco Recurvo",
            dano: "Munição",
            acoes: 2,
            alcance: "1-5",
            riqueza: 2,
            esp: "duas mãos, recarga 1",
            tags: ["arma", "arco", "distancia", "duas_maos"]
        },

        "arco_longo": {
            nome: "Arco Longo",
            dano: "Munição",
            acoes: 2,
            alcance: "1-7",
            riqueza: 2,
            esp: "duas mãos, recarga 0, manuseio -1, pesado 2",
            tags: ["arma", "arco", "distancia", "duas_maos"]
        },

        "balestra": {
            nome: "Balestra",
            dano: "3d6",
            acoes: 2,
            alcance: "0-3", // Alcance Médio, mas penetrante
            riqueza: 3,
            esp: "duas mãos, recarga 1, perfurar 5",
            tags: ["arma", "balestra", "distancia", "duas_maos", "mecanico"]
        },

        "mini_balestra": {
            nome: "Mini Balestra",
            dano: "1d6",
            acoes: 1,
            alcance: "0-2",
            riqueza: 2,
            esp: "uma mão, recarga 1, perfurar 2",
            tags: ["arma", "balestra", "distancia", "uma_mao", "leve"]
        },

        "balestra_repeticao": {
            nome: "Balestra de Repetição",
            dano: "2d6",
            acoes: 2,
            alcance: "0-3",
            riqueza: 4,
            esp: "duas mãos",
            tags: ["arma", "balestra", "distancia", "duas_maos"]
        },

        // === ITENS RETIRADOS (Arcos) ===
        // "arco_composto", "arco_recurvo", "arco_longo" -> Todos usam status de "Arco"
        // "cho_ko_nu" -> Virou Balestra de Repetição

        // === AUXILIARES E GARRAS ===

        "desarmado": {
            nome: "Ataque Desarmado",
            dano: "2d6",
            acoes: 1,
            alcance: "0",
            riqueza: 0,
            esp: "uma mão",
            tags: ["desarmado", "corpo_a_corpo"]
        },

        "katar": {
            nome: "Katar",
            dano: "2d6",
            acoes: 1,
            alcance: "0",
            riqueza: 3,
            esp: "uma mão, perfurar 2, crítico finta",
            tags: ["arma", "katar", "uma_mao", "perfurar", "leve"]
        },

        "garras": {
            nome: "Garras",
            dano: "2d6",
            acoes: 1,
            alcance: "0",
            riqueza: 2,
            esp: "uma mão, cortante",
            tags: ["arma", "garras", "uma_mao", "cortante", "leve"]
        },

        // "chakram": Mantido como arremesso exótico se desejar, ou usar status de "Bolsa de Facas"
        "chakram": {
            nome: "Chakram",
            dano: "2d6",
            acoes: 1,
            alcance: "0",
            riqueza: 2,
            esp: "uma mão, arremesso 0-1, manuseio -1",
            tags: ["arma", "chakram", "arremesso", "cortante"]
        },

        // === ITENS RETIRADOS (Auxiliares) ===
        // "tekko", "pata", "luva" -> Usam status de Katar ou Desarmado

        // === CORRENTES (Build 2) ===

        "chicote": {
            nome: "Chicote",
            dano: "2d6",
            acoes: 1,
            alcance: "0-1",
            riqueza: 1,
            esp: "uma mão",
            tags: ["arma", "corrente", "uma_mao", "leve"]
        },

        "kusarigama": {
            nome: "Kusarigama",
            dano: "2d6",
            acoes: 2,
            alcance: "0-2",
            riqueza: 3,
            esp: "duas mãos, (alcance 0, +1d6 dano)",
            tags: ["arma", "corrente", "duas_maos"]
        },

        // === ITENS RETIRADOS (Correntes) ===
        // "kusari_fundo", "kusarigama" -> Unificados em Arma de Corrente
        // "nunchaku", "mangual" -> Podem usar status de Maça ou Arma de Corrente

        // === ESPADAS ===

        "espada_longa": {
            nome: "Espada Longa",
            dano: "3d6",
            acoes: 2,
            alcance: "0",
            riqueza: 2,
            esp: "uma mão, perfurar 2",
            tags: ["arma", "espada", "uma_mao", "perfurar"]
        },

        "espada_grande": {
            nome: "Espada Grande",
            dano: "5d6",
            acoes: 2,
            alcance: "0",
            riqueza: 4,
            esp: "duas mãos, pesada 2",
            tags: ["arma", "espada", "duas_maos", "pesada"]
        },

        "rapieira": {
            nome: "Rapieira",
            dano: "2d6",
            acoes: 2,
            alcance: "0",
            riqueza: 2,
            esp: "uma mão, perfurar 5",
            tags: ["arma", "espada", "uma_mao", "perfurar", "agil"]
        },

        "lamina_dupla": {
            nome: "Lâmina Dupla",
            dano: "3d6",
            acoes: 2,
            alcance: "0",
            riqueza: 3,
            esp: "duas mãos, critico desarme",
            tags: ["arma", "espada", "duas_maos", "exotico"]
        },

        "katana": {
            nome: "Katana",
            dano: "3d6",
            acoes: 2,
            alcance: "0",
            riqueza: 4,
            esp: "duas mãos, cortante",
            tags: ["arma", "espada", "duas_maos", "cortante"]
        },

        // === ITENS RETIRADOS / LEGADO (Build Anterior) ===
        // "espada_bastarda": { nome: "Espada Bastarda", dano: "3d6", esp: "arma, uma mão, poder", tipo: "leve", tags: ["arma", "uma mao", "poder", "espada", "leve"] },
        // "espada_borboleta": { nome: "Espada Borboleta", dano: "2d6/3d6", esp: "arma, uma mão (separadas) / duas mãos (unidas), ágil", tipo: "leve", tags: ["arma", "duas maos", "agil", "espada", "leve"] },
        // "sakabato": { nome: "Sakabatō", dano: "2d6", esp: "arma, duas mãos, poder", tipo: "leve", tags: ["arma", "duas maos", "poder", "espada", "leve"] },
        // "montante": { nome: "Montante", dano: "4d6", esp: "arma, duas mãos, perfurar-2, pesada 3, poder", tipo: "pesada", tags: ["arma", "duas maos", "pesada", "poder", "espada", "pesada"] },
        // "ninjato": { nome: "Ninjato", dano: "2d6", esp: "arma, uma mão, cortante, ágil", tipo: "leve", tags: ["arma", "uma mao", "cortante", "agil", "espada", "leve"] },
        // "gladio": { nome: "Gládio", dano: "3d6", esp: "arma, uma mão, perfurar-3, poder", tipo: "leve", tags: ["arma", "uma mao", "perfurar", "poder", "espada", "leve"] },
        // "zweihander": { nome: "Zweihänder", dano: "5d6", esp: "arma, duas mãos, pesada 3, poder", tipo: "pesada", tags: ["arma", "duas maos", "pesada", "poder", "espada", "pesada"] },

        // === FACAS ===

        "adaga": {
            nome: "Adaga",
            dano: "2d6",
            acoes: 1,
            alcance: "0",
            riqueza: 0,
            esp: "uma mão, perfurar: 4",
            tags: ["faca", "arma", "perfurar", "leve"]
        },

        "bolsa_facas": {
            nome: "Bolsa de Facas",
            dano: "2d6",
            acoes: 1,
            alcance: "0-2",
            riqueza: 0,
            esp: "uma mão, perfurar: 2, arremesso 0-2",
            tags: ["faca", "arma", "arremesso", "distancia", "leve"]
        },

        "sai": {
            nome: "Sai",
            dano: "2d6",
            acoes: 1,
            alcance: "0",
            riqueza: 2,
            esp: "uma mão, perfurar: 3, critico desarme",
            tags: ["faca", "arma", "desarme", "exotico", "leve"]
        },

        // === ITENS RETIRADOS / LEGADO (Build Anterior) ===
        // A "Bolsa de Facas" agora cobre Kunai e Faca-T
        // "faca_t": { nome: "Bolsa Faca-T", dano: "2d6", esp: "sub-arma, uma mão, perfurar-5 (ao lançar), arremesso 0-2, ágil", tipo: "leve", tags: ["sub-arma", "uma mao", "perfurar", "arremesso", "agil", "faca", "faca_t", "leve"] },
        // "kunai": { nome: "Bolsa Kunai", dano: "2d6", esp: "sub-arma, uma mão, perfurar-2, arremesso 0-2, ágil", tipo: "leve", tags: ["sub-arma", "uma mao", "perfurar", "arremesso", "agil", "faca", "leve"] },
        // "facao": { nome: "Facão", dano: "2d6", esp: "sub-arma, uma mão, poder, cortante", tipo: "leve", tags: ["sub-arma", "uma mao", "poder", "cortante", "faca", "leve"] },
        // "lamina_oculta": { nome: "Lâmina Oculta", dano: "2d6", esp: "sub-arma, uma mão, ágil", tipo: "leve", tags: ["sub-arma", "uma mao", "agil", "faca", "leve"] },
        // "punhal": { nome: "Punhal", dano: "2d6", esp: "sub-arma, uma mão, perfurar-4, ágil", tipo: "leve", tags: ["sub-arma", "uma mao", "perfurar", "agil", "faca", "leve"] },

        // === HASTES ===
        "alabarda": { nome: "Alabarda", dano: "4d6", alcance: "0-1", esp: "duas mãos, crítico-derrubar, pesada 2", tipo: "pesada", tags: ["arma", "duas maos", "alcance", "poder", "haste", "pesada"] },
        "bastao": { nome: "Bastão", dano: "2d6", alcance: "0-1", esp: "duas mãos, crítico-derrubar", tipo: "leve", tags: ["arma", "duas maos", "alcance", "poder", "haste", "leve"] },
        "berdiche": { nome: "Berdiche", dano: "3d6", alcance: "0-1", esp: "duas mãos, perfurar-3", tipo: "pesada", tags: ["arma", "duas maos", "alcance", "perfurar", "haste", "pesada"] },
        // "bisento": { nome: "Bisento", dano: "3d6", esp: "arma, duas mãos, alcance 0-1, cortante", tipo: "leve", tags: ["arma", "duas maos", "alcance", "cortante", "haste", "leve"] },
        "foice": { nome: "Foice", dano: "2d6", alcance: "0-1", esp: "duas mãos, perfurar-2, ágil", tipo: "leve", tags: ["arma", "duas maos", "alcance", "agil", "haste", "leve"] },

        // === LANÇAS ===

        "dardo": {
            nome: "Dardo",
            dano: "2d6",
            acoes: 2,
            alcance: "0-1",
            riqueza: 1,
            esp: "uma mão, perfurar 5, arremesso 4",
            tags: ["arma", "lanca", "arremesso", "leve", "distancia"]
        },

        "qiang": {
            nome: "Qiang",
            dano: "3d6",
            acoes: 2,
            alcance: "0-1",
            riqueza: 2,
            esp: "duas mãos, perfurar 2, arremesso 2",
            tags: ["arma", "lanca", "haste", "duas_maos"]
        },

        "justa": {
            nome: "Justa",
            dano: "4d6",
            acoes: 2, // Arma pesada
            alcance: "0",
            riqueza: 3,
            esp: "uma mão, pesada 3, perfurar 3, manuseio -2",
            tags: ["arma", "lanca", "pesada", "montaria"]
        },

        "tridente": {
            nome: "Tridente",
            dano: "2d6",
            acoes: 2, // Considerado arma principal
            alcance: "0-1",
            riqueza: 3,
            esp: "uma mão, perfurar 3, arremesso 2, critico: imobilizar",
            tags: ["arma", "lanca", "exotico", "controle"]
        },

        // === ITENS RETIRADOS / LEGADO ===
        // "dory": { nome: "Dory", dano: "3d6", esp: "arma, duas mãos, alcance 1, perfurar-3, arremesso 1-2, ágil", tipo: "leve", tags: ["arma", "duas maos", "alcance", "perfurar", "agil", "lanca", "leve"] },
        // "lanca_sarissa": { nome: "Sarissa", dano: "2d6", esp: "arma, duas mãos, alcance 2, perfurar-2, arremesso 2-3, poder", tipo: "pesada", tags: ["arma", "duas maos", "alcance_2", "poder", "lanca", "pesada"] },

        // === MACHADOS & MARTELOS ===

        "maca": {
            nome: "Maça",
            dano: "3d6",
            acoes: 2,
            alcance: "0",
            riqueza: 3,
            esp: "uma mão, perfurar 3, pesada 2",
            tags: ["arma", "martelo", "uma_mao", "pesada", "perfurar"]
        },

        "machadinha": {
            nome: "Machadinha",
            dano: "2d6",
            acoes: 1,
            alcance: "0",
            riqueza: 1,
            esp: "uma mão, arremesso:  0-1",
            tags: ["arma", "machado", "uma_mao", "arremesso", "leve", "distancia"]
        },

        "machado": {
            nome: "Machado",
            dano: "4d6",
            acoes: 2,
            alcance: "0",
            riqueza: 4,
            esp: "duas mãos",
            tags: ["arma", "machado", "duas_maos"]
        },

        "martelo": {
            nome: "Martelo",
            dano: "5d6",
            acoes: 2,
            alcance: "0",
            riqueza: 4,
            esp: "duas mãos, pesada 3, manuseio -1, critico: quebrar",
            tags: ["arma", "martelo", "duas_maos", "pesada", "quebrar"]
        },

        // === ITENS RETIRADOS / LEGADO (Build Anterior) ===
        // "maca_lisa": { nome: "Maça Lisa", dano: "3d6", esp: "arma, uma mão, poder", tipo: "pesada", tags: ["arma", "uma mao", "poder", "martelo", "pesada"] },
        // "machado_batalha": { nome: "Machado de Batalha", dano: "4d6", esp: "arma, duas mãos, poder", tipo: "pesada", tags: ["arma", "duas maos", "poder", "machado", "pesada"] },
        // "marreta_guerra": { nome: "Marreta de Guerra", dano: "5d6", esp: "arma, duas mãos, poder, pesada 3, manuseio -2", tipo: "pesada", tags: ["arma", "duas maos", "poder", "martelo", "pesada"] },
        // O antigo "Martelo" de uma mão foi substituído pela Maça ou não existe mais nessa versão
        // "martelo_antigo": { nome: "Martelo", dano: "3d6", esp: "arma, uma mão, manuseio -2, pesada 3, poder", tipo: "pesada", tags: ["arma", "uma mao", "pesada", "poder", "martelo"] },
    },

    itens: {
        "pergaminho_pequeno": { nome: "Pergaminho Pequeno", tags: ["item", "escrita"], especial: "Armazena 1 Maji Pequena" },
        "pergaminho_grande": { nome: "Pergaminho Grande", tags: ["item", "escrita"], especial: "Armazena 1 Maji Grande" },
        "virote": { nome: "Kit de Virotes", tags: ["item", "municao"], especial: "Munição para Balestra" },
        "eter": { nome: "Frasco de Éter", tags: ["item", "alquimia"], especial: "Recupera Essência ou Potencializa Maji" },
        "tinta": { nome: "Pote de Tinta", tags: ["item", "escrita"], especial: "Necessário para Runa e Escrita" }
    }
};