// Importing the Pipe and PipeTransform from Angular core.
// Pipe allows for creating custom pipes, while PipeTransform defines the logic for transformation.
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time'
  /*
   * The 'name' property specifies the name of the pipe.
   * This pipe can be used in templates with the syntax: {{ value | time }}
   */
})
export class TimePipe implements PipeTransform {
  /*
   * The TimePipe class implements the PipeTransform interface,
   * ensuring that the transform method is defined to handle the logic for transforming input values.
   */

  transform(secondes: number): string {
    /*
     * The transform method is called when the pipe is used in a template.
     * Parameters:
     * - secondes: A number representing the total seconds to be transformed.
     * Returns:
     * - A string in the "HH:mm:ss" format, where:
     *   - HH: Hours (2 digits).
     *   - mm: Minutes (2 digits).
     *   - ss: Seconds (2 digits).
     */

    // Calculate the number of hours, accounting for a 24-hour clock.
    let hours = Math.floor(secondes / 3600) % 24;

    // Calculate the remaining seconds after extracting hours.
    secondes = secondes % 3600;

    // Calculate the number of minutes from the remaining seconds.
    let minutes = Math.floor(secondes / 60);

    // Calculate the remaining seconds after extracting minutes.
    secondes = secondes % 60;

    // Format and return the time string in "HH:mm:ss" format.
    return `${hours.toString().padStart(2, '0')}:` + // Ensures hours are 2 digits.
      `${minutes.toString().padStart(2, '0')}:` + // Ensures minutes are 2 digits.
      `${secondes < 10 ? '0' : ''}${secondes}`; // Ensures seconds are 2 digits.
  }
}
