import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}
  nombres: string[] = [];
  nuevoNombre: string = '';

  agregarNombre() {
    if (this.nuevoNombre.trim()) {
      this.nombres.push(this.nuevoNombre.trim());
      this.nombres.sort(); // Ordena los nombres alfabéticamente
      this.nuevoNombre = ''; // Limpia el campo de entrada
    }

  }
  
}
