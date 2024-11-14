// Importing the Component decorator from Angular core to define this class as an Angular component.
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  /*
   * The 'selector' specifies the custom HTML tag associated with this component.
   * The tag <app-footer> can be used in templates to include this footer component.
   */

  templateUrl: './footer.component.html',
  /*
   * The 'templateUrl' specifies the path to the external HTML file for this component.
   * This file defines the structure and layout of the footer, such as copyright text, navigation links, or contact info.
   */

  styleUrl: './footer.component.scss'
  /*
   * The 'styleUrl' specifies the path to the external SCSS file for this component.
   * This file contains styles scoped to the footer component, ensuring a modular design.
   */
})
export class FooterComponent {
  /*
   * The FooterComponent class is currently empty, as no properties or methods are defined.
   * It serves as a placeholder for any logic or functionality specific to the footer.
   * For example, dynamic year display or footer link management can be added here.
   */
}
