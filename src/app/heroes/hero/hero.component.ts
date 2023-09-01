import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent  {

  public name: string = 'ironman';
  public age: number = 45;

  get capitalizadName():string{
      return this.name.toUpperCase();
  }

  getHeroDescriptio(): string{
    return `${this.name} - ${this.age}`;
  }

  changeHero():void{
    this.name = 'Sipder man';
  }

  changeAge():void{
    this.age = 21;
  }

}
