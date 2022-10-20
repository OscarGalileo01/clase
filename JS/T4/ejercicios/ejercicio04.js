/* Crear una página web con un boton ( pasar ) y dos cuadros de texto (entra y sale).
Inicialmente el cuadro de texto entra está vacío y sale contiene una cadena de caracteres. Con cada
pulsación en el botón se pasará el primer caracter(por la izquierda) de sale y se colocará al final de los
caracteres de entra. Cuando se pase toda la cadena de un cuadro a otro, mostrar un mensaje "cadena
pasada". */

const entra = document.querySelector(".entra")
let sale = document.querySelector(".sale")


/* let index = 0
let legnthSale = sale.length-1 */

let arraySale = [...sale.innerHTML]
let arrayEntra = []
const digitosPalabra = sale.innerHTML.length;

document.querySelector(".btn").addEventListener("click", function(){

  if(arrayEntra.length === digitosPalabra){
    alert("PALABRA COMPLETA")
  }else{
    arrayEntra.unshift(arraySale.shift()) //Shift devuelve primera letra de sale, y unshift lo coloca al principio del array entra
    /* Comprobaciones */
    console.log("Entra:      " + arrayEntra);
    console.log("Sale:       " + arraySale);
 
    //Añadimos al html la primera pos de arrayEntra
    entra.innerHTML += arrayEntra[0] 
    //Eliminamos primera letra de sale
   sale.innerHTML = sale.innerHTML.substring(1,sale.innerHTML.length)
  }
})