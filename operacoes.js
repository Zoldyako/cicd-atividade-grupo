function operacoes(num1, num2, operacao) {
    if (isNaN(num1) || isNaN(num2)) {
        throw new Error("Por favor, insira números válidos.");
    }
    
    switch (operacao) {
        case 'soma':
            return num1 + num2;
        case 'subtracao':
            return num1 - num2;
        case 'multiplicacao':
            return num1 * num2;
        case 'divisao':
            if (num2 === 0) throw new Error("Não é possível dividir por zero!");
            return num1 / num2;
        default:
            throw new Error("Operação inválida");
    }
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { operacoes };
}