// Salve como: dados.js

const dadosGuildas = {
    "ardor": {
        bonus: "Agilidade",
        armas: "Duas Luvas de Combate, Duas Faca-T", traje: "Traje de Couro", riqueza: "2",
        maji: "Maji Base de Sinal (Godama), Ataque Acelerado, Duas Maji a sua escolha",
        hab1: { nome: "Força e Esquiva", desc: "Use a força do inimigo contra ele. Ao realizar a reação Esquiva com sucesso contra um ataque a alcance 0, o inimigo recebe a Força dele em d6-dano." },
        hab2: { nome: "Disciplina Formidável", desc: "Pode realizar a Manobra Crítica Desarme com 1-Crítico ao invés de 2. Porém apenas usando ataques desarmados a alcance-0.", req: "Força X" },
        hab3: { nome: "Arma Temporária", desc: "Use qualquer coisa ao seu redor. Gaste 1 Ação para pegar um objeto (pedra, cadeira, garrafa, caneta), que causa 2d6-dano com Força como modificador. Sua Força é usada para atacar e após acertar um golpe a arma quebra.", req: "Astúcia X" },
        hab4: { nome: "Fraqueza do Alvo", desc: "Gaste 2 Ações para entender os movimentos e fragilidades de um alvo. Recebe +1d6-dano em qualquer ataque com a Perícia Lutar contra ele até o fim da cena.", req: "Carisma X" }
    },
    "blugarony": {
        bonus: "Força",
        armas: "Uma Arma ou Sub-arma", traje: "Traje de Malha", riqueza: "3",
        maji: "Maji Base de Sinal (Godama), Duas Maji de Sinal, Duas Maji",
        hab1: { nome: "Impacto Devastador", desc: "Ao realizar um ataque desarmado, pode gastar mais 1 Ação para causar +1d6-dano, além disso o alvo não pode escolher a reação Defesa." },
        hab2: { nome: "Disciplina Formidável", desc: "Uma vez por cena, pode ignorar qualquer Penalidade que esteja sofrendo até o fim do seu Turno de Equipe.", req: "Vigor X" },
        hab3: { nome: "Maratona Implacável", desc: "Sempre que acertar um ataque desarmado, pode se mover para um local a alcance 1, sem gastar ação.", req: "Agilidade X /Força X" },
        hab4: { nome: "Ritmo Ascendente", desc: "Uma vez por Turno de Equipe ao acertar um ataque desarmado, recebe 1 Ação extra.", req: "Agilidade X" }
    },
    "borealis": {
        bonus: "Agilidade",
        armas: "Duas Espadas Leves, Uma Balestra", traje: "Traje de Couro", riqueza: "3",
        maji: "Maji Base de Fala (Godai), Duas Maji de Vento, Uma Maji Qualquer",
        hab1: { nome: "Dupla Defensiva", desc: "Em Dupla Empunhadura ao usar a ação Postura Defensiva, recebe 1d6-defesa, ao invés de +2." },
        hab2: { nome: "Contrafluxo", desc: "Enquanto estiver empunhando duas armas, uma vez por rodada, quando usar a reação Contra Ataque, se tiver o maior resultado, além de atacar, consegue defender todo o dano que o oponente causaria.", req: "Agilidade X" },
        hab3: { nome: "Corte X", desc: "Enquanto estiver empunhando duas armas, ao realizar um ataque pode gastar 1 Ação para realizar outro com a segunda arma, porém, escolha apenas um dos dois testes como resultado para efetivamente ser usado contra o alvo.", req: "Agilidade X" },
        hab4: { nome: "Ponto de Ruptura", desc: "Você sabe o ponto fraco em um traje só de olhar, com ataques usando Agilidade pode utilizar as Manobras Críticas Preciso e Quebrar com 1 Crítico ao invés de 2.", req: "Astúcia X" }
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
    "eco": {
        bonus: "Inteligência",
        armas: "Quatro Suportes, Pergaminhos Pequenos e Grandes", traje: "Traje Comum", riqueza: "3",
        maji: "Maji Base de Escrita (Gidama), Duas Maji de Escrita, Duas Maji qualquer",
        hab1: { nome: "Economia Florestal", desc: "Ao utilizar uma Maji Elemental de Controle, Defesa ou Suporte, pode atingir +1-alvo ou dar +5-cura." },
        hab2: { nome: "Benção da Floresta", desc: "Enquanto estiver em uma Zona Zero Elemental, pode gastar 1 Ação para devolver a micro essência residual de volta ao Campo, assim, os efeitos da Zona Zero Elemental são anulados por 1-Rodada. Só pode ser usada 3 vezes por Cena.", req: "Inteligência X" },
        hab3: { nome: "Ecológico", desc: "Preserve a natureza. Você tem +4 na Reserva de Ponto do tipo Elemental.", req: "Inteligência X" },
        hab4: { nome: "Força da Terra", desc: "Ao usar uma Maji Elemental recebe em +1-usos ou +1-rodadas. Essa habilidade só funciona se tiver 5 ou mais Pontos Elemental no Campo.", req: "Astúcia X/Inteligência X" }
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
    "strike": {
        bonus: "Astúcia",
        armas: "Arma, Sub-Arma ou escudo", traje: "Traje de Couro", riqueza: "3",
        maji: "Maji Base de Fala ou Escrita, Três Maji a sua escolha",
        hab1: { nome: "Estratégia", desc: "Durante uma cena crie um plano em colaboração com todos presentes. Cada um escolhe um atributo e como vai usa-la no plano, fornecendo +1d10 uma vez para executar o ato no plano na cena." },
        hab2: { nome: "Plano B", desc: "Quando um plano sai do controle, você sempre tem outras alternativas. Gaste 3 Ações, refaça um aspecto narrativo na cena, como se estivesse usando a Manobra Crítica Narrativo. Só pode usar essa habilidade uma vez por sessão.", req: "Inteligência X/Astúcia X" },
        hab3: { nome: "Raciocinio Rápido", desc: "Você é capaz de adaptar-se rapidamente a qualquer situação. Se falhar ao usar a reação Esquiva, pode usar a reação Defesa uma vez por rodada.", req: "Agilidade X/Astúcia X" },
        hab4: { nome: "Sintonia de Guerra", desc: "Em uma situação em que está liderando o grupo, Habilidades de Sinergia de Nível 1, podem ser usadas por seus aliados na cena, mesmo que não tenham qualquer sinergia entre si.", req: "Carisma X" }
    },
    "tayport": {
        bonus: "Inteligência",
        armas: "Uma arma ou sub-arma, 2 suportes grandes", traje: "Traje Comum", riqueza: "3",
        maji: "Maji Base de Fala, Sem Obstáculos, Maji Base de Escrita, Teleporte, uma Maji.",
        hab1: { nome: "Em Todo Lugar", desc: "Você cria um portal estratégico. Ao conjurar Sem Obstáculos, pode alterar seu texto, para criar portais que conectam o caminho percorrido por você, onde os seres podem atravessar pelo portal até o final do Turno de Equipe." },
        hab2: { nome: "Portal Tático", desc: "Pode usar uma vez em seu turno de equipe um uso da Maji Sem Obstáculos, para teleportar um ataque que use um projétil, como flechas e disparos de Maji a distância, efetivamente aumentando o seu alcance.", req: "Agilidade X" },
        hab3: { nome: "Rede de Portais", desc: "A sua Maji Teleporte, agora pode ter até 5 pergaminhos conectados a ele. Ao entrar ou enviar algo, deve escolher para qual deles será teleportado.", req: "Inteligência X" },
        hab4: { nome: "Salto de Coordenação", desc: "Seu profundo conhecimento sobre a manipulação das moléculas e disposição física permite otimizar seus próximos movimentos. Sempre que gastar um uso da Maji Sem Obstáculos, você ganha uma ação extra.", req: "Agilidade X/Inteligência X" }
    },
    "yastrev": {
        bonus: "Força",
        armas: "Espada ou Lança", traje: "Traje de Malha ou Couro", riqueza: "3",
        maji: "Maji Base de Fala, Uma Maji de Fala, Três Maji",
        hab1: { nome: "Golpe Unico", desc: "Ao realizar um ataque desarmado com sucesso, pode gastar ações restantes para dar +1d6-dano por ação gasta." },
        hab2: { nome: "Estrangular", desc: "Enquanto está imobilizando um alvo, pode gastar 1 Ação e causar 2d6-dano que o alvo não pode reduzir e o bloqueia de usar Maji de Fala nessa rodada.", req: "Força X" },
        hab3: { nome: "Historico Problematico", desc: "Realize um teste oposto de Carisma contra um alvo, se tiver sucesso o alvo recebe Medo 1, se retirar o dobro do resultado do alvo, se torna Medo 2.", req: "Carisma X" },
        hab4: { nome: "Velocidade de Rapina", desc: "Os insetos tentam fugir. Pode gastar 2 Ações para se mover em 3-alcances.", req: "Agilidade X" }
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