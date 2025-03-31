import { Component, signal, computed } from '@angular/core';
import { products } from './products';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { FloatLabel } from 'primeng/floatlabel';
import { TableModule } from 'primeng/table';
import { max } from 'rxjs';



@Component({
  selector: 'app-ejemplo7',
  imports: [CardModule,
    ButtonModule,
    InputTextModule,
    FormsModule,
    FloatLabel,
    TableModule],
  templateUrl: './ejemplo7.component.html',
  styleUrl: './ejemplo7.component.scss'
})
export class Ejemplo7Component {
  readonly firstPage = 1;
  itemSPerPage = 5;

  searchInput = signal('');
  currentPage = signal(this.firstPage);

  isNextPageNotAvailable = computed(()=>{
    const filteredProducts = products
    .filter((product)=> product.title.toLowerCase().includes(this.searchInput().toLowerCase()))
    return filteredProducts.length  < (this.currentPage() + 1) * this.itemSPerPage;
  })

  filterProducts = computed(()=>{
    const startIndex = (this.currentPage() - 1) * this.itemSPerPage;
    const endIndex = startIndex + this.itemSPerPage;
    return products
    .filter(product => product.title.toLowerCase().includes(this.searchInput().toLowerCase()))
    .slice(startIndex, endIndex);
  })

  searchProduct(searchText: string){
   this.searchInput.set(searchText);
   if(this.currentPage() > this.firstPage){
    this.currentPage.set(this.firstPage);
   }
  }

  goToPrevPage(){
    this.currentPage.update( currentPage => Math.max(currentPage - 1, 1));
  }

  goToNextPage(){
    this.currentPage.update( currentPage => Math.min(currentPage + 1, this.itemSPerPage + 1));
  }


 }
