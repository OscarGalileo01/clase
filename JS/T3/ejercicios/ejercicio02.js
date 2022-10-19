class Publicacion{
    constructor(Npag, editorial, titulo, precio){
        this.Npag = Npag,
        this.editorial = editorial,
        this.titulo = titulo,
        this.precio = precio
    }
}

class Libro extends Publicacion{
    constructor(tematica, autor, Npag, editorial, titulo, precio){
        super(Npag, editorial, titulo, precio)
        this.tematica = tematica,
        this.autor = autor
    }
}
class Libro extends Publicacion{
    constructor(coleccion, personaje, guion, Npag, editorial, titulo, precio){
        super(Npag, editorial, titulo, precio)
        this.coleccion = coleccion,
        this.personaje = personaje,
        this.guion = guion
    }
}