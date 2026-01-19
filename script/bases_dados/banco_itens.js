// =================================================================================
// ARQUIVO: banco_itens.js
// Dados dos itens disponíveis para seleção na ficha de personagem
// =================================================================================

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