// importa o módulo
import { requisicaoMarota } from "./apiDaMassa.js";

// vamo tacar o texto nesse h1 ae
const falaPraEles = document.getElementById("textOutput")
// captura os botões lá ele
const botaoConselho = document.getElementById("botaoConselho")

// quando algum carente clicar para pedir o conselho, a gente passa a função conselhoDaAmiga()
botaoConselho.addEventListener("click", conselhoDaAmiga)

function conselhoDaAmiga() {

    // pega o conselho retornado pelo método lá do outro arquivo
    return requisicaoMarota.pegarOTalDoConselho()
    .then((oTalDoConselho) => {
        // taca na tela e torce pra vida dos amigo melhorar
        falaPraEles.innerHTML = oTalDoConselho
    })
}

const botaoNumQuero = document.getElementById("botaoNumQuero")
// parabenizando porque a pessoa é tão braba que não precisa de conselhos
botaoNumQuero.addEventListener("click", () => {
    falaPraEles.innerHTML = `Muito Chad, <span class="container__texto-azul">não tem jeito</span>!`
})
