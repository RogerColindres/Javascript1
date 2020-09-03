/* 5) Programa una función que invierta las palabras de una cadena de texto, 
pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, 
pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
7) Programa una función que valide si una palabra o frase dada, es un palíndromo 
(que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
8) Programa una función que elimine cierto patrón de caracteres de un texto dado, 
pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5. */

let cadena = "como1, como2, como3";


function ejercicio5(cadena) {
    let contador = cadena.length;
    let cadenainvertida = " ";
    if (cadena === "" || cadena === " ") {
        console.log("El parametro enviado, esta vacio");
    } else if (typeof cadena != "string" || cadena === 0) {
        console.log("El parametro enviado no es una cadena");
    } else {
        for (let i = cadena.length; i >= 0; i--) {
            cadenainvertida = cadenainvertida + cadena.charAt(contador);
            contador--;
        }
        /* console.log(cadenainvertida.trim()); */
        return cadenainvertida.trim();
    }

}


let expR = new RegExp("como", "gim");



const ejercicio6 = (cadena, busqueda) => {
    console.log(busqueda);
    let arreglo = cadena.split(" ");
    let contador = 0
    for (let i = 0; i <= arreglo.length; i++) {
        if (busqueda.test(arreglo[i])) {
            contador++;
        }
    }
    console.log(contador);

}

const ejercicio7 = (cadena) => {
    if (cadena === "" || typeof cadena != "string" || cadena === 0) {
        console.log("parametro enviado esta vacio o no es un texto")
    } else {
        let cadenainversa = ejercicio5(cadena)
        if (cadenainversa === cadena) {
            console.log(`La palabra ${cadena} es un palindromo`)
        }
    }
}


const ejercicio8 = (cadena, eliminar) => {
    console.log(cadena.replace(eliminar, ""))
}

ejercicio8(cadena, expR);