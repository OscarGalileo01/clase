/* 4. Crear una matriz de números y mostrar por la consola o por el documento las coordenadas de las
posiciones que tengan un número impar. Recorre el array usando las estructuras while y for y
comprueba cual tiene mejor rendimiento usando la consola como en el caso anterior. */

const nums = [1,2,3,4,5,6,7];


//---------FOR---------
console.time();

for (const [i,numero] of nums.entries()) {
    numero % 2 == 0 && console.log(i)
}



console.timeEnd(); //0.333ms

//---------WHILE---------
let i = 0;
console.time();
while(i < nums.length){
    nums[i] % 2 == 0 && console.log(i);
    i++;
}
console.timeEnd(); //0.304ms


