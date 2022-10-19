

let p = {
    nombre: "Pepe",
    apellido: "aaaa",
    nCompleto(){
        return `${this.nombre} ${this.apellido }`
    },
    verCompleto: function(){
        setTimeout(()=>{
            console.log(this);
            console.log(this.nCompleto());
        }, 2000)
    }
}

/* const b = document.querySelector("button")
b.addEventListener("click", ()=>{
    alert(b.innerText)
}) */
/* FUNCION FLECHA, PIERDES EL CONTEXTO DE BUTTON, THIS ES WINDOWS
document.querySelector("button").onclick = ()=>{
    console.log(b);
    alert(b.innertext)
} */


//FUNCION AUTOEJECUTABLE

/* let totalGeneral = (function (...datos){
    let total = 0;
    for (const dato of datos) {
        total+= dato
    }
    alert(total);
})(1,2,3,4) */

(function (...datos){
    let total =0
    for (const i of datos) {
        total+=i
    }
    alert(total)
})(1,2,3,4)

(function(){

})(totalGeneral)