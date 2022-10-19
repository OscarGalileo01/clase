/* 1. Crear un array de números de forma interactiva mediante la función prompt. Asegurarse de que los
elementos del array son números. */

//Number() para convertir el argumento en numero o NaN
//is NaN() devuelve true si argumento es un numero
let numeros =  []

for (let i = 0; i < 4; i++) {
    //Introducir dato y verificar que es numero
    let dato
    do{
        dato =Number(prompt(`Introduce numero ${i+1}: `))
    }while(isNaN(dato))

    numeros[i] = dato;
    
}

console.log(numeros)