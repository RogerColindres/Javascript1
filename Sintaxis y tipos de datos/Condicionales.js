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