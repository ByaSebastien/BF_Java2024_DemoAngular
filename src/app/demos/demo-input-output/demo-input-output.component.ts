import { Component } from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-demo-input-output',
  templateUrl: './demo-input-output.component.html',
  styleUrl: './demo-input-output.component.scss',
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms ease-in', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('500ms ease-out', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class DemoInputOutputComponent {
  fruits: string[] = [
    'Pomme',
    'Poire',
    'Banane',
    'Kiwi',
    'Mangue',
  ];

  selectedFruit: string | undefined;

  selectFruit(fruit: string) {
    this.selectedFruit = fruit;
  }

  reactToUserResponse(wantToDelete: boolean) {
    if(wantToDelete){
      this.fruits.splice(this.fruits.indexOf(this.selectedFruit!),1);
    }
    this.selectedFruit = undefined;
  }
}
