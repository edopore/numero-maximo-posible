/**
 * Punto 1 Prueba técnica realizada para Quind
 * Ejercicio realizado por Eduardo Jose Maya Rodriguez
 * Lenguaje empleado JavaScript con nodeJs
 */

const prompt = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

/**
 * Función de metodo burbuja para ordenar de mayor a menor los números
 * enteros no negativos de un arreglo
 */
function BubbleSort(arr){
    let n = arr.length;
    for(let i = 0;i < n;i++){
        for(let j = 0;j < n;j++){
            if(arr[j]<arr[j+1]){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
            }
        }
    }
    return arr

}
/**
 * 1. Escribe una función que, dada una lista de enteros no negativos,
 * ordene los numeros de tal forma que se obtenga el numero mayor posible
 * 
 * Se realiza el uso de la funcion Bubble Sort que permite organizar números de manera
 * descendente por medio de método burbuja, luego se realiza la concatenación 
 * volviendo los números enteros en String para obtener el numero entero no negativo
 * mayor posible.
 */
function getMaxNumFromArray(numberArray){
    BubbleSort(numberArray);
    let number = "";
    for(let i=0;i<numberArray.length;i++){
        number += numberArray[i].toString();
    }
    return parseInt(number);
}
