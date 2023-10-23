Para casa - Exercício 1

Testar api do IBGE
Tem mtos modulos dentro
apenas de localidades
- a base é https://servicodados.ibge.gov.br/api/v1/localidades/
e ai temos os endpoints
- distritos
-distritos por id
-distritos por estados
-distritos por região

testar 4 endpoints

Cenários tristes para teste:
testar nome de estado qu enão existe, id que não tem, retornar status diferentes

usar do jest:
toBe
se é null
