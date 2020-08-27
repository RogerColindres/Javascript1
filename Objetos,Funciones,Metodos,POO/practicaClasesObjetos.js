class Libro {
    constructor(titulo, autor, año, genero) {
        this.titulo = titulo
        this.autor = autor
        this.año = año
        this.genero = genero
    }

    getResumenLibro() {
        return `${this.titulo} escrito por ${this.autor} en el año ${this.año} y pertenece al genero ${this.genero}`
    }

    getAutor() {
        return this.autor
    }

    getGenero() {
        return `${this.genero}`
    }
}

let libros = []

while (libros.length < 1) {
    let titulo = prompt('Introduca el titulo del libro')
    let autor = prompt('Introduca el autor del libro')
    let año = prompt('Introduca el año del libro')
    let genero = prompt('Introduca el genero del libro').toLowerCase()

    if (titulo != '' && autor != '' && !isNaN(año) && año.length == 4 && genero != '' &&
        (genero == 'aventura' || genero == 'terror' || genero == 'fantasia')
    ) {
        libros.push(new Libro(titulo, autor, año, genero))
    }
}

const mostrarLibros = () => {
    console.log(libros)
}

const mostrarAutores = () => {
        let autores = []
        for (const autor of libros)
            autores.push(autor.getAutor())
        console.log(autores.sort())
    }
    /*los metodos nos pueden ayudar al momento de obtener un valor de una llave especifica entre
    un grupo de objetos que pertenescan a una misma clase, ademas el mismo metodo nos puede servir para obtener 
    objetos dentro de un arreglo*/

const mostrarGenero = () => {
    const busqueda = prompt('introdusca el genero a buscar')
    console.log('hola')

    for (const nuevoautor of libros) {
        if (nuevoautor.getGenero() == busqueda) {
            console.log(nuevoautor.getResumenLibro())
        }
    }


    console.log('hola2')
}