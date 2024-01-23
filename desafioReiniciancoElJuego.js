// 1. Calcular el IMC

function calcularIMC(altura, peso) {
    return peso / altura ** 2;
}

alert(`IMC: ${calcularIMC(1.67, 64)}`);

// 2. Factorial de un numero

function factorialRecursivo(n) {
    if (n == 0) {
        return 1;
    }
    return n * factorialRecursivo(n - 1);
}

alert(`Factorial: ${factorialRecursivo(5)}`);

// 3. Convertir a dolares

function convertirASoles(dolares) {
    alert(`Dolares: ${dolares} a soles ${dolares / 4.8}`);
}
convertirASoles(600);

// 4. Mostrar área y perímetro

function mostrarAreaYPerimetro(altura, ancho) {
    alert(`Altura: ${altura} \nAncho: ${ancho} \nÁrea: ${altura * ancho}`);
}

mostrarAreaYPerimetro(5, 7);

// 5. Mostrar área y perímetro circular

function calcularAreaPerimetroCircular(radio) {
    alert(`Radio: ${radio}\nArea: ${3.1415 * radio ** 2}`);
}
let radio = parseInt(prompt('Ingresar radio: '));
calcularAreaPerimetroCircular(radio);

// 6. Mostrar tabla de multiplicar de n

function mostrarTablaMultiplicar(numero) {
    for (i = 1; i <= 12; i++) {
        console.log(`${numero} * ${i} = ${numero * i}`);
    }
}

mostrarTablaMultiplicar(7);