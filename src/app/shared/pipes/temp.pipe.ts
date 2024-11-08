import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temp'
})
export class TempPipe implements PipeTransform {

  transform(value: number, temp: 'CF' | 'FC' | 'CK' | 'KC' | 'FK' | 'KF'): string {
    switch(temp) {
      case 'CF' :
        return Math.round((value * 9/5) + 32) + ' F°';
      case 'FC' :
        return Math.round((value - 32) * 5/9) + ' C°';
      case 'CK' :
        return Math.round(value + 273.15) + ' K';
      case 'KC' :
        return Math.round(value - 273.15) + ' C°';
      case 'FK' :
        return Math.round((value - 32) * 5/9 + 273.15) + ' K';
      case 'KF' :
        return Math.round((value - 273.15) * 9/5 + 32) + ' F°';
    }
  }

}
