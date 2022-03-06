// import arrayDasTelasDoCapitulo from "./cap-1.js";

// COISAS EM SI
var text = document.getElementById("text");
var b1 = document.getElementById("b1");
var b2 = document.getElementById("b2");

var cena;
// OBJETOS QUE PREENCHEM AS COISAS
function criaConteudo(texto,opt1,opt2,a,b){
    const conteudo = {
        texto:texto,
        opt1:opt1,
        opt2:opt2,
        text(){
            text.innerText = conteudo.texto;
            b1.innerText = conteudo.opt1;
            b2.innerText = conteudo.opt2;
        },
        botao1(_a){
            mudaCena(arrayDasTelasDoCapitulo[a].cena);
        },
        botao2(_b){
            mudaCena(arrayDasTelasDoCapitulo[b].cena);
        } 
    }
    return conteudo;
}

// ARRAY DO CAPÍTULO
let arrayDasTelasDoCapitulo = [
    // texto, opção 1, opção 2, rota 1, rota 2
    {cena:criaConteudo('Hello World','Rawr','Dinkarkia',1,2)},
    {cena:criaConteudo('HAHAJS','auckauhda','uhavbsdv',0,2)},
    {cena:criaConteudo('33333333333','3333','3333333',1,3)},
    {cena:criaConteudo('How are you?','I\'m fine','It is the worst day ever!',0,4)},
    {cena:criaConteudo('Isso é apenas um texto','volte para o começo ;\'3','',0)},
];

// CLIQUES DOS BOTÔES
b1.addEventListener('click',()=>{
    cenaAtiva.botao1();
});
b2.addEventListener('click',()=>{
    cenaAtiva.botao2();
});

// FUNÇÃO DE TROCA DE CENAS
let cenaAtiva = [];

function mudaCena(novaCena){
    cenaAtiva = novaCena;
}

// FUNÇÃO PRINCIPAL DO JOGO
function update(){
    cenaAtiva.text();
    requestAnimationFrame(update);
}

// INICIO DO JOGO
mudaCena(arrayDasTelasDoCapitulo[0].cena);
update();