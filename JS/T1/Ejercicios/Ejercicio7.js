const esPrimo = function (num){
    const divisibles = []
    for (let i = 2; i < num; i++) {
        if (num%i==0)divisibles.push(i)     
    }
    return divisibles
}

const num = Number(prompt("Numero: "));
const a  = esPrimo(num)
if(a.length==0)console.log("Es primo")
else console.log(...a);