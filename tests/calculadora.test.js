const calculadora = require('../models/calculadora');

// SOMA //

test('somar 2 + 2 DEVE retornar 4', () => {
  const resultado = calculadora.somar(2, 2);
  expect(resultado).toBe(4);
});

test('somar 5 + 100 DEVE retornar 105', () => {
  const resultado = calculadora.somar(5, 100);
  expect(resultado).toBe(105);
});

test("Somar 'Banana' + 100 deveria retornar um erro", () => {
  const resultado = calculadora.somar('Banana', 100);
  expect(resultado).toBe('Erro');
});

test('Somar 100 + "Banana" deveria retornar um erro', () => {
  const resultado = calculadora.somar(100, 'Banana');
  expect(resultado).toBe('Erro');
});

// DIVIDIR //

test('Dividir 10 / 2 DEVE retornar 5', () => {
  const resultado = calculadora.dividir(10, 2);
  expect(resultado).toBe(5);
});

test('Dividir por ZERO deve retornar um erro', () => {
  const resultado = calculadora.dividir(10, 0);
  expect(resultado).toBe('Erro');
});

test('Dividir 10 por "banana" deve retornar um erro', () => {
  const resultado = calculadora.dividir(10, 'banana');
  expect(resultado).toBe('Erro');
});

test('Dividir "Banana" por 10 deve retornar um erro', () => {
  const resultado = calculadora.dividir('Banana', 10);
  expect(resultado).toBe('Erro');
});
