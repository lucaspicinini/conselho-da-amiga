// API utilizada - https://mymemory.translated.net/doc/spec.php
// Melhoria graças a sugestão do Tomás

// configs dos idiomas para tradução
let idiomaOrigem = "en"
let idiomaDestino = "pt-br"
const definindoApiDaTraducao = {}

definindoApiDaTraducao.pegarDadosTraducao = (conselhoEmIngles) => {
    // realizando a requisição para o endpoint da api de tradução,
    // mas passando o resultado da api que gera frases em inglês,
    // além dos idiomas configurados
    const url = `https://api.mymemory.translated.net/get?q=${conselhoEmIngles}&langpair=${idiomaOrigem}|${idiomaDestino}`
    
    return fetch(url)
            // segue o mesmo padrão da api de gerar conselhos - olhar arquivo apiDaMassa.js
            .then((respostaPraVirarJson) => respostaPraVirarJson.json())
            .then((benditoDoObjetoResposta) => benditoDoObjetoResposta.responseData)
            .then((dadosDaTraducao) => dadosDaTraducao.translatedText)
            .catch((deuRuim) => console.error(deuRuim))
}

// exporta o módulo
export const apiDaTraducao = definindoApiDaTraducao
