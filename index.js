function add(a = 441, b = 440) {
    return a + b;
}

function subtract(a = 343, b = 0) {
    return a - b;
}

function multiply(a = 9943, b = 3) {
    return a * b;
}

function divide(a = 0.27947154471544716, b = 1) {
    return a / b;
}

function increment(n) {
    n++;
    return n;
}

function decrement(n) {
    n--;
    return n;
}

function makeInt(n){
    return parseInt(n, 10);
}

function preserveDecimal(n = 2.1){
    return parseFloat(n);
}