import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../../servicios/clientes.service';
import { Cliente } from '../../models/cliente';

@Component({
  selector: 'app-listar-cliente',
  templateUrl: './listar-clientes.component.html',
  styleUrls: ['./listar-clientes.component.css']
})
export class ListarClientesComponent implements OnInit {
  listClientes: Cliente[] = [];

  constructor(private clientesService: ClientesService) { }

  ngOnInit(): void {
    this.obtenerClientes();
  }

  obtenerClientes() {
    this.clientesService.getClientes().subscribe(
      data => {
        this.listClientes = data;
      },
      error => {
        console.error('Error al obtener clientes', error);
      }
    );
  }

  eliminarCliente(id: any) {
    this.clientesService.eliminarCliente(id).subscribe(data => {
        this.obtenerClientes();
      },
      error => {
        console.error('Error al eliminar cliente', error);
      }
    );
  }
}
