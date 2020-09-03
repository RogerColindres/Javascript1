/* 1) Programa una función que cuente el número de caracteres de una 
cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
2) Programa una función que te devuelva el texto recortado según el número de 
caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
3) Programa una función que dada una String te devuelva un Array de textos separados 
por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) 
devolverá Hola Mundo Hola Mundo Hola Mundo. */

/*1)*/
let cadena = "Hola mundo";
let tamaño = 4;

function ejercicio1(cadena) {
    if (cadena === "") {
        console.log("El parametro enviado, esta vacio");
    } else if (typeof cadena != "string" || cadena === 0) {
        console.log("El parametro enviado no es una cadena");
    } else {
        console.log(`El numero de caracteres de la cadena es ${cadena.length}`)
    }
}

function ejercicio2(cadena, tamaño) {
    if (cadena === "" || tamaño === "" || tamaño === 0) {
        console.log("Revisar parametros enviados puede que esten vacios");
    } else if (typeof cadena != "string" || cadena === 0) {
        console.log("El parametro enviado no es una cadena");
    } else if (typeof tamaño != "number") {
        console.log("El parametro de tamaño no es un numero")
    } else {
        console.log(cadena.slice(0, tamaño));
    }
}

const ejercicio3 = (cadena, separador) => {
    if (cadena === "" || separador === "") {
        console.log("Parametros enviados vacios, revisar lo enviado");
    } else if (typeof cadena != "string" || typeof separador != "string") {
        console.log("El parametros enviados no son validos");
    } else {
        let arreglo = cadena.split(separador);
        console.log(arreglo);
    }
}

let separador = " ";

const ejercicio4 = (cadena, contador) => {
    if (cadena === "" || contador === "" || contador === 0) {
        console.log("Revisar parametros enviados puede que esten vacios");
    } else if (typeof cadena != "string" || cadena === 0) {
        console.log("El parametro enviado no es una cadena");
    } else if (typeof contador != "number") {
        console.log("El parametro de tamaño no es un numero")
    } else {
        cadena = cadena + " ";
        console.log(cadena.repeat(contador));
    }
}

let contador = 3;

ejercicio4(cadena, contador);