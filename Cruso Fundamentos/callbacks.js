const API_URL = "https://swapi.co/api/"
const PEOPLE_URL = "people/:id"

//Para poder hacer un request con JQuery tenemos que llamar al metodo $.get, el primero de los parametros es la URL a la 
//cual queremos acceder

//El metodo replace lo tienen todos los strings, y le pasamos 2 parametros, el primero es el parametro que queremos que se
//modifque y el 2do por cual lo modificamos

//El segundo parametro que necistamos es avisarle a JQuery, que el request se va a hacer a otra pagina, no a la pagina actual
//y para eso usamos crossDomain:true

//Y por ultimo el 3er parametro es el CALLBACK, que es una funcion que se va a ejecutar en algun futuro, no sabemos
//cuando se va a ejecutar pero el $.get es el encargado de.

//Cuando haces una llamada y retorna success, este se compone de 3 parámetros devueltos: data, estatus de la 
//respuesta y el objeto request

// ----------------------------------------------OBTENER 1 QUERY---------------------------------------------------------

var lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id', 1)}`
var opts =  { crossDomain: true }
var onResponse =  function (persona) {
    console.log (`Hola !! yo soy ${persona.name}`)
    console.log("-------------------------------------------------------------------------")
}

$.get(lukeUrl , opts , onResponse)

//----------------------------------------------MULTIPLES QUERYS---------------------------------------------------------
function obtenerPersonajes(id) {
    const URL =`${API_URL}${PEOPLE_URL.replace(':id', id)}`
    $.get( URL , opts , onResponse)
}

//Como vemos en consola el orden en ejecucion no es el mismo que el orden de respuesta. ASYNCRONISM
obtenerPersonajes(1)
obtenerPersonajes(2)
obtenerPersonajes(3)