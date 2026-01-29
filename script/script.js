// ==================================================================================
// ARQUIVO: script.js
// 
// Descrição: Lógica principal da ficha de Majikai
// ==================================================================================

const STORAGE_KEY = "maji_ficha_build2";

// Variável para armazenar os bônus da guilda (Array)
let atributoBonusGuilda = []; 

let proficiencias = {
    "Reflexos": 0, 
    "Luta": 0,     
    "Físico": 0,   
    "Sentidos": 0,
    "Carisma": 0,
    "Estudos": 0
};

let atributos = {
    "Reflexos": 0,
    "Luta": 0,
    "Físico": 0,
    "Sentidos": 0,
    "Carisma": 0,
    "Estudos": 0
};

const idMap = {
    "Reflexos": "valReflexos",
    "Luta": "valLuta",
    "Físico": "valFisico", 
    "Sentidos": "valSentidos",
    "Carisma": "valCarisma",
    "Estudos": "valEstudos"
};

const MIN_ATRIBUTO = 0;
const MAX_ATRIBUTO = 5;

function setProficiencia(atributo, nivel) {
    if (proficiencias[atributo] === nivel) {
        proficiencias[atributo] = 0;
    } else {
        proficiencias[atributo] = nivel;
    }

    atualizarVisualProficiencia();

    if (atributo === "Físico") {
        calcularVida();
    }

    salvarDados();
}

function atualizarVisualProficiencia() {
    for (const [attr, nivelAtual] of Object.entries(proficiencias)) {
        for (let i = 1; i <= 4; i++) {
            const pip = document.getElementById(`pip_${attr}_${i}`);
            if (pip) {
                if (i <= nivelAtual) {
                    pip.classList.add("active");
                } else {
                    pip.classList.remove("active");
                }
            }
        }
    }
    
    // 2. Atualiza lista de bônus textual
    if (typeof atualizarListaBonus === "function") {
        atualizarListaBonus();
    }
}

function atualizarListaBonus() {
    const lista = document.getElementById("listaBonusProficiencia");
    if (!lista) return;

    lista.innerHTML = "";
    let temBonus = false;

    if (typeof regrasProficiencia !== 'undefined') {
        for (const [attr, nivel] of Object.entries(proficiencias)) {
            if (nivel > 0 && regrasProficiencia[attr]) {
                for (let i = 1; i <= nivel; i++) {
                    if (regrasProficiencia[attr][i]) {
                        const item = document.createElement("li");
                        item.style.marginBottom = "4px";
                        item.innerHTML = `<strong>${attr} ${i}:</strong> ${regrasProficiencia[attr][i]}`;
                        lista.appendChild(item);
                        temBonus = true;
                    }
                }
            }
        }
    }

    if (!temBonus) {
        lista.innerHTML = '<li style="font-style: italic; color: #888;">Nenhuma proficiência dominada.</li>';
    }
}

// --- FUNÇÕES DE INTERFACE ---

function setStatusHabilidade(id, ativa) {
    const checkbox = document.getElementById("checkHab" + id);
    const texto = document.getElementById("statusHab" + id);
    const card = document.getElementById("cardHab" + id);

    if (checkbox) checkbox.checked = ativa;

    if (texto && card) {
        if (ativa) {
            texto.innerText = "APRENDIDA";
            texto.classList.add("ativo");
            card.classList.add("aprendida");
        } else {
            texto.innerText = "Não Aprendida";
            texto.classList.remove("ativo");
            card.classList.remove("aprendida");
        }
    }
}

function toggleStatus(id) {
    const checkbox = document.getElementById("checkHab" + id);
    if (!checkbox) return;
    setStatusHabilidade(id, checkbox.checked);
    salvarDados();
}

function gerarSlotsEquipamento(containerId, slots, banco, prefixo) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = "";

    if (!slots || slots.length === 0) return;

    slots.forEach((slot, index) => {
        const wrapper = document.createElement("div");
        wrapper.className = "equip-area";

        const label = document.createElement("label");
        label.innerText = slot.label + ":";
        wrapper.appendChild(label);

        const select = document.createElement("select");
        select.className = "equip-select";
        select.id = `dyn_${prefixo}_${index}`;

        const defaultOpt = document.createElement("option");
        defaultOpt.value = "";
        defaultOpt.text = "- Selecione -";
        select.add(defaultOpt);

        for (const [key, item] of Object.entries(banco)) {
            let permitido = false;
            
            if (slot.item) {
                permitido = (slot.item === key);
            }
            else if (slot.filtros) {
                if (slot.modo === "E") {
                    permitido = slot.filtros.every(f => item.tags.includes(f));
                } else {
                    permitido = item.tags.some(f => slot.filtros.includes(f));
                }
            }

            if (permitido) {
                let opt = document.createElement("option");
                opt.value = key;
                opt.text = item.nome;
                select.add(opt);
            }
        }

        select.addEventListener('change', function () {
            atualizarDetalheDinâmico(this, banco);
            salvarDados();
        });

        wrapper.appendChild(select);

        const detailsDiv = document.createElement("div");
        detailsDiv.className = "item-stats";
        detailsDiv.id = `det_${prefixo}_${index}`;
        wrapper.appendChild(detailsDiv);

        container.appendChild(wrapper);
    });
}

function atualizarDetalheDinâmico(selectElement, banco) {
    const key = selectElement.value;
    const detailId = selectElement.id.replace('dyn_', 'det_');
    const div = document.getElementById(detailId);

    if (key && banco[key]) {
        const i = banco[key];
        let info = "";
        
        if (i.dano !== undefined || (i.tags && i.tags.includes("escudo"))) {
            if (i.tags && i.tags.includes("escudo")) {
                info = `<strong>Def:</strong> ${i.def || 0} | <strong>Dano:</strong> ${i.dano || "-"}`;
            } else {
                info = `<strong>Dano:</strong> ${i.dano} | <strong>Alc:</strong> ${i.alcance || "0"} | <strong>Tipo:</strong> ${i.tipo || "-"}`;
            }
        } else {
            info = `<strong>Def:</strong> ${i.defesa || 0} | <strong>Pen:</strong> ${i.pen || 0}`;
        }
        
        let extras = i.esp ? i.esp : (i.especial ? i.especial : "");
        div.innerHTML = `${info}<br><em>${extras}</em>`;
    } else {
        div.innerText = "";
    }
}

function atualizarFicha(isLoading = false) {
    for (let i = 2; i <= 4; i++) {
        setStatusHabilidade(i, false);
    }

    const guildaSelect = document.getElementById("selectGuilda");
    const guildaSelecionada = guildaSelect.value;
    const textoBonus = document.getElementById("textoBonusAtributo");

    atributos = { "Reflexos": 0, "Luta": 0, "Físico": 0, "Sentidos": 0, "Carisma": 0, "Estudos": 0 };

    if (dadosGuildas[guildaSelecionada]) {
        const g = dadosGuildas[guildaSelecionada];

        let rawBonus = Array.isArray(g.bonus) ? g.bonus : [g.bonus];
        
        atributoBonusGuilda = rawBonus.map(b => {
            if(b === "Agilidade") return "Reflexos";
            if(b === "Força") return "Luta";
            if(b === "Vigor") return "Físico";
            return b;
        });

        textoBonus.innerText = `Bônus: +1 ${atributoBonusGuilda.join(", +1 ")}`;
        textoBonus.style.color = "#d00";

        if(document.getElementById("majiInicial")) document.getElementById("majiInicial").value = g.maji;
        if(document.getElementById("riquezaGrupo")) document.getElementById("riquezaGrupo").value = g.riqueza;

        gerarSlotsEquipamento("containerArmas", g.slotsArmas, bancoItens.armas, "arma");
        if(g.slotsOutros) {
             gerarSlotsEquipamento("containerArmas", g.slotsOutros, bancoItens.itens, "outros");
        }
        gerarSlotsEquipamento("containerTrajes", g.slotsTraje, bancoItens.trajes, "traje");

        if(document.getElementById("habNome1")) document.getElementById("habNome1").value = g.hab1.nome;
        if(document.getElementById("habDesc1")) document.getElementById("habDesc1").innerText = g.hab1.desc;

        for (let i = 2; i <= 4; i++) {
            let hab = g["hab" + i];
            if(document.getElementById("habNome" + i)) document.getElementById("habNome" + i).value = hab ? hab.nome : "";
            if(document.getElementById("habDesc" + i)) document.getElementById("habDesc" + i).innerText = hab ? hab.desc : "";
            
            if(document.getElementById("habReq" + i)) {
                let reqTexto = hab ? (hab.req || "--") : "--";
                reqTexto = reqTexto.replace(/Agilidade/g, "Reflexos")
                                   .replace(/Força/g, "Luta")
                                   .replace(/Vigor/g, "Físico");
                document.getElementById("habReq" + i).innerText = reqTexto;
            }
        }
        
        gerarSlotsMaji(g);

    } else {
        atributoBonusGuilda = [];
        textoBonus.innerText = "Bônus: Nenhum";
        textoBonus.style.color = "#483D8B";
        // ... (limpeza de campos igual anterior)
    }

    for (const key in idMap) {
        if(document.getElementById(idMap[key])) {
            document.getElementById(idMap[key]).innerText = getValorFinalAtributo(key);
        }
    }

    calcularVida();
    if (!isLoading) salvarDados();
}

function calcularVida() {
    const nivelFisico = proficiencias["Físico"] || 0;
    const display = document.getElementById("displayVida");
    if (!display) return;

    let vidaTexto = "10 | 20 | 30"; // Base (Nível 0)

    if (nivelFisico == 1) vidaTexto = "20 | 40 | 60";
    else if (nivelFisico == 2) vidaTexto = "30 | 60 | 90";
    else if (nivelFisico == 3) vidaTexto = "40 | 80 | 120";
    else if (nivelFisico >= 4) vidaTexto = "50 | 100 | 150";

    display.innerText = vidaTexto;
}

function getValorFinalAtributo(nome) {
    let valor = atributos[nome];
    if (atributoBonusGuilda.includes(nome)) {
        valor += 1;
    }
    return valor;
}

function alterarAtributo(nome, delta) {
    // Calcula o novo valor BASE proposto
    let novoValorBase = atributos[nome] + delta;

    // Verifica se esse atributo tem bônus atualmente
    let temBonus = atributoBonusGuilda.includes(nome);
    let bonusValor = temBonus ? 1 : 0;

    // Calcula qual seria o valor FINAL (Base + Bônus)
    let valorFinalPotencial = novoValorBase + bonusValor;

    // REGRAS DE LIMITE:
    // 1. O valor base nunca pode ser menor que 1
    if (novoValorBase < 0) return;

    // 2. O valor FINAL (somado ao bônus) não pode passar de 5
    if (valorFinalPotencial > 5) return;

    // Se passou nas regras, aplica a mudança
    atributos[nome] = novoValorBase;

    // Atualiza a interface
    if (document.getElementById(idMap[nome])) {
        document.getElementById(idMap[nome]).innerText = getValorFinalAtributo(nome);
    }

    // Se mexeu no Físico, recalcula a vida
    if (nome === "Físico") {
        calcularVida();
    }

    salvarDados();
}

// ... (Funções gerarSlotsMaji, atualizarDetalheMaji, imprimirPDF iguais ao anterior) ...
// Adicionei apenas a lógica de conversão nos carregamentos abaixo

// ==================================================================================
// PERSISTÊNCIA E MIGRAÇÃO
// ==================================================================================

function salvarDados() {
    const dados = {
        nome: document.getElementById("nomeChar").value,
        sobrenome: document.getElementById("sobrenomeChar").value,
        guilda: document.getElementById("selectGuilda").value,
        proficiencias: proficiencias,
        atributos: atributos,
        hab2: document.getElementById("checkHab2") ? document.getElementById("checkHab2").checked : false,
        hab3: document.getElementById("checkHab3") ? document.getElementById("checkHab3").checked : false,
        hab4: document.getElementById("checkHab4") ? document.getElementById("checkHab4").checked : false,
        equipamentos: {},
        anotacoes: document.getElementById("armasGrupo") ? document.getElementById("armasGrupo").value : ""
    };

    const selects = document.querySelectorAll('select[id^="dyn_"]');
    selects.forEach(sel => {
        dados.equipamentos[sel.id] = sel.value;
    });

    localStorage.setItem(STORAGE_KEY, JSON.stringify(dados));
}

function migrarDadosAntigos(dados) {
    // Migração de Atributos
    if (dados.atributos) {
        if (dados.atributos["Agilidade"] !== undefined) {
            dados.atributos["Reflexos"] = dados.atributos["Agilidade"];
            delete dados.atributos["Agilidade"];
        }
        if (dados.atributos["Força"] !== undefined) {
            dados.atributos["Luta"] = dados.atributos["Força"];
            delete dados.atributos["Força"];
        }
        if (dados.atributos["Vigor"] !== undefined) {
            dados.atributos["Físico"] = dados.atributos["Vigor"];
            delete dados.atributos["Vigor"];
        }
    }

    // Migração de Proficiências
    if (dados.proficiencias) {
        if (dados.proficiencias["Agilidade"] !== undefined) {
            dados.proficiencias["Reflexos"] = dados.proficiencias["Agilidade"];
            delete dados.proficiencias["Agilidade"];
        }
        if (dados.proficiencias["Força"] !== undefined) {
            dados.proficiencias["Luta"] = dados.proficiencias["Força"];
            delete dados.proficiencias["Força"];
        }
        if (dados.proficiencias["Vigor"] !== undefined) {
            dados.proficiencias["Físico"] = dados.proficiencias["Vigor"];
            delete dados.proficiencias["Vigor"];
        }
    }
    return dados;
}

function carregarDados() {
    const json = localStorage.getItem(STORAGE_KEY);
    if (!json) return;
    
    let dados = JSON.parse(json);
    dados = migrarDadosAntigos(dados);
    aplicarDadosNaTela(dados);
}

function subirFicha(input) {
    const file = input.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (e) {
        try {
            const json = e.target.result;
            let dados = JSON.parse(json);
            dados = migrarDadosAntigos(dados);
            aplicarDadosNaTela(dados);
        } catch (err) {
            alert("Erro ao ler o arquivo JSON.");
            console.error(err);
        }
    };
    reader.readAsText(file);
}

function aplicarDadosNaTela(dados) {
    if (dados.nome) document.getElementById("nomeChar").value = dados.nome;
    if (dados.sobrenome) document.getElementById("sobrenomeChar").value = dados.sobrenome;

    if (dados.guilda) {
        document.getElementById("selectGuilda").value = dados.guilda;
        atualizarFicha(true);
    }

    if (dados.atributos) {
        atributos = dados.atributos;
        // Garante que chaves faltantes (novas) existam com valor 1
        if(!atributos["Reflexos"]) atributos["Reflexos"] = 1;
        if(!atributos["Luta"]) atributos["Luta"] = 1;
        if(!atributos["Físico"]) atributos["Físico"] = 1;

        for (const key in idMap) {
            if(document.getElementById(idMap[key])) {
                document.getElementById(idMap[key]).innerText = getValorFinalAtributo(key);
            }
        }
    }

    if (dados.proficiencias) {
        proficiencias = dados.proficiencias;
        // Garante que chaves faltantes existam com valor 0
        if(!proficiencias["Reflexos"]) proficiencias["Reflexos"] = 0;
        if(!proficiencias["Luta"]) proficiencias["Luta"] = 0;
        if(!proficiencias["Físico"]) proficiencias["Físico"] = 0;
        
        atualizarVisualProficiencia();
        calcularVida();
    }

    if (dados.equipamentos) {
        for (const [id, valor] of Object.entries(dados.equipamentos)) {
            const el = document.getElementById(id);
            if (el) {
                el.value = valor;
                 if (typeof bancoItens !== 'undefined') {
                    if (id.includes("arma") || id.includes("outros")) atualizarDetalheDinâmico(el, bancoItens.armas || bancoItens.itens);
                    if (id.includes("traje")) atualizarDetalheDinâmico(el, bancoItens.trajes);
                 }
                 if (id.includes("maji")) atualizarDetalheMaji(el);
            }
        }
    }
}

document.addEventListener("DOMContentLoaded", () => {
    carregarDados();
    atualizarVisualProficiencia();
    
    const inputs = document.querySelectorAll("input[type='text'], textarea");
    inputs.forEach(inp => inp.addEventListener("input", salvarDados));
});

function gerarSlotsMaji(guilda) {
    const container = document.getElementById("containerMajis");
    if(!container) return; 
    container.innerHTML = ""; 
    const numSlots = 4; 
    for (let i = 0; i < numSlots; i++) {
        const wrapper = document.createElement("div");
        wrapper.className = "equip-area";
        const label = document.createElement("label");
        label.innerText = `Maji ${i + 1}:`;
        wrapper.appendChild(label);
        const select = document.createElement("select");
        select.className = "equip-select";
        select.id = `dyn_maji_${i}`;
        const defaultOpt = document.createElement("option");
        defaultOpt.value = "";
        defaultOpt.text = "- Selecione -";
        select.add(defaultOpt);
        let permiteMagia = true;
        if (guilda && guilda.filtrosMaji && guilda.filtrosMaji.length === 0) permiteMagia = false;
        if (permiteMagia && typeof bancoMajis !== 'undefined') {
            const formas = ["base", "fala", "sinal", "escrita"];
            formas.forEach(formaKey => {
                if (bancoMajis[formaKey]) {
                    const group = document.createElement("optgroup");
                    group.label = formaKey.toUpperCase();
                    for (const [key, magia] of Object.entries(bancoMajis[formaKey])) {
                        const opt = document.createElement("option");
                        opt.value = key;
                        opt.text = magia.nome;
                        group.appendChild(opt);
                    }
                    select.add(group);
                }
            });
        } else {
            const opt = document.createElement("option");
            opt.text = "Nenhuma Maji disponível";
            select.add(opt);
            select.disabled = true;
        }
        select.addEventListener('change', function() { atualizarDetalheMaji(this); salvarDados(); });
        wrapper.appendChild(select);
        const detailsDiv = document.createElement("div");
        detailsDiv.className = "item-stats";
        detailsDiv.id = `det_maji_${i}`;
        wrapper.appendChild(detailsDiv);
        container.appendChild(wrapper);
    }
}

function atualizarDetalheMaji(selectElement) {
    const key = selectElement.value;
    const detailId = selectElement.id.replace('dyn_', 'det_');
    const div = document.getElementById(detailId);
    if (typeof bancoMajis === 'undefined') return;
    let magiaEncontrada = null;
    for (const cat in bancoMajis) {
        if (bancoMajis[cat][key]) {
            magiaEncontrada = bancoMajis[cat][key];
            break;
        }
    }
    if (magiaEncontrada) {
        div.innerHTML = `<strong>Custo:</strong> ${magiaEncontrada.custo} | <strong>Forma:</strong> ${magiaEncontrada.forma} <br> <strong>Tipo:</strong> ${magiaEncontrada.tipo} (${magiaEncontrada.subtipo})<br><em>${magiaEncontrada.desc}</em>`;
    } else {
        div.innerText = "";
    }
}

function baixarFicha() {
    salvarDados();
    const json = localStorage.getItem(STORAGE_KEY);
    if (!json) return;
    const dados = JSON.parse(json);
    const jsonStr = JSON.stringify(dados, null, 2);
    const blob = new Blob([jsonStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", url);
    const nomePersonagem = dados.nome || "Maji";
    downloadAnchorNode.setAttribute("download", `Ficha_${nomePersonagem}.json`);
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
    URL.revokeObjectURL(url);
}