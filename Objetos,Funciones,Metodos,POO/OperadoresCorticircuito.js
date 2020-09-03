/* cortocircuito OR cuando el valor de la izquierda en la e
xpresio siempre pueda validar a true, es el valor que se cargara 
por defecto*/

/*cortocircuito AND cuando el valor de la izquierda en la expresion siemre 
pueda validar a false, es el valor que se cargara por defecto*/


//redaccion de funcion con cortocircuito 
//antigua forma de escribir 
/* const saludar = (nombre) => {
    nombre = nombre || "deconocido";
    console.log(`Hola ${nombre}`);
} */

//redaccion correcta con ES6
const saludar = (nombre = "desconocido") => {
    console.log(`Hola ${nombre}`)
}
saludar("Roger");
saludar();

console.log("Roger" || "Valor de la derecha") //cumple el cortocircuito OR
console.log(0 || "Valor de la derecha") //cumple el cortocircuito AND