/*bucle for*/

/* for (i = 0; i <= 2; i++) {
    console.log(i)
}

let numeros = [1, 2, 3, 4, 5];

for (i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}
 */
/*for of*/
/*variable en singular y el elemento iterable en plural*/
/*devuelve el contenido de las pocisiones del arreglo o cualquier elmento iterable*/

let nombres = ['Roger', 'Jeovanny', 'Colindres', 'Rivera'];

/*for (let nombre of nombres) {
    console.log(nombre);
} */

/*for in*/
/*devuelve el valor de la pocision, de cada elemento iterable*/

/* for (let nombre in nombres) {
    console.log(nombre);
} */

/*uso de break y continiu*/

/* for (let i = 0; i < nombres.length; i++) {
    if (nombres[i] === 'Colindres') {
        break
    }
    console.log(nombres[i]);
}
 */

for (let i = 0; i < nombres.length; i++) {
    if (nombres[i] === 'Colindres') {
        continue
    }
    console.log(nombres[i]);
}