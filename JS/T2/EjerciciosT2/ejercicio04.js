
/* 4.-Adaptar el ejercicio 5 del tema anterior, creando una función que acepte los números del dni como
argumento y devuelva un string con el NIF completo. */

//let num = Number(prompt("Introduzca DNI: "));

var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];



const calcDNI = function(num){
    if(num > 0 && num <= 99999999) return `${num}${letras[num % 23]}`
    else return `DNI incorrecto` 
}

const a = calcDNI(71188759)
console.log(a);