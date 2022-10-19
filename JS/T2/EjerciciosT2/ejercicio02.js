/* 2.-Basándonos en el ejercicio 2 del tema anterior, crea una función que acepte un array como argumento y
devuelva otro array con dos elementos:el mayor y menor número del array argumento. Intenta hacer el
ejercicio utilizando como argumento el array devuelto por la función del ejercicio 1. */


const ej = function(numeros){
    let  mayor = numeros[0]
    let  menor = numeros[0]

    for (let i = 1; i < numeros.length; i++) {
        if(numeros[i]>mayor)mayor = numeros[i]
        if(numeros[i]<menor)menor = numeros[i]
    }

    const arrayMenorMayor = [menor,mayor]
    return arrayMenorMayor
    

}

ola = [1,2,3,4,3]
console.log (ej( ola))