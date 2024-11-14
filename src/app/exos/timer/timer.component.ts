// Importing the Component decorator from Angular core to define this class as a component.
import { Component } from '@angular/core';

@Component({
  selector: 'app-timer',
  /*
   * The 'selector' specifies the custom HTML tag associated with this component.
   * The tag <app-timer> can be used in templates to include this component.
   */

  templateUrl: './timer.component.html',
  /*
   * The 'templateUrl' points to the external HTML file for this component.
   * This file contains the structure and layout for the timer interface.
   */

  styleUrl: './timer.component.scss'
  /*
   * The 'styleUrl' points to the external SCSS file for styling this component.
   * These styles are scoped to the TimerComponent.
   */
})
export class TimerComponent {
  /*
   * This class contains the logic for the TimerComponent, including
   * properties and methods for starting, pausing, and resetting a timer.
   */

  secondes: number = 0;
  /*
   * The 'secondes' property keeps track of the elapsed time in seconds.
   * It is initialized to 0 and is updated as the timer runs.
   */

  timer: any;
  /*
   * The 'timer' property holds the reference to the timer interval.
   * It is used to start, pause, or clear the timer.
   */

  start(): void {
    /*
     * The start method starts the timer if it is not already running.
     * It increments the 'secondes' property by 1 every second (1000 ms).
     */

    if (this.timer) {
      // If the timer is already running, do nothing.
      return;
    }
    // Set an interval to increment 'secondes' every second.
    this.timer = setInterval(() => this.secondes++, 1000);
  }

  pause(): void {
    /*
     * The pause method stops the timer if it is currently running.
     * It clears the interval and sets 'timer' to null.
     */

    if (!this.timer) {
      // If the timer is not running, do nothing.
      return;
    }
    clearInterval(this.timer); // Stop the timer.
    this.timer = null; // Reset the timer reference.
  }

  reset(): void {
    /*
     * The reset method stops the timer and resets 'secondes' to 0.
     * It only performs these actions if the timer is running or the time is greater than 0.
     */

    if (this.secondes <= 0 && !this.timer) {
      // If the timer is already reset and not running, do nothing.
      return;
    }
    this.pause(); // Stop the timer.
    this.secondes = 0; // Reset the elapsed time.
  }
}
