function saludoConsola() {
    console.log('Hola mundo!');
}

function saludoConParametro(nombre) {
    console.log(`¡Hola ${nombre}!`);
}

function duplicarNumero(numero) {
    return numero * 2;
}

function promedio(num1, num2, num3) {
    return (num1 + num2 + num3) / 3;
}

function numeroMayor(num1, num2) {
    return num1 > num2 ? num1 : num2;
}

function multiplicarNumero(numero) {
    return numero ** 2;
}





saludoConsola();
saludoConParametro('Alex');
console.log(duplicarNumero(5));
console.log(promedio(5, 3, 9));
console.log(numeroMayor(24, 16));
console.log(multiplicarNumero(8));