const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
    enunciado: "em relação as queimadas no Brasil, o que vocẽ acha que deveria ser feito?",
        alternativas: [
            {
                texto: "as pessoas deveriam parar com as queimadas.",
                afirmacao: "As pessoas deveriam parar de prejudicar o planeta em que vivem, a começar pelas queimadas."
                afirmacao: "as árvores são uma das principais produtoras de oxigênio do planeta",
            },
            {
                texto: "o governo deveria tomar mais providẽncias para acabar com as queimadas",
                afirmacao: "O governo deveria promover uma campanha para a intervenção nas queimas das florestas."
                afirmacao: "aplicando multas e puniçôes severas para os que queimam florestas",
            }
        ]
    },
    {
        enunciado: "quais providências o Governo e as pessoas podem tomar, para que esse problema seja resolvido?",
        alternativas: [
            {
                texto: "Leis podem ser criadas e os cidadões podem ajudar a monitorar e descobrir quem começa as queimadas",
                afirmacao: "As leis criadas podem ser um ótimo começo para a restauração das florestas",
                afirmacao: "com as leis as pessoas acabam sendo forçadas a parar as queimas das florestas",
            }
            {
                texto: "o governo pode oferecer benefícios, para quem ajudar a combater e ajudar contra as queimadas.",
                afirmacao: "As pessoas podem receber recompensas em troca de favores para o governo, como a ajuda na intervenção das queimas nas florestas."
                afirmacao: "as recompensas seriam benefícios e vantagens públicas",
            }
        ]
    },
    {
        enunciado: "vocẽ está na sua casa e decide sair. Ao sair se depara com um vizinho seu jogando lixo na rua, o que vocẽ faz?",
        alternativas: [
            {
                texto: "vocẽ chega até a pessoa e a questiona.",
                afirmacao: "Você se importa com o ambiente em que você vive, e quer mante-lo o mais limpo possível",
                afirmacao: "você pode requesitar a meios como a denúncia anônima para crimes ambientais",
            },
            {
                texto: "vocẽ ignora e segue seu dia.",
                afirmacao: "Você prefere se manter calado e não ligar para o ato de seus vizinhos, e é por isso que o mundo está do jeito que está, por causa de pessoas como você."
                afirmacao: "ou você apenas nao gosta de gerar conflitos",
            }
        ]
    },
    {
        enunciado: "ao chegar no trabalho vocẽ se depara com uma noticia na TV sobre o aumento de descarte de lixo em lugares inapropriados. O que vocẽ faz?",
        alternativas: [
            {
                texto: "Vocẽ pensa que as pessoas poderiam intervir primeiro por conta própria.",
                afirmacao: "As pessoas pensando por conta própria, estariam agindo de forma consciente, se importando com o meio ambiente."
            },
            {
                texto: "Vocẽ pensa que o governo deveria intervir por conta própria e sem o acontecimento de protestos e coisas que forçem o governo a fazer tal.",
                afirmacao: "O governo poderia intervir nas queimadas e coisas que prejudiquem o meio ambiente, tornando a cidade, e eventualmente, o mundo, num lugar melhor."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Conclusão final...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

function BtnReiniciar() {
    
}

mostraPergunta();
