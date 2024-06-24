import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductoService } from '../../servicios/producto.service';
import { CategoriaService } from '../../servicios/categoria.service';
import { AutorService } from '../../servicios/autor.service';
import { Producto } from '../../models/producto';
import { Categoria } from '../../models/categoria';
import { Autor } from '../../models/autor';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.css']
})
export class EditarProductoComponent implements OnInit {
  productoForm: FormGroup;
  titulo = 'Editar Producto';
  categorias: Categoria[] = [];
  autores: Autor[] = [];
  productoId: string;

  constructor(
    private fb: FormBuilder,
    private productoService: ProductoService,
    private categoriaService: CategoriaService,
    private autorService: AutorService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.productoForm = this.fb.group({
      titulo: ['', Validators.required],
      autor_id: ['', Validators.required],
      categoria_id: ['', Validators.required],
      fecha_publicacion: ['', Validators.required],
      precio: ['', Validators.required],
    });
    
    this.productoId = this.route.snapshot.paramMap.get('id')!;
  }

  ngOnInit(): void {
    this.cargarCategorias();
    this.cargarAutores();
    this.cargarProducto();
  }

  cargarCategorias() {
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

  cargarProducto() {
    this.productoService.obtenerProducto(this.productoId).subscribe(
      producto => {
        this.productoForm.patchValue(producto);
      },
      error => {
        console.error('Error al obtener el producto', error);
      }
    );
  }

  editarProducto() {
    const PRODUCTO: Producto = this.productoForm.value;
    this.productoService.editarProducto(this.productoId, PRODUCTO).subscribe(
      () => {
        this.router.navigate(['/']);
      },
      error => {
        console.error('Error al editar el producto', error);
      }
    );
  }
}
