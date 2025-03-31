import { Component, computed, signal } from '@angular/core';
import { CardModule } from 'primeng/card';

import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-ejemplo4',
  imports: [CardModule, ButtonModule],
  templateUrl: './ejemplo4.component.html',
  styleUrl: './ejemplo4.component.scss'
})
export class Ejemplo4Component {

  contador = signal(0);
  contadorComputado = computed(() => this.contador() * 2);

  incrementar(){
    this.contador.update(valor => valor + 1)
  }

}
