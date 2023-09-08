import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public characterList: Character[]= [{
    name: 'Trunks',
    power: 10
}]

@Output()
public onDelete:EventEmitter<string> = new EventEmitter();
//onDelete = index value:number


onDeleteCharacter(id?:string):void{
  // emitir el id del personaje
  console.log(id);
  if (!id) return;
  this.onDelete.emit(id);
}

}
