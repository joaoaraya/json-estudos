let jArray =
`[{
    "Jogos_favoritos": ["sonic the hedgehog", "crash bandicoot", "burnout dominator"]
}]`;

let JObject =
`[{
    "Jogos": 
    {
        "Classicos": 
        [{
            "nome": "sonic the hedgehog",
            "ano": 1991,
            "multiplayer": false,
            "plataforma": ["sega","nintendo"] 
        }, 
        {
            "nome": "crash bandicoot",
            "ano": 1996,
            "multiplayer": false,
            "plataforma" : ["nintendo", "play station", "xbox"]
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