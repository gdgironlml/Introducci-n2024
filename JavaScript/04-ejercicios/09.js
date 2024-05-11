/**
 * Crear algoritmo que devuelva un array
 * de objetos en base a pares
 */

let pairs = [
    [1, {name: 'Nicolás'}],
    [2, {name: 'Felipe'}],
    [3, {name: 'Chanchito'}],
];

function toCollection(arr) {
    let array = [];
    for (idx in arr) {
        let elemento = arr[idx];
        array[idx] = elemento[1];
        array[idx].id = elemento[0];
    }
    return array;
}

let resultado = toCollection(pairs);
console.log(resultado);