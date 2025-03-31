import { Component, computed, signal } from '@angular/core';
import { Dialog } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { products } from '../ejemplo7/products';
import { CardModule } from 'primeng/card';

interface Producto {
  id: number,
  title: string,
  description: string,
  price: number,
  discountPercentage: number,
  rating: number,
  stock: number,
  brand: string,
  category: string,
  thumbnail: string
  }

@Component({
  selector: 'app-cart',
  imports: [Dialog, ButtonModule, CardModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})

export class CartComponent {

   visible: boolean = false;

   productos = signal<Producto[]>(products);
   cart = signal<Producto[]>([]);

   totalPrice = computed(() => {
     return this.cart().reduce((acc, curr)=> acc + curr.price, 0);
   })

   selectedPrductsIds = computed(() => {
     return this.cart().map((producto)=> producto.id);
   })

   removeFromCart(producto: Producto) {
     this.cart.update((prts) => {
       return prts.filter((i)=> i.id !== producto.id);
     }
     )
   }

   addToCart(producto: Producto) {
     this.cart.update(productos => [...productos, producto]);
   }

   showDialog() {
       this.visible = true;
   }


}
