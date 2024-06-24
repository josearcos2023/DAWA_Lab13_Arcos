import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientesService } from '../../servicios/clientes.service';
import { Cliente } from '../../models/cliente';

@Component({
  selector: 'app-editar-clientes',
  templateUrl: './editar-clientes.component.html',
  styleUrls: ['./editar-clientes.component.css']
})
export class EditarClientesComponent implements OnInit {
  clienteForm: FormGroup;
  clienteId: string;

  constructor(
    private fb: FormBuilder,
    private clienteService: ClientesService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.clienteForm = this.fb.group({
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      dni: ['', [Validators.required, Validators.pattern('^[0-9]{8}$')]] 
    });
    this.clienteId = this.route.snapshot.paramMap.get('id')!;
  }

  ngOnInit(): void {

    this.clienteService.obtenerCliente(this.clienteId).subscribe(
      (cliente: Cliente) => {
        this.clienteForm.patchValue(cliente); 
      },
      error => {
        console.error('Error al obtener el cliente para editar', error);
      }
    );
  }

  editarCliente() {
    const clienteActualizado: Cliente = this.clienteForm.value;
    this.clienteService.editarCliente(this.clienteId, clienteActualizado).subscribe(
      () => {
        this.router.navigate(['/listar-clientes']);
      },
      error => {
        console.error('Error al editar el cliente', error);
      }
    );
  }
}
