import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categoria } from '../models/categoria'; // Asegúrate de importar el modelo correcto de categoría

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private apiUrl = 'http://localhost:3000/categorias'; // URL de tu API para categorías

  constructor(private http: HttpClient) { }

  // Método para obtener todas las categorías
  getCategorias(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(this.apiUrl);
  }

  // Método para obtener una categoría por su ID
  getCategoriaById(id: string): Observable<Categoria> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Categoria>(url);
  }

  // Método para crear una nueva categoría
  crearCategoria(categoria: Categoria): Observable<Categoria> {
    return this.http.post<Categoria>(this.apiUrl, categoria);
  }

  // Método para actualizar una categoría existente
  actualizarCategoria(id: string, categoria: Categoria): Observable<Categoria> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Categoria>(url, categoria);
  }

  // Método para eliminar una categoría por su ID
  eliminarCategoria(id: string): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }
}
