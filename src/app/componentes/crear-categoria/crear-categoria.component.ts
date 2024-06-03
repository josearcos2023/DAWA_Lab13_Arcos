import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Categoria } from '../../models/categoria';


@Component({
  selector: 'app-crear-categoria',
  templateUrl: './crear-categoria.component.html',
  styleUrl: './crear-categoria.component.css'
})
export class CrearCategoriaComponent {

  categoriaForm: FormGroup;
  titulo = 'Crear categoria';

  constructor(private fb: FormBuilder){
    this.categoriaForm = this.fb.group({
      categoria: ['', Validators.required]
    })
  }

  ngOnInit(): void {}

  agregarCategoria() {
    const Categoria:Categoria = {
      categoria: this.categoriaForm.get('categoria')?.value,
      area: this.categoriaForm.get('area')?.value
    }
    console.log(Categoria);
    // console.log(this.CategoriaForm);
  }
}