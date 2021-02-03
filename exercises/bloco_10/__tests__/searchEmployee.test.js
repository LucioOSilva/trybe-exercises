const { test, expect } = require('@jest/globals');
const searchEmployee = require('../searchEmployee.js');

describe('Testes para função SearchEmployee', () => {
  test('Testa se "searchEmployee" é uma função', () => {
    expect(typeof searchEmployee).toBe('function');
  });
  test('Testa se a função é definida "retorna algo"', () => {
    expect(searchEmployee).toBeDefined();
  });
  test('Testa se ID não existe na base', () => {
    expect(searchEmployee('4444-4')).toMatch('Employee not found!');
  });
  test('Testa se o ID existe na base, e retorna as todas informações solicitadas em "details"', () => {
    expect(searchEmployee('1256-4', ['id', 'firstName', 'lastName', 'specialities']))
      .toEqual({
        id: '1256-4',
        firstName: 'Linda',
        lastName: 'Bezos',
        specialities: ['Hooks', 'Context API', 'Tailwind CSS'],
      });
  });
  test('Testa se o ID existe na base, e retorna as algumas informações solicitadas em "details"', () => {
    expect(searchEmployee('1256-4', ['lastName', 'specialities']))
      .toEqual({
        lastName: 'Bezos',
        specialities: ['Hooks', 'Context API', 'Tailwind CSS'],
      });
  });
  test('testa se array de details vazio retorna objeto vazio', () => {
    expect(searchEmployee('1256-4', []))
    .toEqual({});
  });
  test('testa se array de atributos não encontrados no objeto retorna objeto vazio', () => {
    expect(searchEmployee('1256-4', ['hairColor', 'height', 'bornIn']))
    .toEqual({});
  });

});

module.exports = searchEmployee;
