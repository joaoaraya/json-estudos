let jArray =
`[{
    "jogos_favoritos": ["sonic the hedgehog", "crash bandicoot", "burnout dominator"]
}]`;

let JObject =
`[{
    "jogos": 
    {
        "favoritos": 
        [{
            "nome": "sonic the hedgehog",
            "ano": 1991,
            "multiplayer": false,
            "plataforma": ["sega genesis","sega master system"] 
        }, 
        {
            "nome": "crash bandicoot",
            "ano": 1996,
            "multiplayer": false,
            "plataforma" : "play station"
        },
        {
            "nome": "burnout dominator",
            "ano": 2007,
            "multiplayer": true,
            "plataforma": ["play station 2", "psp"]
        }]
    }
}]`;

// Mostrar tudo
console.log(JSON.parse(jArray), JSON.parse(JObject));

// Navegação aprofundada
let JO = JSON.parse(JObject);
//
// Exemplos:
//
// Qual o nome do primeiro jogo favorito?
console.log(JO[0].jogos.favoritos[0].nome);
// Qual as plataformas do ultimo jogo favorito?
console.log(JO[0].jogos.favoritos[2].plataforma);
// qual o ano do jogo do meio?
console.log(JO[0].jogos.favoritos[1].ano);