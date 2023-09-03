import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `<h1>Holiwis</h1>
  <h3>Counter: {{counter}}</h3>

  <button (click)="increaseBy(1)">+1</button>
  <br><br>
  <button (click)="increaseBy(-1)">-1</button>
  <br><br>
  <button (click)="reset()">Reset</button>
  `
})

export class CounterComponent {
  public counter = 15;

  increaseBy(value:number): void{
    this.counter += value;
  }

  reset():void{
    this.counter = 15;
  }





}
