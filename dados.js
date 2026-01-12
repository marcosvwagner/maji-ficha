
const dadosGuildas = {
    "ardor": {
        bonus: "Agilidade",
        armas: "Duas Luvas de Combate, Duas Faca-T", traje: "Traje de Couro", riqueza: "2",
        maji: "Maji Base de Sinal (Godama), Ataque Acelerado, Duas Maji a sua escolha",
        hab1: { nome: "Força e Esquiva", desc: "Use a força do inimigo contra ele. Ao realizar a reação Esquiva com sucesso contra um ataque a alcance 0, o inimigo recebe a Força dele em d6-dano." },
        hab2: { nome: "Disciplina Formidável", desc: "Pode realizar a Manobra Crítica Desarme com 1-Crítico ao invés de 2. Porém apenas usando ataques desarmados a alcance-0.", req: "Força 2" },
        hab3: { nome: "Arma Temporária", desc: "Use qualquer coisa ao seu redor. Gaste 1 Ação para pegar um objeto (pedra, cadeira, garrafa, caneta), que causa 2d6-dano com Força como modificador. Sua Força é usada para atacar e após acertar um golpe a arma quebra.", req: "Astúcia 2" },
        hab4: { nome: "Fraqueza do Alvo", desc: "Gaste 2 Ações para entender os movimentos e fragilidades de um alvo. Recebe +1d6-dano em qualquer ataque com a Perícia Lutar contra ele até o fim da cena.", req: "Carisma 2" }
    },
    "blugarony": {
        bonus: "Força",
        armas: "Uma Arma ou Sub-arma", traje: "Traje de Malha", riqueza: "3",
        maji: "Maji Base de Sinal (Godama), Duas Maji de Sinal, Duas Maji",
        hab1: { nome: "Impacto Devastador", desc: "Ao realizar um ataque desarmado, pode gastar mais 1 Ação para causar +1d6-dano, além disso o alvo não pode escolher a reação Defesa." },
        hab2: { nome: "Disciplina Formidável", desc: "Uma vez por cena, pode ignorar qualquer Penalidade que esteja sofrendo até o fim do seu Turno de Equipe.", req: "Vigor 3" },
        hab3: { nome: "Maratona Implacável", desc: "Sempre que acertar um ataque desarmado, pode se mover para um local a alcance 1, sem gastar ação.", req: "Agilidade 2 /Força 3" },
        hab4: { nome: "Ritmo Ascendente", desc: "Uma vez por Turno de Equipe ao acertar um ataque desarmado, recebe 1 Ação extra.", req: "Agilidade 4" }
    },
    "borealis": {
        bonus: "Agilidade",
        armas: "Duas Espadas Leves, Uma Balestra", traje: "Traje de Couro", riqueza: "3",
        maji: "Maji Base de Fala (Godai), Duas Maji de Vento, Uma Maji Qualquer",
        hab1: { nome: "Dupla Defensiva", desc: "Em Dupla Empunhadura ao usar a ação Postura Defensiva, recebe 1d6-defesa, ao invés de +2." },
        hab2: { nome: "Contrafluxo", desc: "Enquanto estiver empunhando duas armas, uma vez por rodada, quando usar a reação Contra Ataque, se tiver o maior resultado, além de atacar, consegue defender todo o dano que o oponente causaria.", req: "Agilidade 4" },
        hab3: { nome: "Corte X", desc: "Enquanto estiver empunhando duas armas, ao realizar um ataque pode gastar 1 Ação para realizar outro com a segunda arma, porém, escolha apenas um dos dois testes como resultado para efetivamente ser usado contra o alvo.", req: "Agilidade 3" },
        hab4: { nome: "Ponto de Ruptura", desc: "Você sabe o ponto fraco em um traje só de olhar, com ataques usando Agilidade pode utilizar as Manobras Críticas Preciso e Quebrar com 1 Crítico ao invés de 2.", req: "Astúcia 2" }
    },
    "canis": {
        bonus: "Agilidade",
        armas: "uma Arma, uma Sub-Arma", traje: "Traje de Couro", riqueza: "1",
        maji: "Maji Base de Fala ou Sinal, duas Maji de Sol, duas Maji qualquer",
        hab1: { nome: "Canis Louco", desc: "Com as mãos livres, você pode apoiar as duas no chão, aumentando seu deslocamento na ação Mover em Alcance 1. Você pode segurar armas de uma mão com a boca e armas de duas mãos quando tiver Força 3." },
        hab2: { nome: "Ataque Feroz", desc: "Ao acertar um ataque com armas leves ou pesadas, você pode realizar um ataque desarmado sem gastar ação.", req: "Agilidade 3" },
        hab3: { nome: "Furia Ferion", desc: "Acostumados ao calor e treinados em vulcões, os Canis possuem reduzir 2 contra dano de fogo. Além disso, toda Maji de Fala ou Sinal de Sol que causar dano recebe +1d6 de dano.", req: "Vigor 2" },
        hab4: { nome: "Investida Destrutiva", desc: "Ao realizar um ataque após se mover no mesmo Turno de Equipe, você recebe +1d6 de dano extra por Alcance deslocado, porém também sofre esse dano extra devido ao impacto.", req: "Força 3/ Vigor 2" }
    },
    "duellante": {
        bonus: "Agilidade",
        armas: "Uma Arma", traje: "Traje de Couro", riqueza: "3",
        maji: "Quatro Maji",
        hab1: { nome: "Iniciativa de Duelo", desc: "Sua Equipe vence a Iniciativa em caso de empate. Na cena de Maji-Du, recebe +2 em seu teste de Agilidade na Fase 1." },
        hab2: { nome: "Bravo Duellante", desc: "Uma vez por Rodada, após usar Contra Ataque, você também pode realizar a reação Esquiva para tentar evitar sofrer o ataque. Em uma cena de Maji-Du, o oponente precisa superar em 2 os Pontos de Essência gastos para Contra Ataque.", req: "Agilidade 3, Inteligência 2" },
        hab3: { nome: "Manipulação Essencial", desc: "Gastando 3 Ações, pode adicionar uma Característica do Ambiente no campo que está, contando que faça sentido com a cena. Exemplo: manipular a essência para fazer chover.", req: "Inteligência 2" },
        hab4: { nome: "Preparo Antecipado", desc: "Tem +2-Ponto em sua Reserva de Pontos de Essência.", req: "Astúcia 2, Inteligência 2" }
    },
    "eco": {
        bonus: "Inteligência",
        armas: "Quatro Suportes, Dois Pergaminhos Pequenos e Grandes", traje: "—", riqueza: "3",
        maji: "Maji Base de Escrita, Duas Maji de Escrita, Duas Maji Qualquer",
        hab1: { nome: "Economia Florestal", desc: "Ao utilizar uma Maji Elemental de Controle, Defesa ou Suporte, você pode atingir +1-alvo ou dar +5-cura." },
        hab2: { nome: "Benção da Floresta", desc: "Enquanto estiver em uma Zona Zero Elemental, você pode gastar 1 Ação para devolver a micro-essência residual ao campo. Assim, os efeitos da Zona Zero Elemental são anulados por 1 rodada. Pode ser usada 3 vezes por cena.", req: "Inteligência 4" },
        hab3: { nome: "Ecológico", desc: "Preserve a natureza. Você tem +4 na Reserva de Pontos Essência.", req: "Inteligência 3" },
        hab4: { nome: "Força da Terra", desc: "Ao usar uma Maji Elemental, recebe +1 uso ou +1 rodada. Esta habilidade só funciona se houver 5 ou mais Pontos Elemental no campo.", req: "Astúcia 2, Inteligência 3" }
    },
    "royal": {
        bonus: "Inteligência",
        armas: "Uma Arma", traje: "Traje de Couro", riqueza: "3",
        equipamento: "2 Suportes de Pergaminho Grande",
        maji: "Maji Base de Escrita, Duas Maji de Escrita, Duas Maji",
        hab1: { nome: "Querido Grimório", desc: "Você possui um Grimório capaz de armazenar Maji, com limite de 5-espaços. Cada Maji de Escrita Pequena ocupa 1-espaço. Registre toda Maji escrita no Grimório." },
        hab2: { nome: "Grimório Grande", desc: "Seu Grimório tem +5-espaços.", req: "Inteligência 3" },
        hab3: { nome: "Grimório Robusto", desc: "Gastando 3-espaços do seu Grimório, você pode armazenar uma Maji de Escrita de Pergaminho Grande.", req: "Astúcia 2" },
        hab4: { nome: "Grimório Voador", desc: "Seu Grimório pode se mover por conta própria, sem precisar ser segurado.", req: "Inteligência 3" }
    },
    "justica": {
        bonus: "Vigor",
        armas: "Espada Bastarda, Escudo Pequeno ou Grande", traje: "Traje de Malha ou Placa", riqueza: "2",
        maji: "Maji Base de Fala (Godai), Quatro Maji",
        hab1: { nome: "Código de Justiça", desc: "Justo sempre. Você tem +2 em todos os testes com armas. Porém você não pode atacar um alvo que esteja incapaz de lutar ou que não queira lutar. Apague essa habilidade de sua Ficha se quebrar uma regra. Pode adquirir essa habilidade novamente refazendo seus votos gastando EXP." },
        hab2: { nome: "Combate Justo", desc: "Enquanto estiver sofrendo de desvantagem em combate (lutando em menor número ou sofrendo mais penalidades que o oponente), recebe 1 Ação extra.", req: "Vigor X" },
        hab3: { nome: "Condenar", desc: "Se decidir a pena de um alvo baseado nos atos que ele realizou, você tem +1d6 em todo ataque (menos Maji) e +5 em qualquer teste que use Carisma contra ele, porém, seus atos devem estar de acordo com a pena. Exemplo: Se decidir pena de morte só ganha o bônus para atos mortais.", req: "Carisma X" },
        hab4: { nome: "Justiça Cega", desc: "Capaz de avaliar rapidamente a verdade. Tem +5 em testes de Astúcia para perceber mentiras e em Carisma para sentir emoções e intenções ocultas.", req: "Astúcia X/Carisma X" }
    },
    "nadyat": {
        bonus: "Vigor",
        armas: "Uma Arma", traje: "Traje de Couro ou Malha", riqueza: "1",
        maji: "Cinco Maji Qualquer",
        hab1: { nome: "Quebrando os Limites", desc: "Ao utilizar Superar Limites, seus benefícios são mantidos até o fim do seu próximo Turno de Equipe, assim como o efeito de ignorar as Penalidades." },
        hab2: { nome: "Berserker", desc: "Ao ativar Superar Limites, recebe +Xd6-dano com arma, onde X é o nível do Superar Limites ativo.", req: "Força 2, Vigor 3, Carisma 2" },
        hab3: { nome: "Legado de Firion", desc: "O legado de superação de Firion vive em cada membro da Nadyat, ao ativar o 3° Superar Limites, recebe o dobro do efeito, ou seja, 2 Ações e +10.", req: "Vigor 3, Carisma 2" },
        hab4: { nome: "Rompendo as Barreiras", desc: "Quando usar Superar Limites, você se liberta de qualquer Condição que esteja sofrendo (menos se não quiser se libertar).", req: "Vigor 3" }
    },
    "oberon": {
        bonus: "Vigor",
        armas: "Três Armas, Três Sub-Arma", traje: "Dois Trajes (menos Nori e Sevilia)", riqueza: "2",
        maji: "Maji Base de Fala, Reequipar, Duas Maji a sua escolha",
        hab1: { nome: "Arsenal Oberon", desc: "A Maji que torna os implacáveis. Sua Maji Reequipar aumenta em +4 níveis." },
        hab2: { nome: "Ataques Fluidos", desc: "Ao realizar um ataque com uma arma, uma vez por Turno de Equipe, pode gastar 1 Ação para realizar outro ataque com uma arma diferente.", req: "Agilidade 2, Força 2" },
        hab3: { nome: "Mestre das Armas", desc: "Para cada arma diferente que utilizar para realizar um ataque durante o mesmo Turno de Equipe, tem um bônus de +1d6-dano no próximo ataque.", req: "Força 3" },
        hab4: { nome: "Retaliação Contraposta", desc: "Quando um oponente declara um Contra Ataque usando armas, pode escolher anular o ataque e a reação com as armas se atingindo, para causar Atordoado 1 no alvo.", req: "Agilidade 3" }
    },
    "strike": {
        bonus: "Astúcia",
        armas: "Arma, Sub-Arma ou escudo", traje: "Traje de Couro", riqueza: "3",
        maji: "Maji Base de Fala ou Escrita, Três Maji a sua escolha",
        hab1: { nome: "Estratégia", desc: "Durante uma cena crie um plano em colaboração com todos presentes. Cada um escolhe um atributo e como vai usa-la no plano, fornecendo +1d10 uma vez para executar o ato no plano na cena." },
        hab2: { nome: "Plano B", desc: "Quando um plano sai do controle, você sempre tem outras alternativas. Gaste 3 Ações, refaça um aspecto narrativo na cena, como se estivesse usando a Manobra Crítica Narrativo. Só pode usar essa habilidade uma vez por sessão.", req: "Inteligência 2/Astúcia 3" },
        hab3: { nome: "Raciocinio Rápido", desc: "Você é capaz de adaptar-se rapidamente a qualquer situação. Se falhar ao usar a reação Esquiva, pode usar a reação Defesa uma vez por rodada.", req: "Agilidade 2/Astúcia 3" },
        hab4: { nome: "Sintonia de Guerra", desc: "Em uma situação em que está liderando o grupo, Habilidades de Sinergia de Nível 1, podem ser usadas por seus aliados na cena, mesmo que não tenham qualquer sinergia entre si.", req: "Carisma 2" }
    },
    "tayport": {
        bonus: "Inteligência",
        armas: "Uma arma ou sub-arma, 2 suportes grandes", traje: "Traje Comum", riqueza: "3",
        maji: "Maji Base de Fala, Sem Obstáculos, Maji Base de Escrita, Teleporte, uma Maji.",
        hab1: { nome: "Em Todo Lugar", desc: "Você cria um portal estratégico. Ao conjurar Sem Obstáculos, pode alterar seu texto, para criar portais que conectam o caminho percorrido por você, onde os seres podem atravessar pelo portal até o final do Turno de Equipe." },
        hab2: { nome: "Portal Tático", desc: "Pode usar uma vez em seu turno de equipe um uso da Maji Sem Obstáculos, para teleportar um ataque que use um projétil, como flechas e disparos de Maji a distância, efetivamente aumentando o seu alcance.", req: "Agilidade 2" },
        hab3: { nome: "Rede de Portais", desc: "A sua Maji Teleporte, agora pode ter até 5 pergaminhos conectados a ele. Ao entrar ou enviar algo, deve escolher para qual deles será teleportado.", req: "Inteligência 3" },
        hab4: { nome: "Salto de Coordenação", desc: "Seu profundo conhecimento sobre a manipulação das moléculas e disposição física permite otimizar seus próximos movimentos. Sempre que gastar um uso da Maji Sem Obstáculos, você ganha uma ação extra.", req: "Agilidade 2/Inteligência 4" }
    },
    "tigre": {
        bonus: "Agilidade",
        armas: "Uma Espada ou Lança", traje: "Traje de Malha ou Couro", riqueza: "3",
        maji: "Maji Base de Fala (Godai), Uma Maji de Fala, Três Maji",
        hab1: { nome: "Sangue de Tigre", desc: "Um guerreiro é temido por sua persistência. Enquanto estiver sofrendo da Primeira Penalidade, recebe reduzir 2. Aumenta para reduzir 5 enquanto estiver na Segunda Penalidade." },
        hab2: { nome: "Encare a Morte", desc: "Eles podem correr, mas não para sempre. Uma vez por cena, após o alvo declarar sua reação, pode fazer um teste oposto de Presença contra ele. Se vencer, pode obrigar o alvo a mudar sua reação para Contra Ataque.", req: "Carisma X" },
        hab3: { nome: "Ferocidade", desc: "Quando realizar um ataque com armas, pode escolher ter entre -1 a -5 no ataque, para receber o mesmo número em soma, seja +1 a +5 no dano.", req: "Força X" },
        hab4: { nome: "Presas e Sangue", desc: "Ao usar ou usarem contra você a reação Contra Ataque, cause +2d6-dano nesse ataque.", req: "Agilidade" }
    },
    "yastrev": {
        bonus: "Força",
        armas: "Espada ou Lança", traje: "Traje de Malha ou Couro", riqueza: "3",
        maji: "Maji Base de Fala, Uma Maji de Fala, Três Maji",
        hab1: { nome: "Golpe Unico", desc: "Ao realizar um ataque desarmado com sucesso, pode gastar ações restantes para dar +1d6-dano por ação gasta." },
        hab2: { nome: "Estrangular", desc: "Enquanto está imobilizando um alvo, pode gastar 1 Ação e causar 2d6-dano que o alvo não pode reduzir e o bloqueia de usar Maji de Fala nessa rodada.", req: "Força 3" },
        hab3: { nome: "Historico Problematico", desc: "Realize um teste oposto de Carisma contra um alvo, se tiver sucesso o alvo recebe Medo 1, se retirar o dobro do resultado do alvo, se torna Medo 2.", req: "Carisma 2" },
        hab4: { nome: "Velocidade de Rapina", desc: "Os insetos tentam fugir. Pode gastar 2 Ações para se mover em 3-alcances.", req: "Agilidade 2" }
    },
    "exterminadores": {
        bonus: "Vigor",
        armas: "Arma Pesada", traje: "Traje de Malha", riqueza: "1",
        maji: "Maji Base de Fala, Três Maji",
        hab1: { nome: "Extermínio", desc: "Você treinou para rastrear e eliminar Vorulos com precisão. Sempre que fizer um teste para encontrar sinais da presença de seres, pode rolar com +1d10. Além disso, recebe +1d6-dano contra Vorulos em ataque com Arma Pesada." },
        hab2: { nome: "Auto Sacrificio", desc: "Para cada vez que escolher não usar uma Reação, no seu próximo ataque receba +1d6-dano.", req: "Vigor X" },
        hab3: { nome: "Força Devastadora", desc: "Todo dado de dano que resultar em 6, pode rolar +1d6 no dano.", req: "Força X" },
        hab4: { nome: "Homem Sem Medo", desc: "A experiência em batalhas contra Vorulos fortaleceu sua mente. Você reduz Medo 1 para Medo 0 (ou seja, não sofre a condição) e Medo 2 para Medo 1.", req: "Carisma X" }
    }
};