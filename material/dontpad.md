===========================
EXEMPLOS TESTE DO POKEAPI
===========================

describe("Testar endpoint da PokeAPI", () => {
  test("deve retornar um personagem ao passar um NOME do pokemom sem problemas", async () => {
    const response = await request(api).get("/pokemon/ditto");
    expect(response.body.id).toBe(132);
    expect(response.status).toBe(200);
  });

  test("deve retornar um personagem ao passar o ID do pokemom sem problemas", async () => {
    const response = await request(api).get("/pokemon/23");
    expect(response.body.name).toBe("ekans");
    expect(response.status).toBe(200);
  });

  test("deve retornar o PESO de um personagem ao passar o ID do pokemom sem problemas", async () => {
    const response = await request(api).get("/pokemon/25");
    expect(response.body.weight).toBe(60);
    expect(response.status).toBe(200);
  });

  test("deve retornar um array com as abilidades de um personagem ao passar o ID do pokemom sem problemas", async () => {
    const response = await request(api).get("/pokemon/180");
    expect(response.body.abilities).toEqual([
      {
        ability: {
          name: "static",
          url: "https://pokeapi.co/api/v2/ability/9/",
        },
        is_hidden: false,
        slot: 1,
      },
      {
        ability: { name: "plus", url: "https://pokeapi.co/api/v2/ability/57/" },
        is_hidden: true,
        slot: 3,
      },
    ]);
    expect(response.status).toBe(200);
  });

  test("deve retornar se é um personagem padrão ao passar o ID do pokemom sem problemas", async () => {
    const response = await request(api).get("/pokemon/25");
    expect(response.body.is_default).toBeTruthy();
    expect(response.status).toBe(200);
  });
});


-------------


const request = require('supertest')
const api = 'https://pokeapi.co/api/v2'

describe('requisições a api pokemon', ()=>{
    test('deveria retornar um personagem ao buscar um pokemon pelo NOME', async()=>{
        const response = await request(api).get('/pokemon/ditto')

        expect(response.body.id).toBe(132)
        expect(response.status).toBe(200)
    });

    test('deveria retornar um personagem ao buscar um pokemon pelo NOME', async()=>{
        const response = await request(api).get('/pokemon/drowzee')

        expect(response.body.id).toBe(96)
        expect(response.status).toBe(200)
    });

    test('deveria retornar o nome de um pokemon ao realizar a busca por ID', async()=>{
        const response = await request(api).get('/pokemon/25');

        expect(response.body.name).toBe('pikachu');
        expect(response.status).toBe(200)
    });

    test('deveria retornar o nome de um pokemon ao realizar a busca por ID', async()=>{
        const response = await request(api).get('/pokemon/226');

        expect(response.body.name).toBe('mantine');
        expect(response.status).toBe(200)
    });

    test('deve retornar um personagem pokemon pela CATEGORIA', async()=>{
        const response = await request(api).get('/contest-type/5/');

        expect(response.body.name).toBe('tough');
    });

    test('deve retornar um personagem pokemon pela CATEGORIA', async()=>{
        const response = await request(api).get('/contest-type/1/');

        expect(response.body.name).toBe('cool');
    });

    test('deve retornar um personagem pokemon pela COMIDA', async()=>{
        const response = await request(api).get('/berry/25');

        expect(response.body.name).toBe('grepa');
    });

    test('deve retornar um personagem pokemon pela COMIDA', async()=>{
        const response = await request(api).get('/berry/25');

        expect(response.body.name).toBe('grepa');
    });

    test('deve retornar um personagem pokemon pela COMIDA', async()=>{
        const response = await request(api).get('/berry/63');

        expect(response.body.name).toBe('jaboca');
    });

})


-------------


const request = require('supertest')
const api = "https://pokeapi.co/api/v2"

describe('Testar endpoints da PokeAPI', () => {
    test('Deve retornar um personagem ao passar um nome do pokemon sem problemas', async () => {
        const response = await request(api).get('/pokemon/ditto');
        expect(response.body.id).toBe(132)
        expect(response.status).toBe(200)
    })

    test('Deve retornar um personagem ao passar o id do pokemon sem problemas', async () => {
        const response = await request(api).get('/pokemon/96')
        //console.log(response)
        expect(response.body.name).toBe('drowzee')
        expect(response.status).toBe(200)
    })

    test('Deve retornar o tamanho do personagem ao passar o nome sem problemas', async () => {
        const response = await request(api).get('/pokemon/pikachu')
        expect(response.body.height).toBe(4)
        expect(response.status).toBe(200)
    })

    test('Deve retornar o nível de experiencia de base ao passar o id sem problemas', async () => {
        const response = await request(api).get('/pokemon/25')
        expect(response.body.base_experience).toBe(112)
        expect(response.status).toBe(200)
    })

    test('Deve retornar o tipo de pokemon ao passar o id sem problemas', async () => {
        const response =  await request(api).get('/type/13/')
        expect(response.body.name).toBe('electric')
        expect(response.status).toBe(200)
    })

  test('deve retornar item master-ball',  async ()=> {
    const response = await request(api).get('/item/1');
    expect(response.body.id).toBe(1);
    expect(response.body.name).toBe('master-ball');
    expect(response.body.category.name).toBe('standard-balls');
    expect(response.body.effect_entries[0].short_effect).toBe('Catches a wild Pokémon every time.');
  })

  test('deve retornar habilidade 9',  async ()=> {
    const response = await request(api).get('/ability/9');
    expect(response.body.id).toBe(9);
    expect(response.body.name).toBe('static');
  })

  test('deve retornar especie pichu', async ()=> {
    const response = await request(api).get('/pokemon-species/pichu')
    console.log(response.body)
    expect(response.body.id).toBe(172);
  })

})


-----------------------------


===========================
EXEMPLOS TESTE DE SW
===========================


const request = require("supertest")
const api = "https://swapi.dev/api/"

describe('Testar endpoint da StarWarsAPI', () => {
    test('deve retornar o CLIMATE de um PLANETA  sem problemas', async() => {
        const response = await request(api).get('/planets/1/');
        expect (response.body.climate).toBe("arid")
    })
})

describe('Testar endpoint da StarWarsAPI', () => {
    test('deve retornar o NAME de um PLANETA  sem problemas', async() => {
        const response = await request(api).get('/people/1/');
        expect (response.body.name).toBe("Luke Skywalker")
    })
})

describe('Testar endpoint da StarWarsAPI', () => {
    test('deve retornar o NAME de um FILME sem problemas', async() => {
        const response = await request(api).get('/films/2');
        expect (response.body.title).toEqual("The Empire Strikes Back")
    })
})

describe('Testar endpoint da StarWarsAPI', () => {
    test('deve retornar o se o ID é menor ou igual a 10', async() => {
        const response = await request(api).get('/films/1');
        expect (response.body.episode_id).toBeLessThanOrEqual(10)
    })
})


-------------------

===========================
EXEMPLOS TESTE DE LIBRARY
===========================


const request = require('supertest');
const api = 'https://openlibrary.org';

describe('Testar endpoint da Open Library API', () => {
  test('deve retornar informações do Tolkien sem problema', async () => {
    const response = await request(api).get('/search/authors.json?q=j%20r%20r%20tolkien');
    expect(response.body.docs[0]['alternate_names']).toContain('John Ronald Reuel Tolkien');
    expect(response.body.docs[0].birth_date).not.toBe('4 January 1892');
  });
});


---------------


===========================
EXEMPLOS TESTE DO D&D
===========================


const request = require('supertest');
const api = "https://www.dnd5eapi.co/api/";

describe('Testar endpoint da dndApi', ()=> {
  test('Deve testar endpoint de equipamento',  async ()=> {
    const response = await request(api).get('equipment/club');
    expect(response.status).toBe(200);
    expect(response.body.name).toEqual('Club')
  });
})


-------------------------

**Caso de Teste de Ponta a Ponta para a Google Flights**

**Título:** Navegação e Pesquisa da Google Flights

**Objetivo:** Verificar se o usuário recebe e-mail de monitoramento de preços

**Pré-condições:**
1. Dispositivo com acesso a internet
2. Navegador atualizado
3. Usuário precisa possuir uma conta válida e estar logado

**Passos:** Cenário de Teste - Define o que deve ser testado

-  **Acesso à Página Inicial:**
   - Navegue até o site oficial do [Google Fights](https://www.google.com/travel/flights?gl=BR&hl=pt-BR)
   - Verificar se a página carregada possui um bloco de pesquisas de destino de voo.

-  **Login**
    - Clicar no Botão "Fazer login"
    - Inserir os dados de login (e-mail e senha).
    - Verificar se após a realização do login a pagina inicial de pesquisa foi carregada.

-  **Pesquisa por Termo:**
    - No bloco de pesquisa inserir um local de origem e um local de destino, bem como datas de "ida e volta"
    - clicar no botão "pesquisar"

-  **Navegação pela Página:**
    - Selecione o botão de alternância "Monitorar Preço"


**Pós-condições:**


**Critérios de Aceitação:**
- não apresenta mensagens de erro
- paginas carregam normalmente
- e-mail de monitoramento de preços recebido com sucesso
