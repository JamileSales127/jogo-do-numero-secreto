let listaNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = 5;
let tentativas = 1;
//forma reduzida
gerarNumeroAleatorio();
function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});
}
function exibirMensagemInicial(){
    exibirTextoNaTela('h1','Jogo do número secreto')
    exibirTextoNaTela('p','Escolha um número entre 1 e 10')
}
exibirMensagemInicial();
//criando funções
function verificarChute(){
    let chute = document.querySelector('input').value;
    if(chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativas = tentativas > 1 ? 'tentativas': 'tentativa';
        let mensagemTentativas = `Você descobriu o numero secreto com ${tentativas} ${palavraTentativas}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(chute < numeroSecreto){
            exibirTextoNaTela('p', `O número secreto é maior que ${chute}`);
        }else{
            exibirTextoNaTela('p', `O número secreto é menor que ${chute}`);
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementoNaLista= listaNumerosSorteados.length;
    if(quantidadeDeElementoNaLista == numeroLimite){
        listaNumerosSorteados=[];
    }

    //includes = verifica se o número está na lista
    if(listaNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();  
    }else{
        listaNumerosSorteados.push(numeroEscolhido); 
        console.log(listaNumerosSorteados);
        return numeroEscolhido;
    }
    //push = adiciona item ao final da lista
}
function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}
function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}
//LISTAS
// O PRIMEIRO ELEMENTO NA LISTA SEMPREE TERÁ INDICE ZERO
//LENGTH = MOSTRA A QUANTIDADE DE ELEMENTOS NA LISTA
//ÚLTIMO ELEMENTO NA LISTA = [frutas.length - 1] 
