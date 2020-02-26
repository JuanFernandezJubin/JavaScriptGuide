var juan = {
    nombre: 'Juan',
    apellido: 'Fernandez Jubin',
    edad: 30
}
var gaston = {
    nombre: 'Gaston',
    apellido: 'Bauer',
    edad:30
}

function imprimirMayus (persona) {
    var {nombre} = persona
    var {edad} = persona
    console.log(`Hola me llamo ${nombre} y tengo ${edad} años`)
}

function cumpleaños (persona) {
    //Devolvemos una copia del objeto pero con la edad incrementada, al poner los ... indicamos que sera un NUEVO objeto
    //por ende el global no se vera modificado. Si en consola le pasamos una persona, nos creara una copia de esa persona 
    //pero con la edad incrementada en 1.
    return {
        ...persona,
        edad: persona.edad + 1
    }
}


imprimirMayus(juan)
imprimirMayus(gaston)