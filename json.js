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

console.log(JSON.parse(jArray), JSON.parse(JObject));