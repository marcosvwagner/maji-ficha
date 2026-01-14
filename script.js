
// ==================================================================================
// ARQUIVO: script.js
// Lógica Completa: Proficiências, Slots Dinâmicos e Persistência
// ==================================================================================

const STORAGE_KEY = "maji_ficha_v1";

// Estado Global das Proficiências (0 = Nenhuma)
let proficiencias = {
    "Agilidade": 0,
    "Força": 0,
    "Vigor": 0,
    "Astúcia": 0,
    "Carisma": 0,
    "Inteligência": 0
};

// --- FUNÇÃO CORE: SETAR PROFICIÊNCIA ---
function setProficiencia(atributo, nivel) {
    // Se clicar no nível que já está, zera (toggle)
    if (proficiencias[atributo] === nivel) {
        proficiencias[atributo] = 0;
    } else {
        proficiencias[atributo] = nivel;
    }

    atualizarVisualProficiencia();
    
    // Se mudou Vigor, recalcula vida imediatamente
    if (atributo === "Vigor") {
        calcularVida();
    }
    
    salvarDados();
}

function atualizarVisualProficiencia() {
    // 1. Pinta os losangos
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
    // 2. Atualiza a lista de textos de bônus
    atualizarListaBonus();
}

function atualizarListaBonus() {
    const lista = document.getElementById("listaBonusProficiencia");
    if (!lista) return; // Segurança caso o HTML não tenha sido atualizado ainda
    
    lista.innerHTML = ""; // Limpa a lista atual
    let temBonus = false;

    // Percorre todos os atributos que o jogador tem
    for (const [attr, nivel] of Object.entries(proficiencias)) {
        if (nivel > 0 && typeof regrasProficiencia !== 'undefined' && regrasProficiencia[attr]) {
            // Mostra todos os níveis acumulados até o nível atual
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

    if (!temBonus) {
        lista.innerHTML = '<li style="font-style: italic; color: #888;">Nenhuma proficiência dominada.</li>';
    }
}

// --- FUNÇÕES DE INTERFACE ---

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
    salvarDados(); 
}

function gerarSlotsEquipamento(containerId, slots, banco, prefixo) {
    const container = document.getElementById(containerId);
    container.innerHTML = ""; 

    if (!slots || slots.length === 0) {
        return;
    }

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
        
        select.addEventListener('change', function() {
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
        div.innerHTML = `${info}<br><em>${extras}</em>`;
    } else {
        div.innerText = "";
    }
}

function atualizarFicha(isLoading = false) {
    const guildaSelect = document.getElementById("selectGuilda");
    const guildaSelecionada = guildaSelect.value;
    const textoBonus = document.getElementById("textoBonusAtributo");
    
    if (!isLoading) {
        for(let i=2; i<=4; i++){
            document.getElementById("checkHab" + i).checked = false;
            toggleStatus(i);
        }
    }

    let stats = { "Agilidade": 1, "Força": 1, "Vigor": 1, "Astúcia": 1, "Carisma": 1, "Inteligência": 1 };

    if (dadosGuildas[guildaSelecionada]) {
        const g = dadosGuildas[guildaSelecionada];
        
        if(stats[g.bonus] !== undefined) stats[g.bonus] += 1;
        textoBonus.innerText = `Bônus: +1 ${g.bonus}`;
        textoBonus.style.color = "#d00";

        document.getElementById("majiInicial").value = g.maji;
        document.getElementById("riquezaGrupo").value = g.riqueza;

        gerarSlotsEquipamento("containerArmas", g.slotsArmas, bancoItens.armas, "arma");
        gerarSlotsEquipamento("containerTrajes", g.slotsTraje, bancoItens.trajes, "traje");

        document.getElementById("habNome1").value = g.hab1.nome;
        document.getElementById("habDesc1").innerText = g.hab1.desc;

        for (let i = 2; i <= 4; i++) {
            let hab = g["hab"+i];
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
    
    // Calcula vida baseado na proficiência global
    calcularVida();
    if (!isLoading) salvarDados();
}

function calcularVida() {
    // Pega o nível de Vigor do objeto global proficiencias
    const nivelVigor = proficiencias["Vigor"] || 0;
    const display = document.getElementById("displayVida");
    let vidaTexto = "10 | 20 | 30"; 
    
    if (nivelVigor == 1) vidaTexto = "20 | 40 | 60";
    else if (nivelVigor == 2) vidaTexto = "30 | 60 | 90";
    else if (nivelVigor == 3) vidaTexto = "40 | 80 | 120";
    else if (nivelVigor >= 4) vidaTexto = "50 | 100 | 150";

    display.innerText = vidaTexto;
}

function imprimirPDF() {
    const nome = document.getElementById("nomeChar").value || "Personagem";
    const tituloOriginal = document.title;
    document.title = "Ficha_" + nome;
    window.print();
    document.title = tituloOriginal;
}

// ==================================================================================
// PERSISTÊNCIA E ARQUIVO
// ==================================================================================

function salvarDados() {
    const dados = {
        nome: document.getElementById("nomeChar").value,
        sobrenome: document.getElementById("sobrenomeChar").value,
        guilda: document.getElementById("selectGuilda").value,
        
        // Salva o objeto completo de proficiências
        proficiencias: proficiencias,
        
        hab2: document.getElementById("checkHab2").checked,
        hab3: document.getElementById("checkHab3").checked,
        hab4: document.getElementById("checkHab4").checked,
        equipamentos: {},
        anotacoes: document.getElementById("armasGrupo") ? document.getElementById("armasGrupo").value : ""
    };

    const selects = document.querySelectorAll('select[id^="dyn_"]');
    selects.forEach(sel => {
        dados.equipamentos[sel.id] = sel.value;
    });

    localStorage.setItem(STORAGE_KEY, JSON.stringify(dados));
}

function baixarFicha() {
    const dados = {
        nome: document.getElementById("nomeChar").value,
        sobrenome: document.getElementById("sobrenomeChar").value,
        guilda: document.getElementById("selectGuilda").value,
        proficiencias: proficiencias,
        hab2: document.getElementById("checkHab2").checked,
        hab3: document.getElementById("checkHab3").checked,
        hab4: document.getElementById("checkHab4").checked,
        equipamentos: {},
        anotacoes: document.getElementById("armasGrupo") ? document.getElementById("armasGrupo").value : ""
    };

    const selects = document.querySelectorAll('select[id^="dyn_"]');
    selects.forEach(sel => {
        dados.equipamentos[sel.id] = sel.value;
    });

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

function subirFicha(input) {
    const file = input.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const json = e.target.result;
            const dados = JSON.parse(json);
            aplicarDadosNaTela(dados);
            alert("Ficha carregada com sucesso!");
        } catch (err) {
            alert("Erro ao ler o arquivo.");
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

    // Restaura Proficiências e atualiza visual
    if (dados.proficiencias) {
        proficiencias = dados.proficiencias;
        atualizarVisualProficiencia();
        calcularVida();
    }

    if (dados.hab2) { document.getElementById("checkHab2").checked = true; toggleStatus(2); }
    if (dados.hab3) { document.getElementById("checkHab3").checked = true; toggleStatus(3); }
    if (dados.hab4) { document.getElementById("checkHab4").checked = true; toggleStatus(4); }

    if (dados.anotacoes && document.getElementById("armasGrupo")) {
        document.getElementById("armasGrupo").value = dados.anotacoes;
    }

    if (dados.equipamentos) {
        for (const [id, valor] of Object.entries(dados.equipamentos)) {
            const el = document.getElementById(id);
            if (el) {
                el.value = valor;
                if(id.includes("arma")) atualizarDetalheDinâmico(el, bancoItens.armas);
                if(id.includes("traje")) atualizarDetalheDinâmico(el, bancoItens.trajes);
            }
        }
    }
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(dados));
}

function carregarDados() {
    const json = localStorage.getItem(STORAGE_KEY);
    if (!json) return;
    const dados = JSON.parse(json);
    aplicarDadosNaTela(dados); 
}

// Inicialização
document.addEventListener("DOMContentLoaded", () => {
    carregarDados();
    // Garante que os losangos comecem corretos (mesmo se vazio)
    atualizarVisualProficiencia();
    
    const inputs = document.querySelectorAll("input[type='text'], textarea");
    inputs.forEach(inp => inp.addEventListener("input", salvarDados));
});