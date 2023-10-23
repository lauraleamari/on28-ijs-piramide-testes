const request = require("supertest");
const api = "https://swapi.dev/api"


describe("Testar EndPoint do StarWars Api", () =>{
  test("deve retornar o CLIMATE de um Planeta sem problemas", async () => {
    const response = await request(api).get("/planets/1/")
    expect(response.body.climate).toBe("arid")
  })

  test("deve retornar o NAME de um Planeta sem problemas", async () => {
    const response = await request(api).get("/people/1/")
    expect(response.body.name).toBe("Luke Skywalker")
  })

  test("deve retornar o NAME de um Filme sem problemas", async () => {
    const response = await request(api).get("/films/2/")
    expect(response.body.title).toEqual("The Empire Strikes Back")
  })

  test("deve retornar se o Id é menor ou igual a 10", async () => {
    const response = await request(api).get("/films/1/")
    expect(response.body.episode_id).toBeLessThanOrEqual(10)
  })

  test('should fetch person or character data from the API', async () => {
    const response = await request(api).get('/people/1/');
    expect(response.status).toBe(200);
    expect(response.body.name).toBe('Luke Skywalker');
  });

  test('should fetch species data from the API', async () => {
    const response = await request(api).get('/species/3');
    expect(response.status).toBe(200);
    expect(response.body.name).toBe('Wookie');
  });

  test('should fetch single film data from the API', async () => {
    const response = await request(api).get('/films/1/');
    expect(response.status).toBe(200);
    expect(response.body.title).toBe('A New Hope');
  });

  test('should fetch single transport data from the API', async () => {
    const response = await request(api).get('/starships/9');
    expect(response.status).toBe(200);
    expect(response.body.model).toBe('DS-1 Orbital Battle Station');
  });
})