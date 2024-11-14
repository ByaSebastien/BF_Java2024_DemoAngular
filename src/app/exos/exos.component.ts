// Importing the Component decorator from Angular core to define this class as a component.
import { Component } from '@angular/core';

@Component({
  selector: 'app-exos',
  /*
   * The 'selector' specifies the custom HTML tag associated with this component.
   * The tag <app-exos> can be used in templates to include this component.
   */

  templateUrl: './exos.component.html',
  /*
   * The 'templateUrl' points to an external HTML file that defines the structure and content of this component.
   * This file typically includes the layout and visual elements for the Exos section of the application.
   */

  styleUrl: './exos.component.scss'
  /*
   * The 'styleUrl' points to an external SCSS file for styling this component.
   * SCSS (Sassy CSS) provides advanced styling options and ensures the styles are scoped to this component.
   */
})
export class ExosComponent {
  /*
   * The ExosComponent class is currently empty, serving as a placeholder for logic specific to the Exos section.
   * This logic could include methods, properties, or lifecycle hooks as needed for managing this feature.
   */
}
