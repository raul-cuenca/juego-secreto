// 1. Lista vacia generica
let listaGenerica = [];

// 2. lista lenguajesProgramacion
let listaLenguajesProgramacion = [];
listaLenguajesProgramacion.push('Javascript');
listaLenguajesProgramacion.push('C');
listaLenguajesProgramacion.push('C++');
listaLenguajesProgramacion.push('Kotlin');
listaLenguajesProgramacion.push('Python');

// 3. Argegar elementos a la listaProgramacion

listaLenguajesProgramacion.push('Java');
listaLenguajesProgramacion.push('Ruby');
listaLenguajesProgramacion.push('GoLang');

// 4. Mostrar los elementos de la lista en consola

function mostrarElementosListaProgramacion() {
    console.table(listaLenguajesProgramacion);
}
mostrarElementosListaProgramacion();


// 5. Mostrar los elementos de la listaProgramacion en orden inverso
function mostrarListaOrdenInverso() {
    for (let index = listaLenguajesProgramacion.length - 1; index >= 0; index--) {
        console.log(index);
    }
}
mostrarListaOrdenInverso();

// 6. Calcular promedio de suma de elementos de una lista numerica
let listaNumeros = [1, 2, 3, 4, 5];
function calcularPromedioElementosLista(listaNumeros) {
    //let listaNumeros = [3, 4, 5, 6, 7, 8];
    let suma = 0;

    listaNumeros.forEach(element => {
        suma += element;
        console.log(suma);
    });
}
calcularPromedioElementosLista(listaNumeros);

// 7. mostrar el maximo y minimo de una lista numerica
function maximoNumeroEnLista() {
    let max = Math.max(...listaNumeros);
    console.log(max);
}
let listaNumeros2 = [1, 2, 3, 4, 5, -35, 6, 7, 8];
function minimoNumeroEnLista() {
    let min = Math.min(...listaNumeros2);
    console.log(min);
}
maximoNumeroEnLista();
minimoNumeroEnLista();

// 8. devolver suma de todos los elementos de una lista
let sumaElementos = 0;
function sumaElementosLista(listaNumeros) {

    listaNumeros.forEach(element => {
        sumaElementos += element;
    });
    console.log(`La suma de los elementos de la lista es ${sumaElementos}`);
}
sumaElementosLista(listaNumeros);

// 9. devolver posicion de elemento pasado como parametro
listaNueve = ['a', 'b', 'c', 'd', 'e'];
function devuelvePosicionElementoComoParametro(elemento) {
    if (listaNueve.includes(elemento)) {
        for (let index = 0; index < listaNueve.length; index++) {
            (listaNueve[index] == elemento) ? console.log(index) : console.log(-1);
        }
    } else {
        console.log(`El elemento ${elemento} no existe dentro de la lista ${listaNueve}`);
    }
}
devuelvePosicionElementoComoParametro('b');

