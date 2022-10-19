/* 1.-Basándonos en el ejercicio 1 del tema anterior; crea un función que acepte un parámetro y devuelva un
array de números. El parámetro es el número de elementos del array. Por defecto, el valor es 0 . La función
debe asegurarse que los elementos del array sean todos números. Si al introducir un dato, éste no es un
número nos deberá volver a pedir el dato hasta que sea un número. */


const ej = function(num){
    let numeros = []
    for (let i = 0; i < num; i++) {
        let numero
        do{ //Validamos numeros
             numero = Number((prompt(`Introduzca numero ${i+1}:`)));
        }while(isNaN(numero));
        numeros.push(numero)    
    }

    return numeros;
}

console.log(ej(2))


