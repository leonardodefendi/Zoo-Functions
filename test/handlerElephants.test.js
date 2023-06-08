const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  test('Verifica se ao passar não passar parametro retorna undefined', () => {
    expect(handlerElephants()).toBeUndefined();
  });
  test('Verifica se ao passar um número como parametro retorna a mensagem "Parâmetro inválido, é necessário uma string"', () => {
    expect(handlerElephants(1)).toBe('Parâmetro inválido, é necessário uma string');
  });
  test('Verifica se ao passamarmos como parametro "count", o retorno será a quantidade de elefeantes', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  test('Verifica se ao passamarmos como parametro "names", será um array com o nome de todos elefantes', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });
  test('Verifica se ao passamarmos como parametro "averageAge", o retorno será  média de idade dos elefantes', () => {
    expect(handlerElephants('averageAge')).toBe(10.5);
  });
  test('Verifica se ao passamarmos como parametro "location", o retorno será a localização dos elefantes', () => {
    expect(handlerElephants('location')).toEqual('NW');
  });
  test('Verifica se passarmos como parametro a string "teste" o retorno será null', () => {
    expect(handlerElephants('teste')).toBeNull();
  });
});
