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