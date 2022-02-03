import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

    heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor','Capitan America'];
    aux: string = '';


    borrarHeroe()
    {
      if( this.heroes.length > 0)
      {
        this.aux =  this.heroes.shift() as string;
      }
      else 
      {
        this.aux = 'Ya no quedan heroes por borrar';
      }
        
      
    }


}
