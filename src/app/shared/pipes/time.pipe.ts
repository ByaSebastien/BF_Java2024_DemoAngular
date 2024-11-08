import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {

  transform(secondes: number): string {
    let hours = Math.floor(secondes / 3600) % 24;
    secondes = secondes % 3600;
    let minutes = Math.floor(secondes / 60);
    secondes = secondes % 60;
    return `${hours.toString().padStart(2,'0')}:${minutes.toString().padStart(2,'0')}:${secondes < 10 ? '0' : ''}${secondes}`;
  }
}
