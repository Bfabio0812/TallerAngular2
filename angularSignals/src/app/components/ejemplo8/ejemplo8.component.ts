import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { TableModule } from 'primeng/table';

import { ProductosApiService } from '../../services/productos-api.service';
import { Producto } from '../../services/producto.model';

@Component({
  selector: 'app-ejemplo8',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    CardModule,
    ButtonModule,
    InputTextModule,
    FloatLabelModule,
    TableModule
  ],
  templateUrl: './ejemplo8.component.html',
  styleUrls: ['./ejemplo8.component.scss']
})
export class Ejemplo8Component implements OnInit {
  productos: Producto[] = [];

  nuevoProducto: Producto = {
    title: '',
    description: '',
    price: 0,
    discountPercentage: 0,
    rating: 0,
    stock: 0,
    brand: '',
    category: '',
    thumbnail: ''
  };

  campos = [
    { label: 'Título', prop: 'title' },
    { label: 'Descripción', prop: 'description' },
    { label: 'Descuento (%)', prop: 'discountPercentage' },
    { label: 'Precio', prop: 'price' },
    { label: 'Rating', prop: 'rating' },
    { label: 'Stock', prop: 'stock' },
    { label: 'Marca', prop: 'brand' },
    { label: 'Categoría', prop: 'category' },
    { label: 'URL de imagen', prop: 'thumbnail' }
  ];

  constructor(private productosService: ProductosApiService) {}

  ngOnInit(): void {
    this.obtenerProductos();
  }

  obtenerProductos() {
    this.productosService.getProductos().subscribe((data) => {
      this.productos = data;
    });
  }

  convertirValor(prop: string, valor: any) {
    if (['price', 'discountPercentage', 'rating', 'stock'].includes(prop)) {
      (this.nuevoProducto as any)[prop] = Number(valor);
    } else {
      (this.nuevoProducto as any)[prop] = valor;
    }
  }

  guardarProducto() {
    this.productosService.crearProducto(this.nuevoProducto).subscribe({
      next: () => {
        this.obtenerProductos();
        this.nuevoProducto = {
          title: '',
          description: '',
          price: 0,
          discountPercentage: 0,
          rating: 0,
          stock: 0,
          brand: '',
          category: '',
          thumbnail: ''
        };
      },
      error: (err) => {
        console.error('Error al crear producto:', err);
      }
    });
  }
}