// ==================================================================================
// ARQUIVO: dados_maji.js
// Banco de dados COMPLETO das Magias (Maji) - Baseado na Build 2
// ==================================================================================

const bancoMajis = {
    // --- MAJIS BASE (Pré-requisitos) ---
    "base": {
        "godai": { nome: "Godai (Base)", forma: "Fala", tipo: "Tipo", subtipo: "Subtipo", custo: "1 Ação", desc: "Dispara uma bola de essência contra 1-alvo a alcance 0-3 (Esquiva DA 6 ou Defesa), causando 2d6 de dano." },
        "gidama": { nome: "Gidama (Base)", forma: "Escrita", tipo: "Tipo", subtipo: "Subtipo", custo: "3 ações - 3 ações - Grande", desc: "Cria uma explosão de essência que sai do chão, atingindo todo alvo a alcance 1-2 (Esquiva DA 8 ou Defesa) causando 5d6 de dano." },
        "godama": { nome: "Godama (Base)", forma: "Sinal", tipo: "Tipo", subtipo: "Subtipo", custo: "2 Ações", desc: "Dispare uma explosão de essência, escolha uma direção e acerte todos a alcance 0-1 (Esquiva DA 8 ou Defesa) causando 3d6 de dano." }
    },

    // --- MAJI DE FALA (1 Ação) ---
    "fala": {
        // Elemental: Chuva
        "arma_tempestade": { nome: "Arma da Tempestade", forma: "Fala", tipo: "Elemental", subtipo: "Chuva", custo: "1 Ação", desc: "Eletriza 1-equipamento a alcance 0. Tem 1-uso: ao acertar ataque, causa +1d6 elétrico e condição Condutivo." },
        "nuvem_eletrica": { nome: "Nuvem Elétrica", forma: "Fala", tipo: "Elemental", subtipo: "Chuva", custo: "1 Ação", desc: "1-alvo a alcance 0 recebe aura de 2 usos. Gaste ao ser atacado a alcance 0 para causar 1d6 elétrico e Condutivo." },
        "protecao_agua": { nome: "Proteção da Água", forma: "Fala", tipo: "Elemental", subtipo: "Chuva", custo: "1 Ação", desc: "Cria proteção em 1-alvo a alcance 0 com 2-usos. Gaste para reduzir 2 dano (ou o dobro contra fogo)." },
        "purificacao_chuva": { nome: "Purificação da Chuva", forma: "Fala", tipo: "Elemental", subtipo: "Chuva", custo: "1 Ação", desc: "Purifica 1-alvo a alcance 0, retirando Atordoado (1 ou 2) e Queimando (1 ou 2)." },
        "respiracao_aquatica": { nome: "Respiração Aquática", forma: "Fala", tipo: "Elemental", subtipo: "Chuva", custo: "1 Ação", desc: "1-alvo a alcance 0 pode respirar debaixo d'água por 1 Cena." },
        "sopro_gelo": { nome: "Sopro de Gelo", forma: "Fala", tipo: "Elemental", subtipo: "Chuva", custo: "1 Ação", desc: "Dispare sopro em 1-alvo a alcance 0-2 (Esquiva DA 12). Se falhar, recebe condição Congelado." },
        
        // Elemental: Natureza
        "aprimoramento_natural": { nome: "Aprimoramento Natural", forma: "Fala", tipo: "Elemental", subtipo: "Natureza", custo: "1 Ação", desc: "Seu corpo absorve essência. Ganha 1 uso para refazer um teste de Físico, Luta ou Reflexos após falhar." },
        "arma_venenosa": { nome: "Arma Venenosa", forma: "Fala", tipo: "Elemental", subtipo: "Natureza", custo: "1 Ação", desc: "Banha 1-arma a alcance 0 com veneno (1 uso). Ao acertar: Envenenado e 2d6 dano não reduzível se o alvo usar PE." },
        "corpo_pedra": { nome: "Corpo de Pedra", forma: "Fala", tipo: "Elemental", subtipo: "Natureza", custo: "1 Ação", desc: "Pele de 1-alvo a alcance 0 ganha 3-usos. Gaste ao receber dano para Reduzir 3 (dobro contra elétrico). Não pode usar Esquiva." },
        "semente_cura": { nome: "Semente de Cura", forma: "Fala", tipo: "Elemental", subtipo: "Natureza", custo: "1 Ação", desc: "Restaure PV igual a 2d6 por nível da Maji em 1-alvo a alcance 0. Alvo só pode ser curado 1 vez por cena." },
        "traje_espinhos": { nome: "Traje de Espinhos", forma: "Fala", tipo: "Elemental", subtipo: "Natureza", custo: "1 Ação", desc: "Traje de 1-alvo a alcance 0 ganha 2-usos. Gaste ao Defender para ganhar propriedade Espinhos." },

        // Elemental: Vento
        "agulhas_mortais": { nome: "Agulhas Mortais", forma: "Fala", tipo: "Elemental", subtipo: "Vento", custo: "1 Ação", desc: "Dispare contra 1-alvo a alcance 0-2 (Esquiva DA 6 ou Defesa). Causa 2d6 dano e Perfurar-5." },
        "arma_ventania": { nome: "Arma da Ventania", forma: "Fala", tipo: "Elemental", subtipo: "Vento", custo: "1 Ação", desc: "Envolve 1-equipamento a alcance 0. Tem 1-uso: ao acertar, ganha Perfurar-5 e propriedade Cortante." },
        "deixa_levar": { nome: "Deixa Levar", forma: "Fala", tipo: "Elemental", subtipo: "Vento", custo: "1 Ação", desc: "1-alvo a alcance 0-1 recebe 1 uso. Gaste para ter +2 em ataque à distância e arremesso." },
        "espinhos_naturais": { nome: "Espinhos Naturais", forma: "Fala", tipo: "Elemental", subtipo: "Vento", custo: "1 Ação", desc: "Rajada de espinhos em 1-alvo a alcance 0-3 (Esquiva ou Defesa). 2d6 dano e Sangrando se causar dano." },
        "palavras_ao_vento": { nome: "Palavras ao Vento", forma: "Fala", tipo: "Elemental", subtipo: "Vento", custo: "1 Ação", desc: "Mande mensagem para 1-alvo. Somente ele ouve. Tempo de chegada depende da distância." },
        "rugido_titanico": { nome: "Rugido Titânico", forma: "Fala", tipo: "Elemental", subtipo: "Vento", custo: "1 Ação", desc: "Todo Alvo a 0-3 faz teste Físico e Sentidos (DA 10). Falha Físico: Empurrado Alcance 1. Falha Sentidos: Desorientado." },

        // Celeste: Estrelas
        "aquila": { nome: "Aquila", forma: "Fala", tipo: "Celeste", subtipo: "Estrelas", custo: "1 Ação", desc: "Raios em 1-alvo a alcance 0-2 (Esquiva DA 12). Causa Desorientado." },
        "canis_minor": { nome: "Canis Minor", forma: "Fala", tipo: "Celeste", subtipo: "Estrelas", custo: "1 Ação", desc: "Invoque o Cão Menor (Vida 10, Esquiva 12). Ele tem 3 Ações. Ataque: 2d6 dano." },
        "dorado": { nome: "Dorado", forma: "Fala", tipo: "Celeste", subtipo: "Estrelas", custo: "1 Ação", desc: "1-equipamento a alcance 0 brilha. 3-usos: ao acertar ataque, causa +1d6 dano." },
        "gemini": { nome: "Gemini", forma: "Fala", tipo: "Celeste", subtipo: "Estrelas", custo: "1 Ação", desc: "Copie uma Maji de Fala/Sinal usada na rodada atual ou anterior. Ganhe 1 uso dela." },
        "lyra": { nome: "Lyra", forma: "Fala", tipo: "Celeste", subtipo: "Estrelas", custo: "1 Ação", desc: "1-alvo a alcance 0-2 remove uma condição: Desorientado, Amedrontado, Atordoado ou Adormecido." },
        "phoenix": { nome: "Phoenix", forma: "Fala", tipo: "Celeste", subtipo: "Estrelas", custo: "1 Ação", desc: "Recebe 1-uso. Se morrer, gasta para reviver com 10 PV (mesmo com corpo destruído)." },
        "sagitta": { nome: "Sagitta", forma: "Fala", tipo: "Celeste", subtipo: "Estrelas", custo: "1 Ação", desc: "Dispare flecha em 1-alvo a alcance 0-3 (Esquiva ou Defesa). 2d6 dano. Se acertar, você teleporta até o alvo." },

        // Celeste: Lua
        "apenas_verdades": { nome: "Apenas Verdades", forma: "Fala", tipo: "Celeste", subtipo: "Lua", custo: "1 Ação", desc: "Desfaz todos os tipos de ilusão no alcance 0-2 ao redor." },
        "dor": { nome: "Dor", forma: "Fala", tipo: "Celeste", subtipo: "Lua", custo: "1 Ação", desc: "Ilusão de dor em 1-alvo a alcance 0. Causa -2 em testes por 1 rodada." },
        "efeito_espelho": { nome: "Efeito Espelho", forma: "Fala", tipo: "Celeste", subtipo: "Lua", custo: "1 Ação", desc: "Cria clone ilusório. Se sofrer dano, clone some. Pode mover e agir, mas não causa dano." },
        "falsa_coragem": { nome: "Falsa Coragem", forma: "Fala", tipo: "Celeste", subtipo: "Lua", custo: "1 Ação", desc: "1-alvo a alcance 0 não pode Esquivar, mas ignora Penalidade 1 e Amedrontado por 2 rodadas." },
        "nevoeiro_ilusoes": { nome: "Nevoeiro de Ilusões", forma: "Fala", tipo: "Celeste", subtipo: "Lua", custo: "1 Ação", desc: "Fumaça em alcance 0-1 (2 rodadas). Quem está dentro faz Sentidos (DA 8) ou não move. Ataques sofrem Cego." },
        "seu_medo": { nome: "Seu Medo", forma: "Fala", tipo: "Celeste", subtipo: "Lua", custo: "1 Ação", desc: "Ilusão em 1-alvo a alcance 0-3. Teste Sentidos (DA 12). Falha: Amedrontado 1." },
        "sopro_belladonna": { nome: "Sopro Belladonna", forma: "Fala", tipo: "Celeste", subtipo: "Lua", custo: "1 Ação", desc: "Fumaça em Todo Alvo a alcance 0-1 a frente. Teste Sentidos (DA 12). Falha: Adormecido." },

        // Celeste: Sol
        "arma_flamejante": { nome: "Arma Flamejante", forma: "Fala", tipo: "Celeste", subtipo: "Sol", custo: "1 Ação", desc: "1-equipamento a alcance 0 pega fogo. 1-uso: ao acertar, +1d6 fogo e Queimando 1." },
        "chuva_de_brasas": { nome: "Chuva de Brasas", forma: "Fala", tipo: "Celeste", subtipo: "Sol", custo: "1 Ação", desc: "1-alvo a alcance 0-3 (Esquiva) recebe Explosivo. Detonação atinge área 0-1 e repassa Explosivo." },
        "combustao": { nome: "Combustão", forma: "Fala", tipo: "Celeste", subtipo: "Sol", custo: "1 Ação", desc: "1 uso. Gaste ao usar Maji de Vento para converter dano em Fogo e causar Queimando 1." },
        "lamina_solar": { nome: "Lâmina Solar", forma: "Fala", tipo: "Celeste", subtipo: "Sol", custo: "1 Ação", desc: "1-arma a alcance 0 ganha 1 uso. Gaste para ataque virar alcance 0-3 e dano virar Fogo." },
        "quente_sol": { nome: "Quente como o Sol", forma: "Fala", tipo: "Celeste", subtipo: "Sol", custo: "1 Ação", desc: "1-alvo a alcance 0 recebe 3-usos. Ao ser atacado a alcance 0, causa 1d6 fogo e Queimando 1 no atacante." },
        "sopro_chamas": { nome: "Sopro de Chamas", forma: "Fala", tipo: "Celeste", subtipo: "Sol", custo: "1 Ação", desc: "Cone de fogo em Todo Alvo a frente alcance 0-2 (Esquiva ou Defesa). 2d6 dano fogo." },

        // Cósmica: Espaço
        "eco_vazio": { nome: "Eco do Vazio", forma: "Fala", tipo: "Cósmica", subtipo: "Espaço", custo: "1 Ação", desc: "No alcance 0-1, nenhuma fala ou Maji de Fala funciona por 1 rodada." },
        "massa_estelar": { nome: "Massa Estelar", forma: "Fala", tipo: "Cósmica", subtipo: "Espaço", custo: "1 Ação", desc: "1-arma corpo a corpo a alcance 0-1 ganha Crítico Derrubar e Quebrar por 2 rodadas. Usuário sofre -2 Esquiva." },
        "passos_livres": { nome: "Passos Livres", forma: "Fala", tipo: "Cósmica", subtipo: "Espaço", custo: "1 Ação", desc: "1-alvo a alcance 0 ganha capacidade de voar por 1 Cena." },
        "reequipar": { nome: "Reequipar", forma: "Fala", tipo: "Cósmica", subtipo: "Espaço", custo: "1 Ação", desc: "Teleporta equipamento preparado (Limite = Nível Maji). Prepara 1 por cena." },
        "sem_obstaculos": { nome: "Sem Obstáculos", forma: "Fala", tipo: "Cósmica", subtipo: "Espaço", custo: "1 Ação", desc: "Recebe 2-usos. Gaste 1x por turno para mover alcance 1-2 ignorando obstáculos (teleporte)." },

        // Cósmica: Tempo
        "acao_temporal": { nome: "Ação Temporal", forma: "Fala", tipo: "Cósmica", subtipo: "Tempo", custo: "1 Ação", desc: "Envia 1 a 2 ações (incluindo a de conjurar) para seu próximo turno." },
        "ajuda_tempo": { nome: "Ajuda do Tempo", forma: "Fala", tipo: "Cósmica", subtipo: "Tempo", custo: "1 Ação", desc: "1-alvo a alcance 0 recebe 1-uso. Gaste para refazer qualquer rolagem de dados." },
        "costura_tempo": { nome: "Costura do Tempo", forma: "Fala", tipo: "Cósmica", subtipo: "Tempo", custo: "1 Ação", desc: "Remove Sangrando e cura 1d6 PV." },
        "tartaruga_lebre": { nome: "Tartaruga e Lebre", forma: "Fala", tipo: "Cósmica", subtipo: "Tempo", custo: "1 Ação", desc: "1-alvo a alcance 0-1 recebe Lento ou Rápido por 2 rodadas." },
        "tempo_pontual": { nome: "Tempo Pontual", forma: "Fala", tipo: "Cósmica", subtipo: "Tempo", custo: "1 Ação", desc: "Remova um efeito de Zona Zero que o Campo esteja sofrendo." },
        "vem_com_tempo": { nome: "Vem Com o Tempo", forma: "Fala", tipo: "Cósmica", subtipo: "Tempo", custo: "1 Ação", desc: "1-alvo a alcance 0-2 recebe +1 nível de Proficiência em um atributo até o fim da Cena." }
    },

    // --- MAJI DE ESCRITA (2 ou 3 Ações - Pergaminhos) ---
    "escrita": {
        // Elemental: Chuva
        "agua_mortal": { nome: "Água Mortal", forma: "Escrita", tipo: "Elemental", subtipo: "Chuva", custo: "3 ações - 3 ações - Grande", desc: "2-alvos a alcance 0-2 fazem Vigor (DA 8) ou recebem 2d6 dano direto não reduzível por 2 rodadas." },
        "campo_eletrizante": { nome: "Campo Eletrizante", forma: "Escrita", tipo: "Elemental", subtipo: "Chuva", custo: "2 ações - Pequeno", desc: "Todos a alcance 0-1 (menos você) fazem Reflexos (DA 12). Falha: Condutivo." },
        "chuva_acida": { nome: "Chuva Ácida", forma: "Escrita", tipo: "Elemental", subtipo: "Chuva", custo: "3 ações - 3 ações - Grande", desc: "Chuva por 2 Rodadas. Todo Fim de Rodada, Todo Alvo faz Físico (DA 10) ou sofre 2d6 dano não reduzível." },
        "chuva_aliviante": { nome: "Chuva Aliviante", forma: "Escrita", tipo: "Elemental", subtipo: "Chuva", custo: "2 ações - Pequeno", desc: "1-alvo a alcance 0 não sofre efeitos de Penalidades por 2 rodadas." },
        "cultivo_essencial": { nome: "Cultivo Essencial", forma: "Escrita", tipo: "Elemental", subtipo: "Chuva", custo: "2 ações - Pequeno", desc: "Gaste até Dobro do Nível em PE do Campo ao criar. Ao ativar, cure 1d6 por ponto gasto em 1-alvo alcance 0-1." },
        "gelido": { nome: "Gélido", forma: "Escrita", tipo: "Elemental", subtipo: "Chuva", custo: "2 ações -2 ações - Pequeno", desc: "Congela chão alcance 0-1. Todo Alvo faz Reflexos (DA 12) ou recebe Congelado." },
        "mar_condutivo": { nome: "Mar Condutivo", forma: "Escrita", tipo: "Elemental", subtipo: "Chuva", custo: "2 ações - Pequeno", desc: "Água condutiva alcance 0-2. Todo Alvo com Condutivo faz Físico (DA 12). Falha: perde cargas e sofre 2d6 dano elétrico por carga." },
        "raios_entre_nos": { nome: "Raios Entre Nós", forma: "Escrita", tipo: "Elemental", subtipo: "Chuva", custo: "2 ações - Pequeno", desc: "Corrente elétrica entre você e 1-alvo alcance 1-2. Todo Alvo na linha faz Reflexos (DA 10) ou sofre 2d6 elétrico e Condutivo." },

        // Elemental: Natureza
        "bruma_venenosa": { nome: "Bruma Venenosa", forma: "Escrita", tipo: "Elemental", subtipo: "Natureza", custo: "2 ações - Pequeno", desc: "Névoa alcance 1-2 por 2 Rodadas. Todo Alvo faz Físico (DA 10) ou recebe Envenenado." },
        "casulo_chukaku": { nome: "Casulo Chukaku", forma: "Escrita", tipo: "Elemental", subtipo: "Natureza", custo: "3 ações - 3 ações - Grande", desc: "Casulo protege Todo Alvo alcance 0-1. PV = 10x Nível Maji. Dano Fogo dobrado, Elétrico metade." },
        "destruicao_jishin": { nome: "Destruição Jishin", forma: "Escrita", tipo: "Elemental", subtipo: "Natureza", custo: "2 ações - Pequeno", desc: "Terremoto alcance 0-2. Todo Alvo faz Físico (DA 10) ou recebe Caído." },
        "golem_elemental": { nome: "Golem Elemental", forma: "Escrita", tipo: "Elemental", subtipo: "Natureza", custo: "2 ações - Pequeno", desc: "Cria Golem (30 Vida, Reduzir 5). 3 Ações. Soco 3d6 ou Explosão 4d6 em área." },
        "maldicao_floresta": { nome: "Maldição da Floresta", forma: "Escrita", tipo: "Elemental", subtipo: "Natureza", custo: "2 ações - Pequeno", desc: "1-alvo a alcance 0-2 não pode receber cura por Maji até fim da Cena." },
        "troca_vital": { nome: "Troca Vital", forma: "Escrita", tipo: "Elemental", subtipo: "Natureza", custo: "3 ações - 3 ações - Grande", desc: "Cure até 30 PV de 1-alvo a alcance 0. Você sofre Dano Sofrido igual a cura." },

        // Elemental: Vento
        "bomba_ar": { nome: "Bomba de Ar", forma: "Escrita", tipo: "Elemental", subtipo: "Vento", custo: "2 ações - Pequeno", desc: "Todos a alcance 0-2 (menos você) são arremessados 2 alcances para longe." },
        "laminas_mortais": { nome: "Lâminas Mortais", forma: "Escrita", tipo: "Elemental", subtipo: "Vento", custo: "3 ações - Grande", desc: "3 lâminas em alvos a alcance 0-2 (Esquiva DA 6). Cada uma causa 2d6 dano e Perfurar-5." },
        "protecao_vento": { nome: "Proteção do Vento", forma: "Escrita", tipo: "Elemental", subtipo: "Vento", custo: "2 ações - Pequeno", desc: "Esfera em 1-alvo alcance 0. 1 uso: Reduzir 10 contra um ataque." },
        "salvo_pelo_vento": { nome: "Salvo Pelo Vento", forma: "Escrita", tipo: "Elemental", subtipo: "Vento", custo: "2 ações - Pequeno", desc: "1-alvo alcance 0 ganha 1 uso. Gasto automático ao falhar Esquiva para obrigar oponente a rolar ataque novamente." },
        "tatsumaki": { nome: "Tatsumaki", forma: "Escrita", tipo: "Elemental", subtipo: "Vento", custo: "3 ações - Grande", desc: "Corrente de ar em 1-alvo alcance 1-2 e todos a alcance 1 dele. Físico (DA 10). Falha: suspenso (sem ações) por 1 rodada e depois Caído." },

        // Celeste: Estrelas
        "andromeda": { nome: "Andrômeda", forma: "Escrita", tipo: "Celeste", subtipo: "Estrelas", custo: "2 ações - Pequeno", desc: "Prende 1-alvo a alcance 0-2 (Esquiva DA 8). Se pego, fica Imobilizado (DA 12)." },
        "canis_major": { nome: "Canis Major", forma: "Escrita", tipo: "Celeste", subtipo: "Estrelas", custo: "2 ações - Pequeno", desc: "Invoque Cão Maior (Vida 20, Esquiva 12). 3 Ações. Explosão Luz (Cego), Investida (3d6), Mordidas (3d6 em 2 alvos)." },
        "crux": { nome: "Crux", forma: "Escrita", tipo: "Celeste", subtipo: "Estrelas", custo: "2 ações - Pequeno", desc: "Indica localização aproximada (cidade/floresta) de 1 alvo." },
        "orion": { nome: "Orion", forma: "Escrita", tipo: "Celeste", subtipo: "Estrelas", custo: "3 ações - Grande", desc: "Invoque Orion (20 Vida, Esquiva 12). Você não age. Ele tem 3 Ações: Balestra (3d6), Espada (5d6), Mover." },

        // Celeste: Lua
        "apavorar": { nome: "Apavorar", forma: "Escrita", tipo: "Celeste", subtipo: "Lua", custo: "2 ações - Pequeno", desc: "3 alvos fazem Sentidos (DA 10). Falha: Amedrontado 1." },
        "eclipse": { nome: "Eclipse", forma: "Escrita", tipo: "Celeste", subtipo: "Lua", custo: "2 ações - Pequeno", desc: "Escuridão em ponto a alcance 0-3. Todo Alvo no alcance 0-1 do ponto fica Cego por 2 rodadas." },
        "efeito_casa_espelho": { nome: "Efeito Casa Espelho", forma: "Escrita", tipo: "Celeste", subtipo: "Lua", custo: "3 ações - Grande", desc: "Centenas de clones ilusórios por 2 Rodadas. Você move/ataca oculto entre eles." },
        "intangibilidade": { nome: "Intangibilidade", forma: "Escrita", tipo: "Celeste", subtipo: "Lua", custo: "2 ações - Pequeno", desc: "1-alvo alcance 0 fica intangível por 2 rodadas. Não sofre nem causa dano. Atravessa paredes." },
        "lado_oculto": { nome: "Lado Oculto", forma: "Escrita", tipo: "Celeste", subtipo: "Lua", custo: "2 ações - Pequeno", desc: "Muda face e voz por 1 Cena. Nível 3 muda corpo e roupas." },

        // Celeste: Sol
        "amateras": { nome: "Amateras", forma: "Escrita", tipo: "Celeste", subtipo: "Sol", custo: "2 ações - Pequeno", desc: "Chamas negras pegam 3-alvos a alcance 0-3 dando condição Queimando 1." },
        "kabumu": { nome: "Kabumu", forma: "Escrita", tipo: "Celeste", subtipo: "Sol", custo: "2 ações - Pequeno", desc: "Pergaminho explode em 1-3 rodadas. 3d6 fogo em Todo Alvo alcance 0 (Reflexos DA 12)." },
        "mina_de_sol": { nome: "Mina de Sol", forma: "Escrita", tipo: "Celeste", subtipo: "Sol", custo: "2 ações - Pequeno", desc: "3 bolas de chamas. Pode mover. Explodir causa 2d6 fogo e Explosivo em Todo Alvo alcance 0 (Reflexos DA 12)." },
        "mundo_de_ilusao": { nome: "Mundo de Ilusão", forma: "Escrita", tipo: "Celeste", subtipo: "Sol", custo: "3 ações - Grande", desc: "Cria ilusão em todo o Campo. Superado com Sentidos (DA 10)." },
        "queimando_floresta": { nome: "Queimando a Floresta", forma: "Escrita", tipo: "Celeste", subtipo: "Sol", custo: "2 ações - Pequeno", desc: "Fogo por 2 rodadas. Consome PE do Campo igual Nível da Maji todo início de rodada." },
        "vulcanos": { nome: "Vulcanos", forma: "Escrita", tipo: "Celeste", subtipo: "Sol", custo: "2 ações - Pequeno", desc: "Lava em 3 alvos alcance 0-1. Reflexos (DA 10) ou 3d6 fogo e Queimando 1." },

        // Cósmica: Espaço
        "bolsa_papel": { nome: "Bolsa de Papel", forma: "Escrita", tipo: "Cósmica", subtipo: "Espaço", custo: "2 ações - Pequeno/Grande", desc: "Guarda Equipamentos. 2 ações - Pequeno: 5 espaços. Grande: 10 espaços. Retirar item consome espaço permanentemente." },
        "centro_repulsao": { nome: "Centro de Repulsão", forma: "Escrita", tipo: "Cósmica", subtipo: "Espaço", custo: "2 ações - Pequeno", desc: "Gravidade em local alcance 1-2. Todo Alvo em alcance 1 é movido 1 alcance e faz Físico (DA 8) ou Caído." },
        "gravidade_alterada": { nome: "Gravidade Alterada", forma: "Escrita", tipo: "Cósmica", subtipo: "Espaço", custo: "2 ações - Pequeno", desc: "3-alvos a alcance 0-1 não usam Esquiva por 1 Rodada. Se ficarem Caídos, sofrem 2d6 dano." },
        "selar": { nome: "Selar", forma: "Escrita", tipo: "Cósmica", subtipo: "Espaço", custo: "3 ações - Grande", desc: "Sela 1-alvo a alcance 0 (NA até Nível Maji). Físico (DA 10) por rodada para libertar." },
        "teleporte": { nome: "Teleporte", forma: "Escrita", tipo: "Cósmica", subtipo: "Espaço", custo: "3 ações - Grande", desc: "Dois pergaminhos criam portal. 3-usos. 1 uso = item, 3 usos = pessoa." },

        // Cósmica: Tempo
        "aja": { nome: "Aja", forma: "Escrita", tipo: "Cósmica", subtipo: "Tempo", custo: "2 ações - Pequeno", desc: "Sua equipe avança 1 passo na ordem de iniciativa." },
        "ancora_temporal": { nome: "Âncora Temporal", forma: "Escrita", tipo: "Cósmica", subtipo: "Tempo", custo: "3 ações - Grande", desc: "Após 2 rodadas, você volta no tempo para a Vida e Local onde ativou isso." },
        "ciclo_repeticao": { nome: "Ciclo de Repetição", forma: "Escrita", tipo: "Cósmica", subtipo: "Tempo", custo: "2 ações - Pequeno", desc: "1-alvo a alcance 0-1. Após 1 rodada, sofre novamente todo dano e recebe toda cura que teve na rodada." },
        "prisao_infinita": { nome: "Prisão Infinita", forma: "Escrita", tipo: "Cósmica", subtipo: "Tempo", custo: "3 ações - Grande", desc: "Para o tempo no alcance 0-1. Ninguém age. Manter custa 1 Ponto Cósmico por rodada." },
        "tempo_celestial": { nome: "Tempo Celestial", forma: "Escrita", tipo: "Cósmica", subtipo: "Tempo", custo: "3 ações - Grande", desc: "Para o tempo de tudo a alcance 0-1 (menos invocador) por 1 Rodada. Sem ações ou reações." },
        "tempo_infinito": { nome: "Tempo Infinito", forma: "Escrita", tipo: "Cósmica", subtipo: "Tempo", custo: "3 ações - Grande", desc: "Para o tempo no alcance 0-1. Ninguém age. Manter custa 1 Ponto Cósmico por rodada." }
    },

    // --- MAJI DE SINAL (2 Ações) ---
    "sinal": {
        // Elemental: Chuva
        "chicote_agua": { nome: "Chicote de Água", forma: "Sinal", tipo: "Elemental", subtipo: "Chuva", custo: "2 Ações", desc: "Braço vira chicote (alcance 0-1). Usa Agilidade, causa 2d6+Nível dano. Dura 5 rodadas." },
        "corrente_alternada": { nome: "Corrente Alternada", forma: "Sinal", tipo: "Elemental", subtipo: "Chuva", custo: "2 Ações", desc: "Reação. Ao receber Condutivo, escolha 1-alvo alcance 0-1 (Reflexos DA 12). Falha: repasasa Condutivo." },
        "gaiola_eletricidade": { nome: "Gaiola de Eletricidade", forma: "Sinal", tipo: "Elemental", subtipo: "Chuva", custo: "2 Ações", desc: "Reação. Ao receber dano elétrico ou Condutivo: bloqueia condição e Reduzir 10 elétrico." },
        "mao_fria": { nome: "Mão Fria", forma: "Sinal", tipo: "Elemental", subtipo: "Chuva", custo: "2 Ações", desc: "2 usos. Gaste ao atingir desarmado para causar Congelado." },
        "punho_cristal": { nome: "Punho de Cristal", forma: "Sinal", tipo: "Elemental", subtipo: "Chuva", custo: "2 Ações", desc: "Ataque desarmado com gelo. Causa dano + Perfurar 5 + Cortante." },
        "punho_eletrico": { nome: "Punho Elétrico", forma: "Sinal", tipo: "Elemental", subtipo: "Chuva", custo: "2 Ações", desc: "Ataque desarmado com eletricidade. Causa dano + Condutivo." },
        "tempestade_granizo": { nome: "Tempestade de Granizo", forma: "Sinal", tipo: "Elemental", subtipo: "Chuva", custo: "2 Ações", desc: "3 alvos a alcance 0-1 (Esquiva/Defesa). 3d6 dano e Congelado." },
        "tsunami": { nome: "Tsunami", forma: "Sinal", tipo: "Elemental", subtipo: "Chuva", custo: "2 Ações", desc: "Onda em Todo Alvo a frente alcance 1-3. Físico (DA 16). Falha: 3d6 dano e Caído." },

        // Elemental: Natureza
        "absorcao_raizes": { nome: "Absorção de Raízes", forma: "Sinal", tipo: "Elemental", subtipo: "Natureza", custo: "2 Ações", desc: "Ataque desarmado. Se acertar, recebe cura igual ao dano causado." },
        "arma_natureza": { nome: "Arma da Natureza", forma: "Sinal", tipo: "Elemental", subtipo: "Natureza", custo: "2 Ações", desc: "Cria 1-equipamento corpo a corpo de madeira. Igual ao original. Se soltar, desfaz." },
        "curativo_seiva": { nome: "Curativo de Seiva", forma: "Sinal", tipo: "Elemental", subtipo: "Natureza", custo: "2 Ações", desc: "Cure 4d6 PV de 1-alvo a alcance 0." },
        "luva_pedra": { nome: "Luva de Pedra", forma: "Sinal", tipo: "Elemental", subtipo: "Natureza", custo: "2 Ações", desc: "Mãos de pedra (sem Maji Sinal). 2 Usos: +2d6 dano desarmado." },
        "muro_defesa": { nome: "Muro de Defesa", forma: "Sinal", tipo: "Elemental", subtipo: "Natureza", custo: "2 Ações", desc: "Reação. Quando 1-alvo a alcance 0-2 for atacado, cria muro com Reduzir 5 (dobro vs Fogo/Elétrico)." },
        "plataforma_raizes": { nome: "Plataforma de Raízes", forma: "Sinal", tipo: "Elemental", subtipo: "Natureza", custo: "2 Ações", desc: "Eleva 1-alvo alcance 0-1. Base móvel por 2 rodadas." },
        "punho_vinhas": { nome: "Punho de Vinhas", forma: "Sinal", tipo: "Elemental", subtipo: "Natureza", custo: "2 Ações", desc: "Ataque desarmado. Se acertar: dano + Imobilizado." },

        // Elemental: Vento
        "impacto_ventania": { nome: "Impacto da Ventania", forma: "Sinal", tipo: "Elemental", subtipo: "Vento", custo: "2 Ações", desc: "Bomba de vento em 1-alvo alcance 1 (3d6 Perfurar 2). Todo Alvo a alcance 0 do impacto faz Reflexos (DA 10) ou sofre 2d6 dano." },
        "lanca_ar": { nome: "Lança de Ar", forma: "Sinal", tipo: "Elemental", subtipo: "Vento", custo: "2 Ações", desc: "Corrente cortante em linha frente 0-3 (Esquiva DA 8). Causa 2d6 e Perfurar-5." },
        "onda_vento": { nome: "Onda de Vento", forma: "Sinal", tipo: "Elemental", subtipo: "Vento", custo: "2 Ações", desc: "Reação. Ao receber dano fogo ou Queimando: bloqueia condição e Reduzir 10 fogo." },
        "punho_ar": { nome: "Punho de Ar", forma: "Sinal", tipo: "Elemental", subtipo: "Vento", custo: "2 Ações", desc: "Ataque desarmado. Se acertar: dano + Perfurar 5 + Move você e alvo para alcance 1." },
        "redoma_pressao": { nome: "Redoma de Pressão", forma: "Sinal", tipo: "Elemental", subtipo: "Vento", custo: "2 Ações", desc: "1-alvo alcance 0-2 faz Físico (DA 12). Falha: Desorientado e Caído. 2 Riscos: Inconsciente." },
        "salto_sismico": { nome: "Salto Sísmico", forma: "Sinal", tipo: "Elemental", subtipo: "Vento", custo: "2 Ações", desc: "Pula para alcance 0-2. Todo Alvo em alcance 0-1 do pouso é empurrado e faz Físico (DA 10) ou Caído." },
        "tempestade_ar": { nome: "Tempestade de Ar", forma: "Sinal", tipo: "Elemental", subtipo: "Vento", custo: "2 Ações", desc: "Vento em frente alcance 0-3 atinge 2 alvos. 2d6 dano, empurra alcance 1. Físico (DA 10) ou Caído." },

        // Celeste: Estrelas
        "hercules": { nome: "Hércules", forma: "Sinal", tipo: "Celeste", subtipo: "Estrelas", custo: "2 Ações", desc: "Ataque desarmado. Se acertar causa +3d6 de dano." },
        "leo": { nome: "Leo", forma: "Sinal", tipo: "Celeste", subtipo: "Estrelas", custo: "2 Ações", desc: "Cria Teko-kagi nas mãos (+1d6 dano desarmado). Dura 1 Cena." },
        "ophiuchus": { nome: "Ophiuchus", forma: "Sinal", tipo: "Celeste", subtipo: "Estrelas", custo: "2 Ações", desc: "1-alvo alcance 0-2 (Esquiva/Defesa). Se Esquivar, pode gastar +1PE para rolar ataque de novo. Acerto: 2d6 dano e Desorientado." },
        "pegasus": { nome: "Pegasus", forma: "Sinal", tipo: "Celeste", subtipo: "Estrelas", custo: "2 Ações", desc: "Avanço em linha reta até alcance 2. Ataque desarmado em todos no caminho." },
        "sagittarius": { nome: "Sagittarius", forma: "Sinal", tipo: "Celeste", subtipo: "Estrelas", custo: "2 Ações", desc: "Cria Arco Recurvo de luz (5 Flechas de luz)." },
        "scorpius": { nome: "Scorpius", forma: "Sinal", tipo: "Celeste", subtipo: "Estrelas", custo: "2 Ações", desc: "Ataque desarmado. Se acertar: dano + Intoxicado." },
        "ursa_major": { nome: "Ursa Major", forma: "Sinal", tipo: "Celeste", subtipo: "Estrelas", custo: "2 Ações", desc: "Traje com Reduzir 6 por 3 rodadas." },
        "ursa_minor": { nome: "Ursa Minor", forma: "Sinal", tipo: "Celeste", subtipo: "Estrelas", custo: "2 Ações", desc: "Escudo Pequeno de luz (Defesa 4, 3 Usos)." },

        // Celeste: Lua
        "item_lua": { nome: "Item da Lua", forma: "Sinal", tipo: "Celeste", subtipo: "Lua", custo: "2 Ações", desc: "Cria cópia ilusória de item. Pode ser tocado, mas não funcional (chave não abre, arma não corta)." },
        "mascara_afeto": { nome: "Máscara do Afeto", forma: "Sinal", tipo: "Celeste", subtipo: "Lua", custo: "2 Ações", desc: "Reação. Atacante faz Carisma (DA 10). Falha: Rola ataque de novo (pior resultado) e Desorientado." },
        "membro_fantasma": { nome: "Membro Fantasma", forma: "Sinal", tipo: "Celeste", subtipo: "Lua", custo: "2 Ações", desc: "Membro espectral funcional (segura itens, usa Maji)." },
        "seja_ilusao": { nome: "Seja a Ilusão", forma: "Sinal", tipo: "Celeste", subtipo: "Lua", custo: "2 Ações", desc: "Invisibilidade em 1-alvo alcance 0. Sentidos (DA 12) para detectar. 2 rodadas ou até atacar." },
        "toque_lua": { nome: "Toque da Lua", forma: "Sinal", tipo: "Celeste", subtipo: "Lua", custo: "2 Ações", desc: "Planta memória ilusória breve em 1-alvo alcance 0. Sentidos (DA 8) nega." },
        "uma_ilusao": { nome: "Uma Ilusão", forma: "Sinal", tipo: "Celeste", subtipo: "Lua", custo: "2 Ações", desc: "Remove 1 condição de 1-alvo a alcance 0-1 por 1 rodada." },

        // Celeste: Sol
        "clarao_imensidao": { nome: "Clarão de Imensidão", forma: "Sinal", tipo: "Celeste", subtipo: "Sol", custo: "2 Ações", desc: "Brilho em alcance 0-2. Todo Alvo faz Sentidos (DA 12) ou Cego." },
        "disparo_solar": { nome: "Disparo Solar", forma: "Sinal", tipo: "Celeste", subtipo: "Sol", custo: "2 Ações", desc: "Feixe em 1-alvo a alcance 0-1 (Esquiva DA 6). 4d6 fogo e Queimando 1." },
        "enxame_fuligem": { nome: "Enxame de Fuligem", forma: "Sinal", tipo: "Celeste", subtipo: "Sol", custo: "2 Ações", desc: "Brasas em 1-alvo alcance 0-2 (Esquiva). Acerto: Explosivo." },
        "punho_explosao": { nome: "Punho de Explosão", forma: "Sinal", tipo: "Celeste", subtipo: "Sol", custo: "2 Ações", desc: "Ataque desarmado. Se acertar: dano + Explosivo." },
        "punho_fogo": { nome: "Punho de Fogo", forma: "Sinal", tipo: "Celeste", subtipo: "Sol", custo: "2 Ações", desc: "Ataque desarmado. Se acertar: dano vira Fogo + Queimando 1." },
        "raio_solar": { nome: "Raio Solar", forma: "Sinal", tipo: "Celeste", subtipo: "Sol", custo: "2 Ações", desc: "Raio em 1-alvo alcance 0-1. 2d6 fogo. Pode reativar prox turno (+1d6 extra)." },
        "resistencia_calor": { nome: "Resistência ao Calor", forma: "Sinal", tipo: "Celeste", subtipo: "Sol", custo: "2 Ações", desc: "Imune a calor, lava, Queimando e dano de fogo por 3 rodadas." },

        // Cósmica: Espaço
        "defletir_ataque": { nome: "Defletir Ataque", forma: "Sinal", tipo: "Cósmica", subtipo: "Espaço", custo: "2 Ações", desc: "Reação. Se oponente tirar 2 Riscos no ataque, devolve o ataque para ele." },
        "distorcao_espacial": { nome: "Distorção Espacial", forma: "Sinal", tipo: "Cósmica", subtipo: "Espaço", custo: "2 Ações", desc: "Reação. 1-alvo a alcance 1 recebe -2 em Esquiva e Sentidos." },
        "punho_distorcao": { nome: "Punho de Distorção", forma: "Sinal", tipo: "Cósmica", subtipo: "Espaço", custo: "2 Ações", desc: "Ataque desarmado. Se acertar: dano + Imobilizado (DA 10)." },
        "telecinese": { nome: "Telecinese", forma: "Sinal", tipo: "Cósmica", subtipo: "Espaço", custo: "2 Ações", desc: "Mova 1-item ou alvo a alcance 0-1 para alcance 1 de distância. Alvo faz Força DA 8 para resistir." },

        // Cósmica: Tempo
        "ataque_acelerado": { nome: "Ataque Acelerado", forma: "Sinal", tipo: "Cósmica", subtipo: "Tempo", custo: "2 Ações", desc: "3-usos. Gaste após ataque desarmado para fazer outro ataque desarmado extra." },
        "estagnacao": { nome: "Estagnação", forma: "Sinal", tipo: "Cósmica", subtipo: "Tempo", custo: "2 Ações", desc: "Prende 1-alvo no tempo alcance 0-1. Físico (DA 12). Falha: Desorientado." },
        "punho_tempo": { nome: "Punho do Tempo", forma: "Sinal", tipo: "Cósmica", subtipo: "Tempo", custo: "2 Ações", desc: "Ataque desarmado. Ser: +2d6 dano (avançar) ou 3d6 cura (regredir). Objeto: quebra ou conserta." },
        "rastros_tempo": { nome: "Rastros do Tempo", forma: "Sinal", tipo: "Cósmica", subtipo: "Tempo", custo: "2 Ações", desc: "Vê passado no alcance 0-3. Nível 1: dias. Nível 2: meses. Nível 3: anos." },
        "re_retorno": { nome: "(Re)Retorno", forma: "Sinal", tipo: "Cósmica", subtipo: "Tempo", custo: "2 Ações", desc: "Reação. Retorna qualquer deslocamento feito até 1 rodada atrás, fugindo de alcance." }
    }
};