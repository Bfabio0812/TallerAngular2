import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { MenuComponent } from "./core/menu/menu.component";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ButtonModule, MenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angularSignals';
}
