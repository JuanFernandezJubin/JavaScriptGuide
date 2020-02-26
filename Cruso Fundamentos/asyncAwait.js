const API_URL = "https://swapi.co/api/"
const PEOPLE_URL = "people/:id"
const opts =  { crossDomain: true }

function connect(id) {
    return new Promise ((resolve , reject)=>{
        const URL =`${API_URL}${PEOPLE_URL.replace(':id', id)}`
        $.get( URL , opts , function(data){
            resolve(data)
        })
        .fail(()=> reject(id))
    })
}

function onError(id) {
    console.log("Error")
}
//Con await esta funcion queda parada hasta que todas las promesas se hayan cumplido,para poder utilizar await
//debemos marcar la funcion como async. Para poder usar esto tenemos que poner toda la parte asyncronic dentro de un
//try catch
async function obtenerPersonajes(){
    var ids = [1 , 2, 3 , 4 , 5 , 6 , 7]
    var promesas = ids.map(id => connect(id))
    try {
        var personajes = await Promise.all(promesas)
        console.log(`Hola !!! soy ${personajes}`)
    } catch (id) {
        onError(id)
    }
}

obtenerPersonajes()
