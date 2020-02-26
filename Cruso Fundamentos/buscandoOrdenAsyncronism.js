const API_URL = "https://swapi.co/api/"
const PEOPLE_URL = "people/:id"
const opts =  { crossDomain: true }

//----------------------------------------------MANEJANDO EL ORDEN------------------------------------------------------------
// En este caso vamos a modificar obtenerPersonajes y le vamos a agregar como parametro una funcion llamada callback

function obtenerPersonajes(id , callback) {
    const URL =`${API_URL}${PEOPLE_URL.replace(':id', id)}`

    $.get( URL , opts , function(persona){
        console.log(`Hola, soy ${persona.name}`)
    
        if(callback) {
            callback()
        }
    })
}

//CALLBACK HELL

obtenerPersonajes(1, function () {
    obtenerPersonajes(2 , function () {
        obtenerPersonajes(3 , function () {
            obtenerPersonajes(4 , function () {
                obtenerPersonajes(5 , function () {
                    obtenerPersonajes(6 , function () {
                        obtenerPersonajes(7)
                    })
                })
            })
        })
    })
})