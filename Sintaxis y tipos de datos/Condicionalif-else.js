/*if-else*/

let num = -0;

if (num > 0) {
    console.log(`${num} es mayor que cero`);
} else if (num == 0) {
    console.log(`${num} es igual que cero`);
} else {
    console.log(`${num} es menor que cero`);
}

let num1 = 0;
let num2 = 0;

/*operadores logicos*/
//&& and (y)
//|| or (o)
//== comparación

if (num1 > 0) {
    if (num2 > 0) {
        console.log(`${num1} y ${num2} son mayores que cero`);

    } else if (num2 < 0) {
        console.log(`${num1} es mayor que cero y ${num2} no es mayor a cero`);

    } else {
        console.log(`${num1} es mayor que cero y ${num2} es igual que cero`);
    }
} else if (num1 < 0) {
    if (num2 > 0) {
        console.log(`${num1} es menor que cero y ${num2} es mayor que cero`);

    } else if (num2 < 0) {
        console.log(`${num1} y ${num2} son menores a cero`);

    } else {
        console.log(`${num1} es menor que cero y ${num2} es igual que cero`);
    }
} else {
    if (num2 > 0) {
        console.log(`${num1} es igual que cero y ${num2} es mayor que cero`);

    } else if (num2 < 0) {
        console.log(`${num1} es igual que cero y ${num2} es menor a cero`);

    } else {
        console.log(`${num1} y ${num2} son iguales a cero`);
    }
}

/*condicional con string*/

let word = "hola";

if (word.length > 4) {
    console.log(`${word} tiene mas 4 letras`);
} else if (word.length < 4) {
    console.log(`${word} tiene menos 4 letras`);
} else {
    console.log(`${word} solo tiene 4 letras`);
}

//ejercicio ordenar 3 numeros

const numeros = document.getElementById("numeros");
const resultado = document.getElementById("resultado");

let a = prompt("Introdusca el primer numero");
let b = prompt("Introdusca el segundo numero");
let c = prompt("Introdusca el tercer numero");

numeros.textContent = `Los numeros introducidos son ${a}, ${b}, ${c}`;

/*desarrollo del ejercicio*/

if (a >= b && a >= c) {
    if (b > c) {
        resultado.textContent = `El orden es ${a}, ${b}, ${c}`;
    } else {
        resultado.textContent = `El orden es ${a}, ${c}, ${b}`;
    }
} else if (b >= a && b >= c) {
    if (a > c) {
        resultado.textContent = `El orden es ${b}, ${a}, ${c}`;
    } else {
        resultado.textContent = `El orden es ${b}, ${c}, ${a}`;
    }
} else if (c >= a && c >= b) {
    if (a > b) {
        resultado.textContent = `El orden es ${c}, ${a}, ${b}`;
    } else {
        resultado.textContent = `El orden es ${c}, ${b}, ${a}`;
    }
}