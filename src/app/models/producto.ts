export class Producto {

    _id?: number;
    titulo: string;
    autor:string;
    categoria:string;
    ubicacion:string;
    precio:number;

    constructor(titulo:string,autor:string,categoria:string,ubicacion:string,precio:number){
        this.titulo=titulo;
        this.autor=autor;
        this.categoria=categoria;
        this.ubicacion=ubicacion;
        this.precio=precio;
    }

}