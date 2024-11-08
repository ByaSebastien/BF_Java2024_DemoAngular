import { Component } from '@angular/core';

@Component({
  selector: 'app-demo-directives',
  templateUrl: './demo-directives.component.html',
  styleUrl: './demo-directives.component.scss'
})
export class DemoDirectivesComponent {

  i: number = 0;
  myColors : string[] = ['darkred', 'darkgreen', 'darkblue', 'goldenrod']
  myColor: string = 'darkred';

  isBold: boolean = false;
  isBig: boolean = false;
  isItalic: boolean = false;

  constructor() {
    setInterval(() => {
      this.myColor = this.myColors[this.i++ % this.myColors.length];
    },750);
  }

  toggleIsBold(): void {
    this.isBold = !this.isBold;
  }

  toggleIsBig(): void {
    this.isBig = !this.isBig;
  }

  toggleIsItalic(): void {
    this.isItalic = !this.isItalic;
  }
}
