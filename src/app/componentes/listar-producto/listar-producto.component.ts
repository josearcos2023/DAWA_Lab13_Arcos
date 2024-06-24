import { Component } from '@angular/core';
import { ProductoService } from '../../servicios/producto.service';
import { Producto } from '../../models/producto';

import { Categoria } from '../../models/categoria';
import { Autor } from '../../models/autor';

import { CategoriaService } from '../../servicios/categoria.service';
import { AutorService } from '../../servicios/autor.service';

@Component({
  selector: 'app-listar-producto',
  templateUrl: './listar-producto.component.html',
  styleUrl: './listar-producto.component.css'
})

export class ListarProductoComponent {

  categorias: Categoria[] = [];
  autores: Autor[] = [];

  listProductos: Producto[]=[];
  constructor(
    private _productoService: ProductoService,
    private categoriaService: CategoriaService,
    private autorService: AutorService,
  ){};

  ngOnInit(): void{
    this.obtenerProductos();
    this.cargarCategorias();
    this.cargarAutores();

  }

  obtenerProductos() {
    this._productoService.getProductos().subscribe(data => {
      console.log(data);
      this.listProductos = data;
    }, error =>{
      console.log(error);
    })
  }

  getNombreAutor(autorId: number): string {
    const autor = this.autores.find(a => a.autor_id == autorId);
    return autor ? autor.nombre : 'Autor Desconocido';
  }

  getNombreCategoria(categoriaId: number): string {
    const categoria = this.categorias.find(c => c.categoria_id == categoriaId);
    return categoria ? categoria.categoria_name : 'Categoría Desconocida';
  }

  eliminarProducto(id:any){
    this._productoService.eliminarProducto(id).subscribe(data => {
      this.obtenerProductos();
    }, error => {
      console.log(error);
    })
  }

  cargarCategorias() {
    this.categoriaService.getCategorias().subscribe(
      categorias => {
        console.log('Categorias:', categorias);
        this.categorias = categorias;
      },
      error => {
        console.error('Error al obtener categorías', error);
      }
    );
  }

  cargarAutores() {
    this.autorService.getAutores().subscribe(
      autores => {
        console.log('Autores:', autores);
        this.autores = autores;
      },
      error => {
        console.error('Error al obtener autores', error);
      }
    );
  }

  

}