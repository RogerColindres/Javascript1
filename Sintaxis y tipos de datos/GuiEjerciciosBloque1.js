/* 1 - Solicita un nombre, la edad y muestra por consola el mensaje "Hola ____, tienes ____ años y el año que viene tendrás ____ años" Realiza el ejercicio con prompt(mensaje) y haz uso de los template strings

2 - Escribe un programa que pueda calcular el área de 3 figuras geométricas, triángulo, rectángulo y círculo. En primer lugar pregunta de qué figura se quiere calcular el área, después solicita los datos que necesites para calcularlo. triángulo = b * h/2 rectángulo = b * h círculo = π * r2 (pi * radio al cuadrado)

3 - Solicita un número e imprime todos los números pares e impares desde 1 hasta ese número con el mensaje "es par" o "es impar" si el número es 5 el resultado será: 1 - es impar 2 - es par 3 - es impar 4 - es par 5 - es impar

4 - Escribe un programa que pida un número entero mayor que 1 y que escriba si el número primo o no. Un número primo es aquel que solo es divisible por sí mismo y la unidad

5 - Escriba un programa que pida un número entero mayor que cero y calcule su factorial. El factorial es el resultado de multiplicar ese número por sus anteriores hasta la unidad.

!5 = 5*4*3*2*1 = 120
6 - Escribe un programa que permita ir introduciendo una serie indeterminada de números mientras su suma no supere 50. Cuando esto ocurra, se debe mostrar el total acumulado y el contador de cuantos números se han introducido

7 - Crea 3 arrays. El primero tendra 5 números y el segundo se llamará pares y el tercero impares, ambos estarán vacíos. Después multiplica cada uno de los números del primer array por un número aleatorio entre 1 y 10, si el resultado es par guarda ese número en el array de pares y si es impar en el array de impares. Muestra por consola: -la multiplicación que se produce junto con su resultado con el formato 2 x 3 = 6 -el array de pares e impares

8 - Dado un array de letras, solicita un número de DNI y calcula que letra le corresponde. El número no puede ser negativo ni tener más de 8 dígitos. La posición de la letra es el resultado del módulo del número introducido entre 23

const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

9 - Solicitar al usuario una palabra y mostrar por consola el número de consonantes, vocales y longitud de la palabra.

10 - Dado un array que contiene ["azul", "amarillo", "rojo", "verde", "rosa"] determinar si un color introducido por el usuario a través de un prompt se encuentra dentro del array o no. */

/*desarrollo*/

//1
/* let nombre = prompt('Ingrese su nombre y apellido');
let edad = prompt('Ingrese su edad');

console.log(`Hola ${nombre}, tienes ${edad} años y el año que vienen tendras ${parseInt(edad,10)+1} años`); */

/*la funcion prompt devuelve un string*/

//2 
/* let consulta = prompt('¿Qué figura desea calcular su área? ¿Triangulo,Rectangulo, Circulo?');

switch (consulta) {
    case 'triangulo':
        let base = parseInt(prompt('Base'), 10);
        let Altura = parseInt(prompt('Altura'), 10);
        let areaTriangulo = (base * Altura) / 2;
        console.log(`El area del triangulo es: ${areaTriangulo}`);
        break;
    case 'rectangulo':
        let baseRec = parseInt(prompt('Base'), 10);
        let AlturaRec = parseInt(prompt('Altura'), 10);
        let areaRectangulo = (base * Altura);
        console.log(`El area del rectangulo es: ${areaRectangulo}`);
        break;
    case 'circulo' || 'Circulo':
        let radio = parseInt(prompt('Radio'), 10);
        let areaCirculo = (Math.PI * Math.pow(radio, 2));
        console.log(`El area del circulo es: ${areaCirculo}`);
        break;
    default:
        console.log('La opcion ingresada no es valida');

} */

//3
/* let numero = parseInt(prompt('ingrese el numero a evaluar'), 10);

for (let i = 1; i <= numero; i++) {
    if (i % 2 == 0) {
        console.log(`${i} - es par`)
    } else {
        console.log(`${i} - es impar`)
    }
} */

//4 

/* let numero = parseInt(prompt('Introduce un numero'));
let divisores = 0;

if (numero === 1) {
    console.log('El numero 1 no es valido, no es primo');
} else {
    for (let i = 2; i < numero; i++) {
        if (numero % i == 0) {
            console.log(`${numero} / ${i} = ${numero/i} no es primo`);
            divisores++;
            break;
        }
    }

}

if (divisores == 0) console.log(`${numero} es primo`); */

//5 

/* let numero = parseInt(prompt('ingrese el numero a calcular factorial'), 10);
let factorial = 1;

while (numero != 0) {
    factorial = factorial * numero;
    numero--;
}
console.log(factorial); */

//6
/* 
let suma = 0;
let contandor = 0;
while (suma <= 50) {
    let numero = parseInt(prompt('introduce un numero'), 10);
    if (numero > 0) {
        suma = suma + numero;
        contandor++;
    } else {
        console.error('introdusca de nuevo un muero no negativo');
    }
}

console.log(suma);
console.log(contandor); */

//7

/* let numeros = [1, 2, 3, 4, 5];
let pares = [];
let impares = [];

for (let i = 0; i < numeros.length; i++) {
    let numero = numeros[i];
    let aleatorio = (Math.round(Math.random() * (11 - 1) + 1));
    numeros[i] = numeros[i] * aleatorio;
    console.log(`${numero} X ${aleatorio} = ${numeros[i]}`);

    if (numeros[i] % 2 == 0) {
        pares.push(numeros[i]);
    } else {
        impares.push(numeros[i]);
    }

}
console.log(pares);
console.log(impares); */

//8 dudas 

/* const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D',
    'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'
]

const dni = prompt('Introduce tu DNI')

if (dni.length == 8 && parseInt(dni) > 0) {
    console.log(`Tu DNI completo es ${dni}${letras[dni%23]}`)
}
 */

//9 
/* let palabras = prompt('introduca una palabra');
let consonantes = 0;
let vocales = 0;

for (let palabra of palabras) {
    if (palabra == 'a' || palabra == 'e' || palabra == 'i' || palabra == 'o' || palabra == 'u') {
        vocales++;
    } else {
        consonantes++;
    }
}

console.log(`la longitud de la palabra es: ${palabras.length} letras`);
console.log(`el numero de vales son: ${vocales}`);
console.log(`el numero de consonantes son: ${consonantes}`); */

//10 
/* let colores = ["azul", "amarillo", "rojo", "verde", "rosa"];
let busqueda = prompt('introdusca el color que desea buscar');

if (colores.indexOf(busqueda) == 0) {
    console.log('El color buscado existe dentro del arreglo');
} else {
    console.log('El color buscado no existe dentro del arreglo');
} */