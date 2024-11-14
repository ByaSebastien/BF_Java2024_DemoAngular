// Importing the Pipe and PipeTransform interfaces from Angular core.
// Pipe allows creating custom pipes, while PipeTransform defines the transformation logic.
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temp'
  /*
   * The 'name' property specifies the name of the pipe.
   * This pipe can be used in templates with the syntax: {{ value | temp:conversionType }}
   */
})
export class TempPipe implements PipeTransform {
  /*
   * The TempPipe class implements the PipeTransform interface,
   * ensuring that the transform method is defined for the pipe.
   */

  transform(value: number, temp: 'CF' | 'FC' | 'CK' | 'KC' | 'FK' | 'KF'): string {
    /*
     * The transform method is called when the pipe is used in a template.
     * Parameters:
     * - value: The number (temperature) to be transformed.
     * - temp: A string indicating the conversion type, where:
     *   - 'CF': Celsius to Fahrenheit.
     *   - 'FC': Fahrenheit to Celsius.
     *   - 'CK': Celsius to Kelvin.
     *   - 'KC': Kelvin to Celsius.
     *   - 'FK': Fahrenheit to Kelvin.
     *   - 'KF': Kelvin to Fahrenheit.
     * Returns:
     * - A string representing the converted temperature with the corresponding unit.
     */

    switch(temp) {
      case 'CF': // Convert Celsius to Fahrenheit
        return Math.round((value * 9/5) + 32) + ' F°';
      case 'FC': // Convert Fahrenheit to Celsius
        return Math.round((value - 32) * 5/9) + ' C°';
      case 'CK': // Convert Celsius to Kelvin
        return Math.round(value + 273.15) + ' K';
      case 'KC': // Convert Kelvin to Celsius
        return Math.round(value - 273.15) + ' C°';
      case 'FK': // Convert Fahrenheit to Kelvin
        return Math.round((value - 32) * 5/9 + 273.15) + ' K';
      case 'KF': // Convert Kelvin to Fahrenheit
        return Math.round((value - 273.15) * 9/5 + 32) + ' F°';
    }
  }
}
