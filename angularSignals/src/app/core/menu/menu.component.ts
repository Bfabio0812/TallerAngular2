import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Menubar } from 'primeng/menubar';



@Component({
  selector: 'app-menu',
  imports: [Menubar],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})


export class MenuComponent implements OnInit {
  items: MenuItem[] | undefined;


  ngOnInit(): void {
    this.items = [

      {
      label: 'Home',
      icon: 'pi pi-home'
      },
      {
      label: 'Ejemplo senales',
      icon: 'pi pi-star',
      items:[
        {
          label: 'Ejemplo 1',
          icon: 'pi-wave-pulse',
          routerLink: ['/ejemplo1']
        },
        {
          label: 'Ejemplo 2',
          icon: 'pi-wave-pulse',
          routerLink: ['/ejemplo2']
        },
        {
          label: 'Ejemplo 3',
          icon: 'pi-wave-pulse',
          routerLink: ['/ejemplo3']
        },
        {
          label: 'Ejemplo 4',
          icon: 'pi-wave-pulse',
          routerLink: ['/ejemplo4']
        },
        {
          label: 'Ejemplo 5',
          icon: 'pi-wave-pulse',
          routerLink: ['/ejemplo5']
        },
        {
          label: 'Ejemplo 6',
          icon: 'pi-wave-pulse',
          routerLink: ['/ejemplo6']
        },



        {
          label: 'Ejemplo 7',
          icon: 'pi-wave-pulse',
          routerLink: ['/ejemplo7']
        },

        {
          label: 'carrito de compra',
          icon: 'pi-wave-pulse',
          routerLink: ['/cart']
        },

        {
          label: 'Ejemplo 8',
          icon: 'pi-wave-pulse',
          routerLink: ['/ejemplo8']
        },




      ]


      },



      ]
  }

}
