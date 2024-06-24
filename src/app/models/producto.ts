export class Producto {

    libro_id?: number;
    titulo: string;
    autor_id:number;
    categoria_id:number;
    fecha_publicacion:string;
    precio:number;

    constructor(titulo:string,autor_id:number,categoria_id:number,fecha_publicacion:string,precio:number){
        this.titulo=titulo;
        this.autor_id=autor_id;
        this.categoria_id=categoria_id;
        this.fecha_publicacion=fecha_publicacion;
        this.precio=precio;
    }
}