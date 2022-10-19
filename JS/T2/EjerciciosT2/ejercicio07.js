let segundos = document.getElementById("seg")
//let minuto =Number(document.getElementById("min").innerText);
let PMinuto = document.getElementById("min")




let intervalo = setInterval(function(){
    let contentSegundos =Number(segundos.innerText);
    if(contentSegundos === 59){
        segundos.innerText = 0 //Si segundos llega a 59, reseteamos a 0
        PMinuto.innerText++   //Sumamos 1 minuto cada 59segundos
    }
    else segundos.innerText = ++contentSegundos //Sino vamos sumando segundos hasta 59


}, 1000)




   
       setTimeout(function(){
           clearInterval(intervalo)
       }, 590000)

   
    

    



