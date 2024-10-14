function isFibonacci(num) {
    var a = 0, b = 1;

    if (num === 0 || num === 1) {
        return `O número ${num} pertence a sequência de Fibonacci.`;
    }

    while (b < num) {
        var temp = a + b;
        a = b;
        b = temp;
    }

    if (b === num) {
        return `O número ${num} pertence a sequência de Fibonacci.`;
    } else {
        return `O número ${num} não pertence a sequência de Fibonacci.`;
    }
}

var numero = 21;
console.log(isFibonacci(numero));
