const persona = {
    nombre: "Oscar",
    edad: 21,
    direccion: "Paseo Alfedo Basanta",
    cm: 21
}


const {nombre,edad, ...resto} = persona;

function Person(id,edad,casado,direccion){
    this.id = id
    this.edad = edad
    this.casado = casado
    this.direccion = direccion
}

Person.prototype.mostrar = function(){
    console.log(this.id,this.edad, this.casado, this.direccion);
}

let persona1 = new Person(1,21,false,"Paseo");
persona1.mostrar();

class Pers{
    constructor(id,edad,casado,direccion){
        this.id = id
        this.edad = edad
        this.casado = casado
        this.direccion = direccion
    }
    
    mostrar(){
        console.log(this.id,this.edad, this.casado, this.direccion);
    }

}

let persona2 = new Pers(1,21,false,"Paseo");
persona1.mostrar();