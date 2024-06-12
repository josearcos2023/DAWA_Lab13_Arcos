import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Producto } from '../../models/producto';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrl: './crear-producto.component.css'
})
export class CrearProductoComponent {

  productoForm: FormGroup;
  titulo = 'New book';

  constructor(private fb: FormBuilder){
    this.productoForm = this.fb.group({
      titulo: ['', Validators.required],
      autor: ['', Validators.required],
      categoria: ['', Validators.required],
      ubicacion: ['', Validators.required],
      precio: ['', Validators.required],
    })
  }

  ngOnInit(): void {}

  agregarProducto() {
    const PRODUCTO:Producto = {
      titulo: this.productoForm.get('titulo')?.value,
      autor: this.productoForm.get('autor')?.value,
      categoria: this.productoForm.get('categoria')?.value,
      ubicacion: this.productoForm.get('ubicacion')?.value,
      precio: this.productoForm.get('precio')?.value,
    }
    console.log(PRODUCTO);
    // console.log(this.productoForm);

  }
}
