import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Autor } from '../models/autor'; // Asegúrate de importar el modelo correcto de categoría

@Injectable({
  providedIn: 'root'
})
export class AutorService {

  private apiUrl = 'http://localhost:3000/autores'; // URL de tu API para categorías

  constructor(private http: HttpClient) { }

  // Método para obtener todas las categorías
  getAutores(): Observable<Autor[]> {
    return this.http.get<Autor[]>(this.apiUrl);
  }

  // Método para obtener una categoría por su ID
  getAutorById(id: string): Observable<Autor> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Autor>(url);
  }

  // Método para crear una nueva categoría
  crearAutor(autor: Autor): Observable<Autor> {
    return this.http.post<Autor>(this.apiUrl, autor);
  }

  // Método para actualizar una categoría existente
  actualizarAutor(id: string, autor: Autor): Observable<Autor> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Autor>(url, autor);
  }

  // Método para eliminar una categoría por su ID
  eliminarAutor(id: string): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }

}
