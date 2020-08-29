/*REST son una forma de agregar parametros infinitos en una funcion, por ejemplo*/
//parametros infinitos
//se usa en la declaracion de una funcion para decir que puede recibir infinitos agumentos 
function sumar(a, b, ...c) {
    let resultado = a + b;
    c.forEach(function(n) {
        resultado += n;
    })
    return resultado;
}

console.log(sumar(1, 2))
console.log(sumar(1, 2, 3));
console.log(sumar(1, 2, 3, 4));
console.log(sumar(1, 2, 3, 4, 5))

/*operador Spread*/
//el operador spread genera una lista de valores a partir de un arreglo.
//se usa en el llamado de la funcion como parametro dado a la misma para relaizar una accion 

const ar1 = [1, 2, 3, 4, 5],
    ar2 = [6, 7, 8, 9, 10];

const ar3 = [...ar1, ...ar2];
console.log(ar3);