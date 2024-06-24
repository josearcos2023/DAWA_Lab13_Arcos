import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})

export class ProductoService {

  url2 = 'http://localhost:3000/libros';

  constructor(private http: HttpClient){};

  getProductos(): Observable<any> {
    return this.http.get(this.url2);
  }

  eliminarProducto(id: number): Observable<any> {
    return this.http.delete(`${this.url2}/${id}`);
  }

  guardarProducto(producto: Producto): Observable<any> {
    return this.http.post(this.url2, producto);
  }

  obtenerProducto(id:string): Observable<any> {
    return this.http.get(`${this.url2}/${id}`);
  }

  editarProducto(id: string, producto: Producto): Observable<any> {
    return this.http.put(`${this.url2}/${id}`, producto);
  }
}
