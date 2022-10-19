/* 5. Realizar una página con un script que calcule el valor de la letra de un número de identificación fiscal
(NIF). El algoritmo es el siguiente:
• Comprobar que el número está entre 0 y 99999999
• Calcula el resto de la división entera del número de DNI y el número 23
• Selecciona la letra dentro del array de letras siguiente usando como índice el valor obtenido del paso
anterior:
var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
Esto es, si el resto de la división es 0, la letra del DNI es la T, si el resto es 1 la letra es la R, etc.
El script tiene que solicitar un número al usuario. Para solicitar el número se puede usar la función prompt():
var numero = prompt("Introduce tu número de DNI (sin la letra)");
Tener en cuenta que prompt devuelve un string
Si el número no es correcto, mostrar un mensaje de error
Si fuera correcto, se pasará como argumento a una función que calculará la letra y devolverá el NIF
completo al script. El script mostrará el NIF por consola, alert o documento. */

let num = Number(prompt("Introduzca DNI: "));
var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

const calcularLetra = function (num){
    let resto = num % 23;
    return resto;
}

if(num > 0 && num <= 99999999){
    let posLetra = calcularLetra(num);
    console.log(`DNI completo: ${num + letras[posLetra]}`)
}else{
    console.log("Numero incorrecto")
}

