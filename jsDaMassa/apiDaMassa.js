// API utilizada - https://api.adviceslip.com

const url = "https://api.adviceslip.com/advice"

// de acordo com a API a resposta é um objeto que tem um objeto chamado slip, que por sua vez tem um id e um advice, que é o conselho dessa gastação.
const definirRequisicaoMarota = {}

// vamos fazer valer o pagamento da internet e requisitar essa bagaça
definirRequisicaoMarota.pegarOTalDoConselho = () => {
    return fetch(url)
            // quando esses cara responder, vamos transformar o json de resposta em um objeto
            .then((respostaPraVirarJson) => respostaPraVirarJson.json())
            // quando o objeto for convertido, vamos acessar esse slip aê que eles falam
            .then((respostaEmJson) => (respostaEmJson.slip))
            // e então capturar o bendito do conselho
            .then((benditoDoObjetoResposta) => benditoDoObjetoResposta.advice)
            // se faltar luz lá no servidor dos cara vai dá esse troço aê
            .catch((deuRuim) => console.error(deuRuim))
}

// módulozinho maroto pra puxar lá pelo outro arquivo
export const requisicaoMarota = definirRequisicaoMarota
