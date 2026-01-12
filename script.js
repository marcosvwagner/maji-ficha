// Salve como: script.js

function toggleStatus(id) {
    const checkbox = document.getElementById("checkHab" + id);
    const texto = document.getElementById("statusHab" + id);
    const card = document.getElementById("cardHab" + id);

    if (checkbox.checked) {
        texto.innerText = "APRENDIDA";
        texto.classList.add("ativo");
        card.classList.add("aprendida");
    } else {
        texto.innerText = "Não Aprendida";
        texto.classList.remove("ativo");
        card.classList.remove("aprendida");
    }
}

function atualizarFicha() {
    const guildaSelect = document.getElementById("selectGuilda");
    const guildaSelecionada = guildaSelect.value;
    const textoBonus = document.getElementById("textoBonusAtributo");
    
    // Reset checkboxes
    for(let i=2; i<=4; i++){
        document.getElementById("checkHab" + i).checked = false;
        toggleStatus(i);
    }

    let stats = { "Agilidade": 1, "Força": 1, "Vigor": 1, "Astúcia": 1, "Carisma": 1, "Inteligência": 1 };

    // O objeto 'dadosGuildas' vem do outro arquivo (dados.js)
    if (dadosGuildas[guildaSelecionada]) {
        const g = dadosGuildas[guildaSelecionada];
        if(stats[g.bonus] !== undefined) stats[g.bonus] += 1;
        
        textoBonus.innerText = `Bônus: +1 ${g.bonus}`;
        textoBonus.style.color = "#d00";

        document.getElementById("majiInicial").value = g.maji;
        document.getElementById("armasGrupo").value = g.armas;
        document.getElementById("trajeGrupo").value = g.traje;
        document.getElementById("riquezaGrupo").value = g.riqueza;

        document.getElementById("habNome1").value = g.hab1.nome;
        document.getElementById("habDesc1").innerText = g.hab1.desc;

        document.getElementById("habNome2").value = g.hab2.nome;
        document.getElementById("habDesc2").innerText = g.hab2.desc;
        document.getElementById("habReq2").innerText = (g.hab2.req || "--");

        document.getElementById("habNome3").value = g.hab3.nome;
        document.getElementById("habDesc3").innerText = g.hab3.desc;
        document.getElementById("habReq3").innerText = (g.hab3.req || "--");

        document.getElementById("habNome4").value = g.hab4.nome;
        document.getElementById("habDesc4").innerText = g.hab4.desc;
        document.getElementById("habReq4").innerText = (g.hab4.req || "--");
    } else {
        textoBonus.innerText = "Bônus: Nenhum";
        textoBonus.style.color = "#483D8B";
        
        document.getElementById("majiInicial").value = "";
        document.getElementById("armasGrupo").value = "";
        document.getElementById("trajeGrupo").value = "";
        document.getElementById("riquezaGrupo").value = "";
        
        for(let i=1; i<=4; i++){
            document.getElementById("habNome" + i).value = "";
            document.getElementById("habDesc" + i).innerText = "";
            if(i > 1) document.getElementById("habReq" + i).innerText = "--";
        }
    }

    document.getElementById("valAgilidade").innerText = stats["Agilidade"];
    document.getElementById("valForca").innerText = stats["Força"];
    document.getElementById("valVigor").innerText = stats["Vigor"];
    document.getElementById("valAstucia").innerText = stats["Astúcia"];
    document.getElementById("valCarisma").innerText = stats["Carisma"];
    document.getElementById("valInteligencia").innerText = stats["Inteligência"];
    
    calcularVida(); 
}

function calcularVida() {
    const prof = document.getElementById("profVigor").value;
    const display = document.getElementById("displayVida");
    let vidaTexto = "10 | 20 | 30"; 
    
    if (prof == "1") vidaTexto = "20 | 40 | 60";
    else if (prof == "2") vidaTexto = "30 | 60 | 90";
    else if (prof == "3") vidaTexto = "40 | 80 | 120";
    else if (prof == "4") vidaTexto = "50 | 100 | 150";

    display.innerText = vidaTexto;
}

function imprimirPDF() {
    const nome = document.getElementById("nomeChar").value || "Personagem";
    const tituloOriginal = document.title;
    document.title = "Ficha_" + nome;
    window.print();
    document.title = tituloOriginal;
}