// importa os módulos
import { requisicaoMarota } from "./apiDaMassa.js";
import { apiDaTraducao } from "./apiQueTraduzPraAmiga.js";

// vamo tacar o texto nesse h1 ae
const falaPraEles = document.getElementById("textOutput")
// captura os botões lá ele
const botaoConselho = document.getElementById("botaoConselho")

// quando algum carente clicar para pedir o conselho, a gente passa a função conselhoDaAmiga()
botaoConselho.addEventListener("click", conselhoDaAmiga)

function conselhoDaAmiga() {
    // faz o mouse ficar em loading ao começar a requisição
    document.body.style.cursor = "progress"
    botaoConselho.style.cursor = "progress"

    // pega o retorno do módulo que gera os conselhos no arquivo apiDaMassa.js
    return requisicaoMarota.pegarOTalDoConselho()
    // passa o conselho gerado para o módulo de tradução, definido no arquivo apiQueTraduzPraAmiga.js
    .then((oTalDoConselho) => apiDaTraducao.pegarDadosTraducao(oTalDoConselho))
    .then((conselhoTraduzido) => {
        // taca na tela e torce pra vida dos amigo melhorar
        falaPraEles.innerHTML = conselhoTraduzido
        // da voz a nossa amiga, como visto nas aulas
        responsiveVoice.speak(conselhoTraduzido, "Brazilian Portuguese Female", {rate: 1.2})
        // retorna o mouse ao estado normal após o retorno da requisição
        document.body.style.cursor = "auto"
        botaoConselho.style.cursor = "pointer"
    })
    .catch((error) => console.error(error))
}

const botaoNumQuero = document.getElementById("botaoNumQuero")
// parabenizando porque a pessoa é tão braba que não precisa de conselhos
botaoNumQuero.addEventListener("click", () => {
    falaPraEles.innerHTML = `Muito Chad, <span class="container__texto-azul">não tem jeito</span>!`
})
