// Manejo de Strings
var nombre = "Juan" , apellido = "Fernandez"

//Mayuscula
var nombreMayus = nombre.toUpperCase()

//Minuscula
var nombreMinus = nombre.toLowerCase()

//Seleccion de Caracteres
var primeraLetra = nombre.charAt(0)
var tomandoLetras = nombre.substr(1 , 2)

//Cantidad Letras
var cantLetras = nombre.length

//Interpolacion de texto: hay formas de conectar strings usando la 
var nombreCompleto = `${nombre} ${apellido}`

//Numeros
var total = Math.round(precioVino * 100 * 3) / 100
var totalStr = total.toFixed(2)
var total2 = parseFloat(totalStr)