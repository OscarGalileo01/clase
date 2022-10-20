/* Partiendo del mismo array que el ejercicio anterior, mostrar en que posiciones se encuentra el número 3 sin
necesidad de recorrer todas los elementos del array. */

const nums  = [1,5,2,7,3,2,4,5,8,7,3,4,5,6,7,3,8,4,1]

const pos = []

const n = 3

let indice = nums.indexOf(n)

while(indice !== -1){
    pos.push(indice)
    indice = nums.indexOf(n,indice+1)
}

console.log( pos)