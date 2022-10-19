/* 5.-Adapta el ejercicio 6 del tema anterior, creando una función que acepte dos parámetros: peso y altura y
devuelva el IMC. */

let altura, peso;


const calcularIMC =function (altura, peso){
    let imc = peso/(Math.pow(altura, 2))
    return imc
}


do{ //Validamos altura
     altura = Number((prompt("Introduzca altura: ")));
}while(isNaN(altura));
do{ //Validamos peso
     peso = Number((prompt("Introduzca peso: ")));
}while(isNaN(peso));


console.log( calcularIMC(altura, peso));