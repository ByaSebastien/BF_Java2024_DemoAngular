// Importing the Component decorator from Angular core to define this class as a component.
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  /*
   * The 'selector' specifies the custom HTML tag associated with this component.
   * The tag <app-home> can be used in templates to include this component.
   */

  templateUrl: './home.component.html',
  /*
   * The 'templateUrl' points to the external HTML file that defines the structure and content of this component.
   * This file typically includes the layout and visual elements for the home page.
   */

  styleUrl: './home.component.scss'
  /*
   * The 'styleUrl' points to the external SCSS file that contains styles specific to this component.
   * SCSS (Sassy CSS) is used for more advanced and modular styling options.
   */
})
export class HomeComponent {
  /*
   * The HomeComponent class currently has no properties or methods.
   * This serves as the logic container for the home page, and can be extended as needed.
   */
}
