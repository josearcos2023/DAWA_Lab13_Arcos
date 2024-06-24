import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Cliente } from '../../models/cliente';
import { ClientesService } from '../../servicios/clientes.service';


@Component({
  selector: 'app-crear-clientes',
  templateUrl: './crear-clientes.component.html',
  styleUrl: './crear-clientes.component.css'
})

export class CrearClientesComponent {
  clienteForm: FormGroup;

  titulo = "Nuevo cliente";

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private clienteService: ClientesService
  ){
    this.clienteForm = this.fb.group({
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      dni: ['', Validators.required],
    })
  }

  ngOnInit(): void {};

  agregarCliente(){
    
    const CLIENTE:Cliente = {
      nombre: this.clienteForm.get('nombre')?.value,
      apellidos: this.clienteForm.get('apellidos')?.value,
      dni: this.clienteForm.get('dni')?.value,
    };

    this.clienteService.guardarCliente(CLIENTE).subscribe(
      (response) => {
          console.log('Cliente guardado:', response);
          this.router.navigate(['/listar-clientes']); 
      },
      (error) => {
          console.error('Error al guardar el cliente:', error);
      }
  );

    console.log(CLIENTE);
  }

}
