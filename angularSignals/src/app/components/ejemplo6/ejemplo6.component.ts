import { Component, signal, effect, untracked} from '@angular/core';
import { CardModule } from 'primeng/card';

import { ButtonModule } from 'primeng/button';


@Component({
  selector: 'app-ejemplo6',
  imports: [CardModule,ButtonModule],
  templateUrl: './ejemplo6.component.html',
  styleUrl: './ejemplo6.component.scss'
})
export class Ejemplo6Component {

  contador = signal(1);
  contador2 = signal(1);

  contadorEffect = effect(() => {
    console.log(this.contador(), untracked(()=> this.contador2()));
  });

  updateContador() {
    this.contador.update(valor => valor + 1);
  }

  updateContador2() {
    this.contador2.update(valor => valor + 1);
  }


}
