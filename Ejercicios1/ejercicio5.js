/* 15) Programa una función para convertir números de base binaria a decimal y viceversa, 
pe. miFuncion(100,2) devolverá 4 base 10.
16) Programa una función que devuelva el monto final después de aplicar un descuento 
a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.
17) Programa una función que dada una fecha válida determine 
cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) 
devolverá 35 años (en 2020). */



function ejecicio15(numero, base) {
    switch (base) {
        case 2:
            let binario = numero; //4 en decimal
            let resultadodecimal = 0;
            let numeroinvertido = " ";
            let binarioString = binario.toString()
            let contador = binarioString.length;
            for (let i = binarioString.length; i >= 0; i--) {
                numeroinvertido = numeroinvertido + binarioString.charAt(contador);
                contador--;
            }
            for (let i = 0; i < binarioString.length; i++) {
                resultadodecimal = resultadodecimal + (parseInt(numeroinvertido.trim()[i] * (Math.pow(2, i))));
            }
            console.log(resultadodecimal);
            break;
        case 10:
            let decimal = numero;
            let decimalString = "";
            let respuestadecimal = "";


            while (decimal >= 1) {
                decimalString = decimalString + (decimal % 2).toString();
                decimal = decimal / 2;
            }

            let contador2 = decimalString.length;
            for (let i = decimalString.length; i >= 0; i--) {
                respuestadecimal = respuestadecimal + decimalString.charAt(contador2);
                contador2--;
            }

            console.log(parseInt(respuestadecimal.trim()));
            break;

        default:
            console.log("prpgrama terminado")
            break;
    }

}

function ejercicio16(monto, descuento) {
    let descontar = (descuento / 100) * monto;
    let totalPagar = monto - descontar;
    console.log(totalPagar);
}


let fecha = new Date(1991, 3, 21);
console.log(fecha);