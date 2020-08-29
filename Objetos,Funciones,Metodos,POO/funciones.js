/*nos ayudan a modularizar codigo*/
/*las funciones solo deber realizar una unica tarea*/
/*no existe limite para funciones*/
/*los parametros de una funcion sirven para la ejecicion de un bloque de codigo 
pero son opcionales y no tienen limite*/
/*para las funciones flecha si estas cuentan con mas de una linea de codigo en su bloque de ejecucion 
con obligatorias las llaves y el uso del return*/

/* function saludar() {
    console.log('hola')
} */

/* let nombre = 'Roger Colindres';
const saludar = () => console.log('hola')
const saludarUsuario = (usario) => console.log(`Bienvenido ${usario}`)

saludarUsuario(nombre); */
function adicion(a, b) {
    return console.log(a + b)

}

adicion(5, 5);

let suma = (a, b) => a + b;

console.log(suma(5, 3));

/*los resultados de las funciones pueden ser guardados en variables*/

/*funciones expresadas*/
//funcion anonima
const funcionExpresada = function() {
    console.log("esto es suna funcion expresada, asignada como valor a una variable");
}

funcionExpresada();

const suma2 = function suma2(a, b) {
    return a + b;
}

console.log(suma2(1, 1));


/*funciones flecha o arrow functions*/
//funciones expresadas 
//funciones declradas 

const saludar = () => console.log("hola");

saludar();

/*ejemplo de aplicacion funcion flecha*/

let numeros10 = [1, 2, 3, 4, 5]
numeros10.forEach((el, index) => {
    console.log(`El elemento ${el} esta en la posicion ${index}`)
})

/*tienen la capacidad de capturar el this del contexto donde se encuentran*/