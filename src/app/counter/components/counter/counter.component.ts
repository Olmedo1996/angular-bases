import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: false,

  template:`
    <h3>Counter: {{ counter }}</h3>
    <button class="btn btn-primary" (click)="increaseBy(1)">+1</button>
    <button class="btn btn-primary mx-2" (click)="increaseBy(-1)">-1</button>
  `,
})
export class CounterComponent {
  public counter: number = 10;

  increaseBy(value: number): void {
    this.counter += value;
  }
}
