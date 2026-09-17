const perguntas = [
    {
        palavra: "NONADA",
        opcoes: [
            "A) Uma grande confusão",
            "B) Coisa sem importância / nada",
            "C) Uma pessoa muito inteligente"
        ],
        correta: 1
    },

    {
        palavra: "SABENÇA",
        opcoes: [
            "A) Conhecimento ou sabedoria",
            "B) Uma dança típica",
            "C) Uma discussão"
        ],
        correta: 0
    },

    {
        palavra: "ENSIMESMADO",
        opcoes: [
            "A) Muito animado e comunicativo",
            "B) Concentrado em seus próprios pensamentos",
            "C) Extremamente corajoso"
        ],
        correta: 1
    },

    {
        palavra: "VEREDA",
        opcoes: [
            "A) Um caminho ou trilha",
            "B) Uma ferramenta de trabalho",
            "C) Uma festa sertaneja"
        ],
        correta: 0
    }
];

let perguntaAtual = 0;
let pontos = 0;

function responder(respostaEscolhida) {
    const pergunta = perguntas[perguntaAtual];
    const resultado = document.getElementById("resultado");
    if (respostaEscolhida === pergunta.correta) {
        resultado.textContent = "✓ ACERTOU!";
        pontos++;
    } else {
        resultado.textContent = "✕ NÃO FOI DESSA VEZ.";
    }
    document.getElementById("pontos").textContent = pontos;
    document.getElementById("proxima").style.display = "block";
}

function proximaPergunta() {
    perguntaAtual++;
    if (perguntaAtual < perguntas.length) {
        document.getElementById("proxima").style.display = "none";
        mostrarPergunta();
    }
    else {
        document.getElementById("palavra").textContent = "FIM!";
        document.getElementById("pergunta").textContent =
            "Você terminou o desafio!";
        document.getElementById("resultado").textContent =
            "Você acertou " + pontos + " de " + perguntas.length + " palavras.";
        document.querySelector(".opcoes").style.display = "none";
        document.getElementById("proxima").style.display = "none";
    }
}

function mostrarPergunta() {
    const pergunta = perguntas[perguntaAtual];
    document.getElementById("palavra").textContent = pergunta.palavra;
    document.getElementById("pergunta").textContent =
        "O que essa palavra significa?";
    document.getElementById("opcao0").textContent = pergunta.opcoes[0];
    document.getElementById("opcao1").textContent = pergunta.opcoes[1];
    document.getElementById("opcao2").textContent = pergunta.opcoes[2];
    document.getElementById("resultado").textContent = "";
}

document.getElementById("opcao0").onclick = function() {
    responder(0);
};
document.getElementById("opcao1").onclick = function() {
    responder(1);
};
document.getElementById("opcao2").onclick = function() {
    responder(2);
};
const elementosAnimados =
    document.querySelectorAll(".animar");
const observador =
    new IntersectionObserver((entradas) => {
        entradas.forEach((entrada) => {
            if (entrada.isIntersecting) {
                entrada.target.classList.add("ativo");
            }
        });
    }, {
        threshold: 0.2
    });

elementosAnimados.forEach((elemento) => {
    observador.observe(elemento);
});
mostrarPergunta();

function iniciarApresentacao() {
    document.getElementById("quem-foi").scrollIntoView({
        behavior: "smooth"
    });
}