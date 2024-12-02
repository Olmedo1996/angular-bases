import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  standalone: false,

  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroes: string[] = ['Spiderman', 'Iroman', 'Hulk', 'Thor'];
  public deletedHero?: string;

  removeLastHero(): void {
    const deletedHero = this.heroes.pop();
    this.deletedHero = deletedHero;
  }
}
