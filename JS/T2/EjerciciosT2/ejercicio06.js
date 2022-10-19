/* 6.-Adapta el ejercicio 7 del tema anterior, creando una función que acepte un número como argumento y
devuelva un array. Si es primo el array solo tendrá los números 1 y el número argumento. Si no es primo el
array contiene además el resto de los divisores del número. */


const esPrimo = function (num){
    const divisibles = []
    for (let i = 2; i < num; i++) {
        if (num%i==0)divisibles.push(i)     
    }
    if(divisibles.length===0) divisibles.push(0) && divisibles.push(num)
    return divisibles
}

console.log(esPrimo(12));
