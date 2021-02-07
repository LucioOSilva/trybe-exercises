const strings = require('../strings.js');
//jest.mock('../strings');
strings.stringToUpper = jest.spyOn(strings,'stringToUpper');
strings.stringFisrtLetter = jest.spyOn(strings,'stringFisrtLetter');
strings.stringJoin = jest.spyOn(strings,'stringJoin');

describe('Testa e troca funcionalidades das funções de string - exercicio 4', () => {
  
  it('now the function stringToUpper return in lowercase', () => {
    strings.stringToUpper.mockImplementation((phrase) => phrase.toLowerCase());
    expect(strings.stringToUpper('OLA MUNDO')).toBe('ola mundo');
    expect(strings.stringToUpper).toHaveBeenCalled();
    expect(strings.stringToUpper).toHaveBeenCalledTimes(1);
  });

  it('now the function stringFisrtLetter return the last letter', () => {
    strings.stringFisrtLetter.mockImplementation((phrase) => phrase.substring(phrase.length - 1));
    expect(strings.stringFisrtLetter('ola mundo')).toBe('o');
    expect(strings.stringFisrtLetter).toHaveBeenCalled();
    expect(strings.stringFisrtLetter).toHaveBeenCalledTimes(1);
  });

  it('now the function stringFisrtLetter return the last letter', () => {
    strings.stringJoin.mockImplementation((phrase1, phrase2, phrase3) => `${phrase1}${phrase2}${phrase3}`);
    expect(strings.stringJoin('xablau','ichinua','xunape')).toMatch('xablauichinuaxunape');
    expect(strings.stringJoin).toHaveBeenCalled();
    expect(strings.stringJoin).toHaveBeenCalledTimes(1);
  });
});

describe('repita a implementação para a primeira função, exercicio 5', () => {
  strings.stringToUpper.mockRestore();
  strings.stringToUpper = jest.spyOn(strings, 'stringToUpper')

  it('now the function stringToUpper return in lowercase', () => {
    strings.stringToUpper.mockImplementation((phrase) => phrase.toLowerCase());
    expect(strings.stringToUpper('XABLAU')).toBe('xablau');
    expect(strings.stringToUpper).toHaveBeenCalled();
    expect(strings.stringToUpper).toHaveBeenCalledTimes(2);
  });

  it('now returns the functions to the standard behavior', () => {
    strings.stringToUpper.mockRestore();
    expect(strings.stringToUpper('xablau')).toBe('XABLAU');
  })
});


module.exports = strings; 
