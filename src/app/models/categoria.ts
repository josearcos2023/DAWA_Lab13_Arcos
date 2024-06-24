export class Categoria {

    categoria_id?: number;
    categoria_name:string;
    descripcion:string;

    constructor(categoria_name:string,descripcion:string){
        this.categoria_name=categoria_name;
        this.descripcion=descripcion;
    }

}