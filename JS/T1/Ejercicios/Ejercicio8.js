const esPrimo = function (num){
    for (var i = 2; i < num; i++) {
        if (num%i==0) return false
    }
    return true
}

let b = esPrimo(Number(prompt("Introduce numero: ")));



try{
    if(!b) throw new Error("No es primo")
    else console.log("Es primo");
}catch(error){
    console.log(error)
}