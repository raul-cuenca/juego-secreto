let nota1 = parseInt(prompt('Ingrese nota: '));
let nota2 = parseInt(prompt('Ingrese nota: '));
let nota3 = parseInt(prompt('Ingrese nota: '));
let nota4 = parseInt(prompt('Ingrese nota: '));



function calcularPromedio(nota1, nota2, nota3, nota4) {
    return (nota1 + nota2 + nota3 + nota4) / 4;
}

function verificarPromedio(promedio) {
    return (promedio >= 5) ? 'Aprobado' : 'Desaprobado';
}

let promedio = calcularPromedio(nota1, nota2, nota3, nota4);
alert(verificarPromedio(promedio));