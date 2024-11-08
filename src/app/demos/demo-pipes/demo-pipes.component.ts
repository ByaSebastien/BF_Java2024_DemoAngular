import { Component } from '@angular/core';

@Component({
  selector: 'app-demo-pipes',
  templateUrl: './demo-pipes.component.html',
  styleUrl: './demo-pipes.component.scss'
})
export class DemoPipesComponent {

  text: string = "This Is Angular!!!";
  nb: number = 42.3526554614546;
  today: Date = new Date();
  temperature: number = 42;
}
