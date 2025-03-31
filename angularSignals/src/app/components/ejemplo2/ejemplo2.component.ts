import { Component, signal } from '@angular/core';
import { CardModule } from 'primeng/card';

import { ButtonModule } from 'primeng/button';


@Component({
  selector: 'app-ejemplo2',
  imports: [CardModule, ButtonModule],
  templateUrl: './ejemplo2.component.html',
  styleUrl: './ejemplo2.component.scss'
})
export class Ejemplo2Component {

  conteo = signal(0);

  constructor(){
    setInterval(() => {
      this.conteo.set(this.conteo()+1)}, 1000);
  }


}
