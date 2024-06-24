import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from '../models/cliente';

@Injectable({
  providedIn: 'root'
})

export class ClientesService {

  url2 = 'http://localhost:3000/clientes';

  constructor(private http: HttpClient){};

  getClientes(): Observable<any> {
    return this.http.get(this.url2);
  }

  eliminarCliente(id: number): Observable<any> {
    return this.http.delete(`${this.url2}/${id}`);
  }

  guardarCliente(cliente: Cliente): Observable<any> {
    return this.http.post(this.url2, cliente);
  }

  obtenerCliente(id:string): Observable<any> {
    return this.http.get(`${this.url2}/${id}`);
  }

  editarCliente(id: string, cliente: Cliente): Observable<any> {
    return this.http.put(`${this.url2}/${id}`, cliente);
  }
}
