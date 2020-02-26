class Persona {
    
    constructor(nombre , apellido , altura) {
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }

    saludar () {
        console.log (`Hola, me llamo ${this.nombre}${this.apellido}.`)
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
    saludar () {
        console.log(`Hola, me llamo ${this.nombre}${this.apellido} y soy Desarrollador.`);
    }
}

var jose = new Persona("Jose", "Reyes", 1.76)
