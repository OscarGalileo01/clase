/* 6.-La Sociedad Española para el Estudio de la Obesidad define el IMC (índice de masa corporal) de una
persona mediante la fórmula:
IMC = Peso (kg) / altura (m) 2
Ejemplo: 67 Kg y 1,80 m. de altura
IMC=67/(1,80)2

= 20,68, Peso normal

Cotejando el resultado con la siguiente tabla se determina el grado de obesidad de la persona:
< 18,5 Peso insuficiente
18,5 - <25 Normal
25 - <27 Sobrepeso grado I
27 - <30 Sobrepeso grado II
30- <35 Obesidad I
35 - <40 Obesidad II

40 - <50 Obesidad III (mórbida)
> 50 Obesidad III (extrema)
Introducir los datos de altura y peso mediante la función prompt. Validar que los datos sean numéricos.
Obtener el IMC mediante una función a la que se le pasen el peso y la altura. Mostrará en la consola del
navegador el IMC y un texto indicando el grado de obesidad : console.log(IMC). */



let altura, peso;


const calcularIMC =function (altura, peso){
    let imc = peso/(Math.pow(altura, 2))
    console.log(imc)

    if(imc > 18.5 && imc < 25) console.log("Normal")
    else if(imc > 25 && imc < 27) console.log("Sobrepeso grado |")
    else if(imc > 27 && imc < 30) console.log("Sobrepeso grado ||")
    else if(imc > 30 && imc < 35) console.log("Obesidad grado |")
    else if(imc > 35 && imc < 40) console.log("Obesidad grado ||")
    else if(imc > 40 && imc < 45) console.log("Obesidad grado |||")

}


do{ //Validamos altura
     altura = Number((prompt("Introduzca altura: ")));
}while(isNaN(altura));
do{ //Validamos peso
     peso = Number((prompt("Introduzca peso: ")));
}while(isNaN(peso));


calcularIMC(altura, peso);
