import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  /*Para poder hacer privado el servicio se agregaron metodos en el MainPageComponent
    para poder acceder a los metodos y propiedades del servicio, estos por cuestion
    de seguridad no deben ser publicos.
  */
  constructor(private dbzService:DbzService){}

  get characters (): Character[]{
    return [...this.dbzService.characters];
  }

  onDeleteCharacter(id:string):void{
    this.dbzService.deleteCharacterById(id);
  }

  onNewCharacter(character:Character){
    this.dbzService.addCharacter(character);
  }
}
