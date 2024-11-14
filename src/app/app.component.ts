// Importing necessary Angular features from the core library.
import { Component, ViewEncapsulation } from '@angular/core';

/*
@Component is a decorator provided by Angular.
It defines the metadata for the Angular component and connects it to its template, styles, and other configurations.
*/
@Component({
  selector: 'app-root', // The custom HTML tag used to embed this component in templates (e.g., <app-root>).
  templateUrl: './app.component.html', // Specifies the external HTML file containing this component's template.
  styleUrl: './app.component.scss', // Specifies the external SCSS (CSS) file containing styles specific to this component.
  /*
  ViewEncapsulation (optional): Determines how styles are scoped to this component.
  If you had written `encapsulation: ViewEncapsulation.None`, the styles would apply globally.
  The default is `Emulated`, which scopes styles to the component using unique attributes.
  */
})
export class AppComponent {
  // Declaring a property of the component.
  title = 'BF_Java2024_Angular';
  /*
  `title` is a member variable of this class. It's a string that can be used in the component's template
  by binding it with Angular's interpolation syntax: {{ title }}.
  */
}
