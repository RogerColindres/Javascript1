try {
    console.log("En el TRY se agrega el codigo a evaluar")
    noExiste;
    console.log("Segundo mensaje del TRY")
} catch (error) {
    console.log("CATCH Captura cualquier error surgido o lanzado en el TRY")
    console.log(error)
} finally {
    console.log("FINALLY se ejecutara siempre al final de un bloque TRY-CATCH")
}

try {
    let numero = "a";
    if (isNaN(numero)) {
        throw new Error("El caracter introducido no es un numero");
    }
    console.log(numero * numero)
} catch (error) {
    console.log(`Se produjo el siguiente error: ${error}`);
}