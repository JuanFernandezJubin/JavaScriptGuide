const API_URL = "https://swapi.co/api/"
const PEOPLE_URL = "people/:id"
const opts =  { crossDomain: true }

//----------------------------------------MANEJANDO ERRORES CALLBACKS CON .FAIL--------------------------------------------
//Solucion a "SI NOS QUEDAMOS SIN INTERNET" 

function obtenerPersonajes(id , callback) {
    const URL =`${API_URL}${PEOPLE_URL.replace(':id', id)}`

    $.get( URL , opts , callback).fail( ()=> {
        //El metodo .fail que se va a encargar de ejecutar el codigo si aparece un error
        console.log("sucedio un error , no se pudo obtener el personaje ID")
    })
}

//CALLBACK HELL

//LO QUE SUCEDE => Obtenemos el personaje 1, y luego llamamos al callback(function) que es el que utiliza JQuery
obtenerPersonajes(1, function (personaje) {
    console.log(`Hola, soy ${personaje.name}`)

    obtenerPersonajes(2 , function (personaje) {
        console.log(`Hola, soy ${personaje.name}`)
    
        obtenerPersonajes(3 , function (personaje) {
            console.log(`Hola, soy ${personaje.name}`)
    
            obtenerPersonajes(4 , function (personaje) {
                console.log(`Hola, soy ${personaje.name}`)
    
                obtenerPersonajes(5 , function (personaje) {
                    console.log(`Hola, soy ${personaje.name}`)
    
                    obtenerPersonajes(6 , function (personaje) {
                        console.log(`Hola, soy ${personaje.name}`)
                        obtenerPersonajes(7 , function (personaje) {
                            console.log(`Hola, soy ${personaje.name}`)
                        })    
                    })
                })
            })
        })
    })
})