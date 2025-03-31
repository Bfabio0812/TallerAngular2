import { Component, signal } from '@angular/core';
import { CardModule } from 'primeng/card';

import { ButtonModule } from 'primeng/button';

import { InputTextModule } from 'primeng/inputtext';

import { FormsModule } from '@angular/forms';

import { FloatLabel } from 'primeng/floatlabel';

@Component({
  selector: 'app-ejemplo3',
  imports: [CardModule,
    ButtonModule,
    InputTextModule,
    FormsModule,
    FloatLabel],
  templateUrl: './ejemplo3.component.html',
  styleUrl: './ejemplo3.component.scss'
})
export class Ejemplo3Component {

campoHtml = signal(' ');

updateCampo(texto: string){
  this.campoHtml.set(texto);
}

}
