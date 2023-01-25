import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})

export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Iroman', 'Hulk', 'Thorr']
  heroeBorrado: string | undefined = '';

  borrarHeroe(): void {
    this.heroeBorrado = this.heroes.shift()

  }
}
