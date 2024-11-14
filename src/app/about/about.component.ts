// Importing the Component decorator from Angular core to define this class as a component.
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  /*
   * The 'selector' specifies the custom HTML tag associated with this component.
   * The tag <app-about> can be used in templates to include this component.
   */

  templateUrl: './about.component.html',
  /*
   * The 'templateUrl' points to the external HTML file for this component.
   * This file contains the structure and content for the About page, such as descriptions or team details.
   */

  styleUrl: './about.component.scss'
  /*
   * The 'styleUrl' points to the external SCSS file for styling this component.
   * These styles are scoped specifically to the AboutComponent.
   */
})
export class AboutComponent {
  /*
   * The AboutComponent class serves as the logic container for the About page.
   * Currently, it is empty but can be extended with properties, methods, or lifecycle hooks
   * to manage dynamic data or interactivity for the About page.
   */
}
