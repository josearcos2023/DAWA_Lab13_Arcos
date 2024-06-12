import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Libro {
  titulo:string;
  autor:string;
  categoria:string;
  ubicacion:string;
  precio:string;
}


@Injectable({
  providedIn: 'root'
})

export class ProductoService {

  private apiUrl = 'http://localhost:3000/libros';

  constructor(private http: HttpClient) { }

  getBooks(): Observable<Libro[]> {
    return this.http.get<Libro[]>(this.apiUrl);
  }

}
