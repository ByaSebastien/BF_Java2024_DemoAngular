// Importing Pipe and PipeTransform from Angular core.
// Pipe is used to define custom pipes, while PipeTransform ensures the implementation of transformation logic.
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toFahrenheit'
  /*
   * The 'name' property specifies the name of the pipe.
   * This pipe can be used in templates with the syntax: {{ value | toFahrenheit }}
   */
})
export class ToFahrenheitPipe implements PipeTransform {
  /*
   * The ToFahrenheitPipe class implements the PipeTransform interface,
   * ensuring that the transform method is defined for the pipe.
   */

  transform(value: number): string {
    /*
     * The transform method converts a temperature value from Celsius to Fahrenheit.
     * Parameters:
     * - value: A number representing the temperature in Celsius.
     * Returns:
     * - A string representing the converted temperature in Fahrenheit, formatted with the °F unit.
     */

    // Convert the Celsius value to Fahrenheit using the formula (Celsius × 1.8) + 32.
    // Use Math.round to round the result to the nearest integer for cleaner output.
    return `${Math.round(value * 1.8 + 32)} °F`;
    /*
     * The returned string includes:
     * - The Fahrenheit value, rounded to the nearest integer.
     * - The °F unit to indicate the temperature scale.
     */
  }
}
