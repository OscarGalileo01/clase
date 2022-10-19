/* Crear una página web con un boton ( pasar ) y dos cuadros de texto (entra y sale).
Inicialmente el cuadro de texto entra está vacío y sale contiene una cadena de caracteres. Con cada
pulsación en el botón se pasará el primer caracter(por la izquierda) de sale y se colocará al final de los
caracteres de entra. Cuando se pase toda la cadena de un cuadro a otro, mostrar un mensaje "cadena
pasada". */

const entra = document.querySelector(".entra")
let sale = document.querySelector(".sale").innerHTML
const a = document.querySelector(".sale")

let index = 0
let legnthSale = sale.length-1

console.log(sale);
document.querySelector(".btn").addEventListener("click", function(){

   

     entra.innerHTML+=sale.charAt(sale.length-1) //Introduce 
    a.innerHTML = sale.substring(0, index)
    


    index--
 

     entra.innerHTML += sale.charAt(index)
    index++ 
    
    
    //a.innerHTML = sale.substring(0,legnthSale)



    
   /*  legnthSale-- */
    


    




})