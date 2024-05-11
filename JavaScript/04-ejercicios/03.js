/**
 * indice validar que no sea menor a cero y que el elemento 
 * exista en el arary
 */
function getByIdx(arr, idx) {
    if (idx >= 0 && idx < arr.length) {
        return arr[idx];
    } else {
        return 'Valor idx fuera del rango';
    }
}

let resultado = getByIdx([1, 2], 0)
console.log(resultado);