

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

/**
 * Cria os selects dinamicamente baseado nos Slots da guilda
 */
function gerarSlotsEquipamento(containerId, slots, banco) {
    const container = document.getElementById(containerId);
    container.innerHTML = ""; // Limpa

    if (!slots || slots.length === 0) {
        container.innerHTML = "<p style='color:#777; font-style:italic;'>Nenhum equipamento.</p>";
        return;
    }

    slots.forEach((slot) => {
        // Wrapper da área
        const wrapper = document.createElement("div");
        wrapper.className = "equip-area";

        // Label
        const label = document.createElement("label");
        label.innerText = slot.label + ":";
        wrapper.appendChild(label);

        // Select
        const select = document.createElement("select");
        select.className = "equip-select";

        const defaultOpt = document.createElement("option");
        defaultOpt.value = "";
        defaultOpt.text = "- Selecione -";
        select.add(defaultOpt);

        // Popula filtrando
        for (const [key, item] of Object.entries(banco)) {
            let permitido = false;
            if (slot.item) {
                permitido = slot.item === key;
            }
            else {
                permitido = slot.modo === "E"
                    ? slot.filtros.every(filtro => item.tags.includes(filtro))
                    : slot.filtros.some(filtro => item.tags.includes(filtro));
            }

            if (permitido) {
                let opt = document.createElement("option");
                opt.value = key;
                opt.text = item.nome;
                select.add(opt);
            }
        }
        wrapper.appendChild(select);

        // Div de Detalhes
        const detailsDiv = document.createElement("div");
        detailsDiv.className = "item-stats";
        wrapper.appendChild(detailsDiv);

        // Evento de Change
        select.onchange = function () {
            const key = this.value;
            if (key && banco[key]) {
                const i = banco[key];
                let info = "";

                if (banco === bancoItens.armas) {
                    if (i.tags.includes("escudo")) {
                        info = `<strong>Def:</strong> ${i.def} | <strong>Dano:</strong> ${i.dano}`;
                    } else {
                        info = `<strong>Dano:</strong> ${i.dano} | <strong>Alc:</strong> ${i.alcance || "0"} | <strong>Tipo:</strong> ${i.tipo || "-"}`;
                    }
                } else {
                    info = `<strong>Def:</strong> ${i.defesa} | <strong>Pen:</strong> ${i.pen}`;
                }

                let extras = i.esp ? i.esp : (i.especial ? i.especial : "");
                detailsDiv.innerHTML = `${info}<br><em>${extras}</em>`;
            } else {
                detailsDiv.innerText = "";
            }
        };

        container.appendChild(wrapper);
    });
}

function atualizarFicha() {
    const guildaSelect = document.getElementById("selectGuilda");
    const guildaSelecionada = guildaSelect.value;
    const textoBonus = document.getElementById("textoBonusAtributo");

    // Reset Habilidades
    for (let i = 2; i <= 4; i++) {
        document.getElementById("checkHab" + i).checked = false;
        toggleStatus(i);
    }

    let stats = { "Agilidade": 1, "Força": 1, "Vigor": 1, "Astúcia": 1, "Carisma": 1, "Inteligência": 1 };

    if (dadosGuildas[guildaSelecionada]) {
        const g = dadosGuildas[guildaSelecionada];

        if (stats[g.bonus] !== undefined) stats[g.bonus] += 1;
        textoBonus.innerText = `Bônus: +1 ${g.bonus}`;
        textoBonus.style.color = "#d00";

        document.getElementById("majiInicial").value = g.maji;
        document.getElementById("riquezaGrupo").value = g.riqueza;

        // === GERAÇÃO DINÂMICA DE SLOTS ===
        gerarSlotsEquipamento("containerArmas", g.slotsArmas, bancoItens.armas);
        gerarSlotsEquipamento("containerTrajes", g.slotsTraje, bancoItens.trajes);

        // Preencher Habilidades
        document.getElementById("habNome1").value = g.hab1.nome;
        document.getElementById("habDesc1").innerText = g.hab1.desc;

        for (let i = 2; i <= 4; i++) {
            let hab = g["hab" + i];
            document.getElementById("habNome" + i).value = hab ? hab.nome : "";
            document.getElementById("habDesc" + i).innerText = hab ? hab.desc : "";
            document.getElementById("habReq" + i).innerText = hab ? (hab.req || "--") : "--";
        }

    } else {
        textoBonus.innerText = "Bônus: Nenhum";
        textoBonus.style.color = "#483D8B";

        document.getElementById("majiInicial").value = "";
        document.getElementById("riquezaGrupo").value = "";

        document.getElementById("containerArmas").innerHTML = "";
        document.getElementById("containerTrajes").innerHTML = "";

        for (let i = 1; i <= 4; i++) {
            document.getElementById("habNome" + i).value = "";
            document.getElementById("habDesc" + i).innerText = "";
            if (i > 1) document.getElementById("habReq" + i).innerText = "--";
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