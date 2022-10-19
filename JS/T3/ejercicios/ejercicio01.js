/* class Motor{
    constructor(combustible, CV){
        this.combustible = combustible
        this.CV = CV
    }
}

class Propietario{
    constructor(dni,nombre,direccion){
        this.dni = dni
        this.nombre = nombre
        this.direccion = direccion
    }
}

class Coche{
    constructor(matricula,marca, modelo, puertas, Motor, Propietario){
        this.matricula = matricula
        this.marca = marca
        this.modelo = modelo
        this.puertas = puertas
        this.Motor = Motor
        this.Propietario = Propietario
    }
}

motor1 = new Motor(100,100)
propietario1 = new Propietario(1010,"Oscar", "Paseo alfredo Basanta")
coche1 = new Coche(109209,"Ferrari", "AC130", 4, motor1, propietario1) */

/* console.log(coche1); */


const coche = {
    matricula: "aaaa",
    marca: "123",
    modelo: "AC130",
    puertas: 4,
    motor: {
        combustible: 30,
        CV: 40
    },
    propietario: {
        dni: 31231231,
        nombre: "oscar",
        direccion: "Paseo"
    }
}

console.log(coche);