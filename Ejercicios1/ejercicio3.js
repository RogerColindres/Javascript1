/* 9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
10) Programa una función que reciba un número y evalúe si es capicúa o no 
(que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.
11) Programa una función que calcule el factorial de un número 
(El factorial de un entero positivo n, se define como el producto de 
    todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120. */

const ejercicio9 = (a, b) => {
    console.log(Math.round(Math.random() * (a - b) + b))
}
let mayor = 600;
let menor = 501;

let numero = 3;

function ejercicio10(numero) {
    let numeroaString = numero.toString();
    let numeroinvertido = " ";
    let contador = numeroaString.length;
    if (numero === "" || typeof numero != "number") {
        console.log("El valor brindado no es un numero o esta vacio")
    } else {
        for (let i = numeroaString.length; i >= 0; i--) {
            numeroinvertido = numeroinvertido + numeroaString.charAt(contador);
            contador--;
        }
        if (numero === parseInt(numeroinvertido.trim())) {
            console.log(`El numero ${numero} si es un numero capicua`)
        } else {
            console.log(`El numero ${numero} no es un numero capicua`)
        }
    }

}

const ejercicio11 = (numero) => {
    let numero2 = numero;
    let factorial = 1;
    if (typeof numero != "number" || numero == "") {
        console.log("Valor a evaluar vacio o no es u numero")
    } else if (numero === 0) {
        console.log("El factorial de 0 es 0");
    } else {
        while (numero != 0) {
            factorial = factorial * numero;
            numero--;
        }
    }
    console.log(`El valor factorial de ${numero2} es: ${factorial}`);
}