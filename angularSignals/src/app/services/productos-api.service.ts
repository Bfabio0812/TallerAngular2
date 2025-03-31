import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from './producto.model'; // importa bien

@Injectable({
  providedIn: 'root'
})
export class ProductosApiService {
  private apiUrl = 'http://localhost:3000/productos';

  constructor(private http: HttpClient) {}

  getProductos() {
    return this.http.get<Producto[]>(this.apiUrl); // aquí es importante el tipo
  }

  crearProducto(producto: Producto) {
    return this.http.post<Producto>(this.apiUrl, producto);
  }
}