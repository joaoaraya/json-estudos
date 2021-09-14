let jArray =
`[{
    "Jogos_favoritos": ["sonic the hedgehog", "crash bandicoot", "burnout dominator"]
}]`;

let JObject =
`[{
    "Jogos": 
    {
        "classicos": 
        [{
            "nome": "sonic the hedgehog",
            "ano": 1991,
            "multiplayer": false,
            "plataforma": ["Sega Genesis","Sega Master System"] 
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