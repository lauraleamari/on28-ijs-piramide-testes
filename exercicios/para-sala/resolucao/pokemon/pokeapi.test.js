const request = require("supertest");
const api = "https://pokeapi.co/api/v2"

describe('Testar endpoint da PokeApi', () => {
  // precisa do async pq requisição é assincrona, preciso esperar a resposta da requisição.
  test('deve retornar um personagem pokemon ao passar um id sem problemas', async () => {
    const response = await request(api).get('/pokemon/ditto');
    // qual formato que vai retornar
    // tenho que ver como pego, por exemplo o id baseado no nome
    expect(response.body.id).toBe(132)
    expect(response.status).toBe(200)
  })

  test('deve retornar um personagem ao passar o ID do pokemon sem problemas', async () => {
    const response = await request(api).get('/pokemon/96');
    expect(response.body.name).toBe('drowzee')
    expect(response.status).toBe(200)
  })

  test('deve retornar o peso de um personagem ao passar o ID do pokemon sem problemas', async () => {
    const response = await request(api).get('/pokemon/25');
    expect(response.body.weight).toBe(60)
    expect(response.status).toBe(200)
  })

  test('deve retornar o array com as abilidades de um personagem ao passar o ID do pokemon sem problemas', async () => {
    const response = await request(api).get('/pokemon/180');
    expect(response.body.abilities).toEqual([
      {
        ability: {
          name: "static",
          url: "https://pokeapi.co/api/v2/ability/9/"
        },
        is_hidden: false,
        slot: 1
      },
      {
        ability: {
          name: "plus",
          url: "https://pokeapi.co/api/v2/ability/57/"
        },
        is_hidden: true,
        slot: 3
      },
    ])
    expect(response.status).toBe(200)
  })

  test('deve retornar se é um personagem padrão ao passar o ID do pokemon sem problemas', async () => {
    const response = await request(api).get('/pokemon/25');
    expect(response.body.is_default).toBeTruthy()
    expect(response.status).toBe(200)
  })

  test('should fetch Type data from the API', async () => {
    const response = await request(api).get('/type/1');
    expect(response.status).toBe(200);
    expect(response.body.name).toBe('normal');
  });

  test('should fetch Item data from the API', async () => {
    const response = await request(api).get('/item/1');
    expect(response.status).toBe(200);
    expect(response.body.name).toBe('master-ball');
  });


})