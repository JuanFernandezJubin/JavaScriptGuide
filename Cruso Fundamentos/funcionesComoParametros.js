class Persona {
    
    constructor(nombre , apellido , altura) {
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }

    saludar (fn) {
        console.log (`Hola, me llamo ${this.nombre}${this.apellido}.`)
        if (fn) {
            fn(this.nombre , this.apellido)
        }
    }

    soyAlto () {
        return this.altura > 1.8
    }
}

class Desarrollador extends Persona {
    constructor (nombre , apellido , altura ) {
        //Nos pide que llamemos al contructor super "Persona en este caso" antes de usar this, encontes le paso por super() los
        //parametros y no hace falta las otras 3 lineas this. de codigo ya que lo crea con el superConstructor
        super(nombre , apellido , altura) 
    }
    saludar (fn) {
        console.log(`Hola, me llamo ${this.nombre}${this.apellido} y soy Desarrollador.`);
        if (fn) {
            fn(this.nombre , this.apellido , true)
        }
    }
}

function responderSaludo (nombre , apellido , esDev) {
    console.log (`Buen día ${nombre}  ${apellido}`)
    if (esDev) {
        console.log ('A mira, no sabia que eras Developer')
    }
}

var jose = new Persona("Jose", "Reyes", 1.76)
var juan = new Desarrollador("Juan", "Fernandez", 1.76)
var mario = new Persona("Mario", "Lopez", 1.89)

jose.saludar()
juan.saludar(responderSaludo)
mario.saludar(responderSaludo)