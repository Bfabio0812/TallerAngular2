import { Component, computed, signal } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { FloatLabel } from 'primeng/floatlabel';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-ejemplo5',
  imports: [CardModule,ButtonModule,InputTextModule,FormsModule,FloatLabel,TableModule],
  templateUrl: './ejemplo5.component.html',
  styleUrl: './ejemplo5.component.scss'
})
export class Ejemplo5Component {

  precio = signal(0);
  IVAEnPorcentaje = signal(19);

  totalIva = computed(()=> this.precio() * (this.IVAEnPorcentaje()/100));
  total = computed(()=> this.precio() + this.totalIva());

  //lista de artículos

  listado = signal<any[]>([]);

  onInputUpdate(event: Event){
    const newValue = +(event.target as HTMLInputElement).value;
    this.precio.set(newValue);
  }

  onInputIvaUpdate(event: Event){
    const newValue = +(event.target as HTMLInputElement).value;
    this.IVAEnPorcentaje.set(newValue);
  }

  save(){
    if (this.precio() <= 0)return;
    this.listado.update((historial:any[]) =>{
      const item = {
        precio: this.precio(),
        ivaEnPorcentaje: this.IVAEnPorcentaje(),
        iva: this.totalIva(),
        total: this.total()
      }
      return [...historial, item];
    })
  }


}
