let randomNum = require('../randomNum');

describe('Testes na função randomNum - exercicio1', () => {
  test('define retorno padrao, testa chamadas da função, quantas vezes foi chamada', () => {
    randomNum = jest.fn()
      .mockReturnValue(10);
    expect(randomNum).toHaveBeenCalled;
    expect(randomNum()).toBe(10);
    expect(randomNum).toHaveBeenCalledTimes(1);
  });
});

describe('Testes na função randomNum - exercicio2', () => {
  test('testa nova implementação recebe 2 param, divide primeiro por segundo, implementa unica vez', () => {
    randomNum = jest.fn().mockImplementation((a, b) => a / b);
    expect(randomNum(10,2)).toBe(5);
    expect(randomNum).toHaveBeenCalledTimes(1);
  });
});

describe('Testes na função randomNum - exercicio3', () => {
  test('testar nova implementação recebe 3 parametros retorna multiplicação, reseta função e recebe um param retorna dobro', () => {
    randomNum = jest.fn().mockImplementation((a, b, c) => a * b * c);
    expect(randomNum(2, 2, 2)).toBe(8);
    expect(randomNum).toHaveBeenCalledTimes(1);
    randomNum = jest.fn().mockImplementation(a => a * 2);
    expect(randomNum(7)).toBe(14);
    expect(randomNum).toHaveBeenCalledTimes(1);
  });
});

describe('Teste na função original', () => {
  test('Test função random', () => {
    
  });
});

module.exports = randomNum;
