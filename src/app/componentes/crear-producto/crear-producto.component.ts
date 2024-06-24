import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Producto } from '../../models/producto';
import { Categoria } from '../../models/categoria';
import { Autor } from '../../models/autor';

import { CategoriaService } from '../../servicios/categoria.service';
import { AutorService } from '../../servicios/autor.service';
import { ProductoService } from '../../servicios/producto.service';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrl: './crear-producto.component.css'
})
export class CrearProductoComponent {

  productoForm: FormGroup;
  categorias: Categoria[] = [];
  autores: Autor[] = [];

  titulo = 'Nuevo libro';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private categoriaService: CategoriaService,
    private autorService: AutorService,
    private productoService: ProductoService
  ){
    this.productoForm = this.fb.group({
      titulo: ['', Validators.required],
      autor_id: ['', Validators.required],
      categoria_id: ['', Validators.required],
      fecha_publicacion: ['', Validators.required],
      precio: ['', Validators.required],
    })
  }

  ngOnInit(): void {
    this.cargarCategorias();
    this.cargarAutores();
  }

  cargarCategorias(){
    this.categoriaService.getCategorias().subscribe(
      categorias => {
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
        this.autores = autores;
      },
      error => {
        console.error('Error al obtener autores', error);
      }
    );
  }

  agregarProducto() {
    const PRODUCTO:Producto = {
      titulo: this.productoForm.get('titulo')?.value,
      autor_id: this.productoForm.get('autor_id')?.value,
      categoria_id: this.productoForm.get('categoria_id')?.value,
      fecha_publicacion: this.productoForm.get('fecha_publicacion')?.value,
      precio: this.productoForm.get('precio')?.value,

    };

    this.productoService.guardarProducto(PRODUCTO).subscribe(
      (response) => {
          console.log('Producto guardado:', response);
          // Puedes redirigir a la pantalla general aquí si es necesario
          this.router.navigate(['/']); // Ejemplo de redirección
      },
      (error) => {
          console.error('Error al guardar el producto:', error);
      }
  );

    console.log(PRODUCTO);

    

  }

  
}
