const { operacoes } = require('./operacoes');

describe('Testes da Calculadora', () => {
    test('Soma de 1 + 2 deve ser igual a 3', () => {
        expect(operacoes(1, 2, 'soma')).toBe(3);
    });

    test('Soma de -1 + 5 deve ser igual a 4', () => {
        expect(operacoes(-1, 5, 'soma')).toBe(4);
    });

    test('Subtração de 5 - 2 deve ser igual a 3', () => {
        expect(operacoes(5, 2, 'subtracao')).toBe(3);
    });

    test('Subtração de 3 - 5 deve ser igual a -2', () => {
        expect(operacoes(3, 5, 'subtracao')).toBe(-2);
    });

    test('Multiplicação de 3 * 4 deve ser igual a 12', () => {
        expect(operacoes(3, 4, 'multiplicacao')).toBe(12);
    });

    test('Multiplicação de -2 * 5 deve ser igual a -10', () => {
        expect(operacoes(-2, 5, 'multiplicacao')).toBe(-10);
    });

    test('Divisão de 10 / 2 deve ser igual a 5', () => {
        expect(operacoes(10, 2, 'divisao')).toBe(5);
    });

    test('Divisão de 1 / 2 deve ser igual a 0.5', () => {
        expect(operacoes(1, 2, 'divisao')).toBe(0.5);
    });

    test('Divisão por zero deve lançar erro', () => {
        expect(() => operacoes(10, 0, 'divisao')).toThrow("Não é possível dividir por zero!");
    });

    test('Números inválidos devem lançar erro', () => {
        expect(() => operacoes('a', 2, 'soma')).toThrow("Por favor, insira números válidos.");
    });

    test('Operação inválida deve lançar erro', () => {
        expect(() => operacoes(1, 2, 'potencia')).toThrow("Operação inválida");
    });
});