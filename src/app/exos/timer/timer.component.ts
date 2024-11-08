import { Component } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.scss'
})
export class TimerComponent {

  secondes: number = 0;
  timer: any;

  start(): void{
    if(this.timer){
      return;
    }
    this.timer = setInterval(() => this.secondes++,1000);
  }

  pause(): void{
    if(!this.timer){
      return;
    }
    clearInterval(this.timer);
    this.timer = null;
  }

  reset(): void{
    if(this.secondes <= 0 && !this.timer){
      return;
    }
    this.pause();
    this.secondes = 0;
  }
}
