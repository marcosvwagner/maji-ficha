// ==================================================================================
// ARQUIVO: dados_maji.js
// Banco de dados das Majis
// ==================================================================================

const bancoMajis = {
    // --- MAJIS BASE (Pré-requisitos) ---
    "base": {
        "godai": { nome: "Godai (Fala)", forma: "Fala", tipo: "Base", subtipo: "Essência", custo: "1 PE", desc: "Dispara uma bola de essência contra 1-alvo a alcance 0-3 (Esquiva DA 6 ou Defesa), causando 2d6 de dano." },
        "gidama": { nome: "Gidama (Escrita)", forma: "Escrita", tipo: "Base", subtipo: "Essência", custo: "1 PE", desc: "Cria uma explosão de essência que sai do chão, atingindo todo alvo a alcance 1-2 (Esquiva DA 8 ou Defesa) causando 5d6 de dano. (Pergaminho Grande)" },
        "godama": { nome: "Godama (Sinal)", forma: "Sinal", tipo: "Base", subtipo: "Essência", custo: "1 PE", desc: "Dispare uma explosão de essência, escolha uma direção e acerte todos a alcance 0-1 (Esquiva DA 8 ou Defesa) causando 3d6 de dano." }
    },

    // --- MAJI DE FALA (1 Ação) ---
    "fala": {
        // Elemental: Chuva
        "arma_tempestade": { nome: "Arma da Tempestade", forma: "Fala", tipo: "Elemental", subtipo: "Chuva", custo: "1 PE", desc: "Eletriza 1-equipamento a alcance 0. Tem 1-uso: ao acertar ataque, causa +1d6 elétrico e condição Condutivo." },
        "protecao_agua": { nome: "Proteção da Água", forma: "Fala", tipo: "Elemental", subtipo: "Chuva", custo: "1 PE", desc: "Cria proteção em 1-alvo a alcance 0 com 3-usos. Gaste para reduzir 2 dano (ou o dobro contra fogo)." },
        "sopro_gelo": { nome: "Sopro de Gelo", forma: "Fala", tipo: "Elemental", subtipo: "Chuva", custo: "1 PE", desc: "Dispare sopro em 1-alvo a alcance 0-2 (Esquiva DA 12). Se falhar, recebe condição Congelado." },
        
        // Elemental: Natureza
        "semente_cura": { nome: "Semente de Cura", forma: "Fala", tipo: "Elemental", subtipo: "Natureza", custo: "1 PE", desc: "Restaure PV igual a 2d6 por nível da Maji em 1-alvo a alcance 0. Alvo só pode ser curado 1 vez por cena." },
        "traje_espinhos": { nome: "Traje de Espinhos", forma: "Fala", tipo: "Elemental", subtipo: "Natureza", custo: "1 PE", desc: "Traje de 1-alvo a alcance 0 ganha 2-usos. Gaste ao Defender para ganhar propriedade Espinhos." },
        "corpo_pedra": { nome: "Corpo de Pedra", forma: "Fala", tipo: "Elemental", subtipo: "Natureza", custo: "1 PE", desc: "Pele de 1-alvo a alcance 0 ganha 3-usos. Gaste ao receber dano para Reduzir 3 (dobro contra elétrico). Não pode usar Esquiva." },

        // Elemental: Vento
        "agulhas_mortais": { nome: "Agulhas Mortais", forma: "Fala", tipo: "Elemental", subtipo: "Vento", custo: "1 PE", desc: "Dispare contra 1-alvo a alcance 0-2 (Esquiva DA 6 ou Defesa). Causa 2d6 dano e Perfurar-5." },
        "arma_ventania": { nome: "Arma da Ventania", forma: "Fala", tipo: "Elemental", subtipo: "Vento", custo: "1 PE", desc: "Envolve 1-equipamento a alcance 0. Tem 1-uso: ao acertar, ganha Perfurar-5 e propriedade Cortante." },
        "rugido_titanico": { nome: "Rugido Titânico", forma: "Fala", tipo: "Elemental", subtipo: "Vento", custo: "1 PE", desc: "Teste oposto de Presença contra até 3-alvos (alcance 0-2). Você tem +1d10. Falha causa Medo 1." },

        // Celeste: Estrelas
        "aquila": { nome: "Aquila", forma: "Fala", tipo: "Celeste", subtipo: "Estrelas", custo: "1 PE", desc: "Raios em 1-alvo a alcance 0-2 (Esquiva DA 12). Causa Desorientado." },
        "dorado": { nome: "Dorado", forma: "Fala", tipo: "Celeste", subtipo: "Estrelas", custo: "1 PE", desc: "1-equipamento a alcance 0 brilha. 3-usos: ao acertar ataque, causa +1d6 dano." },
        "phoenix": { nome: "Phoenix", forma: "Fala", tipo: "Celeste", subtipo: "Estrelas", custo: "1 PE", desc: "Recebe 1-uso. Se morrer, gasta para reviver com 1 PV. Funciona mesmo com corpo destruído." },

        // Celeste: Sol
        "arma_flamejante": { nome: "Arma Flamejante", forma: "Fala", tipo: "Celeste", subtipo: "Sol", custo: "1 PE", desc: "1-equipamento a alcance 0 pega fogo. 1-uso: ao acertar, +1d6 fogo e Queimando 1." },
        "sopro_chamas": { nome: "Sopro de Chamas", forma: "Fala", tipo: "Celeste", subtipo: "Sol", custo: "1 PE", desc: "Labareda em cone alcance 0-2 (Esquiva DA 12 ou Defesa). Causa 2d6 dano de fogo." },
        "quente_sol": { nome: "Quente como o Sol", forma: "Fala", tipo: "Celeste", subtipo: "Sol", custo: "1 PE", desc: "1-alvo a alcance 0 recebe 3-usos. Ao ser atacado a alcance 0, gasta para dar 1d6 fogo e Queimando 1 no atacante." },

        // Celeste: Lua
        "nevoeiro_ilusoes": { nome: "Nevoeiro de Ilusões", forma: "Fala", tipo: "Celeste", subtipo: "Lua", custo: "1 PE", desc: "Fumaça em alcance 0-1. Todos dentro fazem Astúcia (DA 6) ou não movem. Ataques lá dentro têm -2." },
        "falsa_coragem": { nome: "Falsa Coragem", forma: "Fala", tipo: "Celeste", subtipo: "Lua", custo: "1 PE", desc: "1-alvo a alcance 0 não pode Esquivar, mas ignora Penalidade 1 e Medo por 2 rodadas." },
        "efeito_espelho": { nome: "Efeito Espelho", forma: "Fala", tipo: "Celeste", subtipo: "Lua", custo: "1 PE", desc: "Cria clone ilusório. Se for atacado, role 1d10: Par=Clone atingido, Ímpar=Você atingido." },

        // Cósmica: Espaço
        "sem_obstaculos": { nome: "Sem Obstáculos", forma: "Fala", tipo: "Cósmica", subtipo: "Espaço", custo: "1 PE", desc: "Recebe 2-usos. Gaste 1x por turno para mover alcance 1-2 ignorando obstáculos (teleporte)." },
        "reequipar": { nome: "Reequipar", forma: "Fala", tipo: "Cósmica", subtipo: "Espaço", custo: "1 PE", desc: "Guarde ou equipe teleportando até 2 equipamentos preparados. Limite de preparados = Nível da Maji." },
        "eco_vazio": { nome: "Eco do Vazio", forma: "Fala", tipo: "Cósmica", subtipo: "Espaço", custo: "1 PE", desc: "No alcance 0-1, nenhuma fala ou Maji de Fala funciona por 1 rodada." },

        // Cósmica: Tempo
        "ajuda_tempo": { nome: "Ajuda do Tempo", forma: "Fala", tipo: "Cósmica", subtipo: "Tempo", custo: "1 PE", desc: "1-alvo a alcance 0 recebe 1-uso. Gaste para refazer qualquer rolagem de dados." },
        "tartaruga_lebre": { nome: "Tartaruga e Lebre", forma: "Fala", tipo: "Cósmica", subtipo: "Tempo", custo: "1 PE", desc: "Deixe 1-alvo a alcance 0-1 com condição Lento ou Rápido por 3 rodadas." },
        "acao_temporal": { nome: "Ação Temporal", forma: "Fala", tipo: "Cósmica", subtipo: "Tempo", custo: "1 PE", desc: "Envia 1 a 2 ações (incluindo a de conjurar) para seu próximo turno." }
    },

    // --- MAJI DE ESCRITA (2 ou 3 Ações - Pergaminhos) ---
    "escrita": {
        // Chuva
        "agua_mortal": { nome: "Água Mortal", forma: "Escrita", tipo: "Elemental", subtipo: "Chuva", custo: "Grande", desc: "2-alvos a alcance 0-2 fazem Vigor (DA 6) ou recebem 2d6 dano direto por 3 rodadas." },
        "campo_eletrizante": { nome: "Campo Eletrizante", forma: "Escrita", tipo: "Elemental", subtipo: "Chuva", custo: "Pequeno", desc: "Todos a alcance 0-1 (menos você) recebem condição Condutivo." },
        
        // Natureza
        "golem_elemental": { nome: "Golem Elemental", forma: "Escrita", tipo: "Elemental", subtipo: "Natureza", custo: "Pequeno", desc: "Cria Golem (30 Vida, Reduzir 5). Soca por 3d6 ou explode por 4d6." },
        "casulo_chukaku": { nome: "Casulo Chukaku", forma: "Escrita", tipo: "Elemental", subtipo: "Natureza", custo: "Grande", desc: "Protege todos a alcance 0-1. Casulo tem PV = 10x Nível Maji." },

        // Vento
        "bomba_ar": { nome: "Bomba de Ar", forma: "Escrita", tipo: "Elemental", subtipo: "Vento", custo: "Pequeno", desc: "Todos a alcance 0-2 (menos você) são arremessados 2 alcances para longe." },
        "laminas_mortais": { nome: "Lâminas Mortais", forma: "Escrita", tipo: "Elemental", subtipo: "Vento", custo: "Grande", desc: "3 lâminas em alvos a alcance 0-2 (Esquiva DA 6). Cada uma causa 2d6 dano e Perfurar-5." },

        // Estrelas
        "orion": { nome: "Orion", forma: "Escrita", tipo: "Celeste", subtipo: "Estrelas", custo: "Grande", desc: "Invoca Orion (20 Vida). Você não age. Ele tem Balestra de Luz (3d6) e Espada Celeste (5d6)." },
        "andromeda": { nome: "Andrômeda", forma: "Escrita", tipo: "Celeste", subtipo: "Estrelas", custo: "Pequeno", desc: "Prende 1-alvo a alcance 0-2 (Esquiva DA 8). Se pego, fica Imobilizado (DA 12)." },

        // Sol
        "amateras": { nome: "Amateras", forma: "Escrita", tipo: "Celeste", subtipo: "Sol", custo: "Pequeno", desc: "Chamas negras pegam 3-alvos a alcance 0-3 dando condição Queimando 1." },
        "kabumu": { nome: "Kabumu", forma: "Escrita", tipo: "Celeste", subtipo: "Sol", custo: "Pequeno", desc: "Pergaminho explode no tempo definido. Causa 2d6 fogo em todo alvo a alcance 0 dele." },

        // Espaço
        "teleporte": { nome: "Teleporte", forma: "Escrita", tipo: "Cósmica", subtipo: "Espaço", custo: "Grande", desc: "Dois pergaminhos criam portal. 3-usos. 1 uso = item, 3 usos = pessoa." },
        "bolsa_papel": { nome: "Bolsa de Papel", forma: "Escrita", tipo: "Cósmica", subtipo: "Espaço", custo: "Pequeno", desc: "Guarda 5 itens no papel (Grande guarda 10). Seres vivos não entram." },

        // Tempo
        "ancora_temporal": { nome: "Âncora Temporal", forma: "Escrita", tipo: "Cósmica", subtipo: "Tempo", custo: "Grande", desc: "Após 2 rodadas, você volta no tempo para a Vida e Local onde ativou isso." },
        "tempo_infinito": { nome: "Tempo Infinito", forma: "Escrita", tipo: "Cósmica", subtipo: "Tempo", custo: "Grande", desc: "Para o tempo no alcance 0-1. Ninguém age. Você pode manter gastando 1 Ponto Cósmico por rodada." }
    },

    // --- MAJI DE SINAL (2 Ações) ---
    "sinal": {
        // Chuva
        "chicote_agua": { nome: "Chicote de Água", forma: "Sinal", tipo: "Elemental", subtipo: "Chuva", custo: "1 PE", desc: "Braço vira chicote (alcance 0-1). Usa Agilidade, causa 2d6+Nível dano. Dura 5 rodadas." },
        "tsunami": { nome: "Tsunami", forma: "Sinal", tipo: "Elemental", subtipo: "Chuva", custo: "1 PE", desc: "Onda a frente alcance 1-3. Força (DA 14) ou sofrem 2d6 dano e -2 em Agilidade." },

        // Natureza
        "arma_natureza": { nome: "Arma da Natureza", forma: "Sinal", tipo: "Elemental", subtipo: "Natureza", custo: "1 PE", desc: "Cria 1-equipamento corpo a corpo de madeira. Igual ao original. Se soltar, desfaz." },
        "muro_defesa": { nome: "Muro de Defesa", forma: "Sinal", tipo: "Elemental", subtipo: "Natureza", custo: "1 PE", desc: "Reação. Quando 1-alvo a alcance 0-2 for atacado, cria muro com Reduzir 5." },

        // Vento
        "lanca_ar": { nome: "Lança de Ar", forma: "Sinal", tipo: "Elemental", subtipo: "Vento", custo: "1 PE", desc: "Corrente cortante em linha frente 0-3 (Esquiva DA 8). Causa 2d6 e Perfurar-5." },
        "impacto_ventania": { nome: "Impacto da Ventania", forma: "Sinal", tipo: "Elemental", subtipo: "Vento", custo: "1 PE", desc: "Joga 1-alvo a alcance 1 contra outro (Esquiva DA 8). Impacto causa 3d6 Perfurar-2 em área." },

        // Estrelas
        "leo": { nome: "Leo", forma: "Sinal", tipo: "Celeste", subtipo: "Estrelas", custo: "1 PE", desc: "Cria Teko-kagi nas mãos (dano base + Nível Maji). Dura 3 rodadas." },
        "sagittarius": { nome: "Sagittarius", forma: "Sinal", tipo: "Celeste", subtipo: "Estrelas", custo: "1 PE", desc: "Cria Arco Recurvo de luz. Flechas infinitas. 4-usos. Causa dano normal." },

        // Sol
        "disparo_solar": { nome: "Disparo Solar", forma: "Sinal", tipo: "Celeste", subtipo: "Sol", custo: "1 PE", desc: "Feixe em 1-alvo a alcance 0-1 (Esquiva DA 6). 4d6 fogo e Queimando 1." },
        "raio_solar": { nome: "Raio Solar", forma: "Sinal", tipo: "Celeste", subtipo: "Sol", custo: "1 PE", desc: "Raio em 1-alvo a alcance 0-1 (Esquiva DA 8). 2d6 fogo. Pode reativar prox turno para +1d6." },

        // Espaço
        "telecinese": { nome: "Telecinese", forma: "Sinal", tipo: "Cósmica", subtipo: "Espaço", custo: "1 PE", desc: "Mova 1-item ou alvo a alcance 0-1 para alcance 1 de distância. Alvo faz Força DA 8 para resistir." },
        "defletir_ataque": { nome: "Defletir Ataque", forma: "Sinal", tipo: "Cósmica", subtipo: "Espaço", custo: "1 PE", desc: "Reação. Teste de Agilidade + Nível Maji contra ataque inimigo. Se vencer, devolve o ataque." },

        // Tempo
        "ataque_acelerado": { nome: "Ataque Acelerado", forma: "Sinal", tipo: "Cósmica", subtipo: "Tempo", custo: "1 PE", desc: "3-usos. Gaste após ataque desarmado para fazer outro ataque desarmado extra." },
        "estagnacao": { nome: "Estagnação", forma: "Sinal", tipo: "Cósmica", subtipo: "Tempo", custo: "1 PE", desc: "Prende 1-alvo no tempo. Fica Desorientado até o fim da condição." },
        "re_retorno": { nome: "(Re) Retorno", forma: "Sinal", tipo: "Cósmica", subtipo: "Tempo", custo: "1 PE", desc: "Reação. Retorna qualquer deslocamento feito até 1 rodada atrás, fugindo de alcance." }
    }
};