import { Component } from '@angular/core';

@Component({
  selector: 'app-demo-input-output',
  templateUrl: './demo-input-output.component.html',
  styleUrl: './demo-input-output.component.scss'
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
