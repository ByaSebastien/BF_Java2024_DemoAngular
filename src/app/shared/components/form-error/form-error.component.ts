// Importing necessary Angular features for form validation.
import { Component, Input } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-form-error',
  /*
   * The 'selector' specifies the custom HTML tag associated with this component.
   * The tag <app-form-error> can be used in templates to display validation errors for form controls.
   */

  templateUrl: './form-error.component.html',
  /*
   * The 'templateUrl' points to the external HTML file that defines the structure for this component.
   * This file contains the logic for rendering validation error messages dynamically.
   */

  styleUrl: './form-error.component.scss'
  /*
   * The 'styleUrl' points to the external SCSS file that contains styles scoped specifically to this component.
   */
})
export class FormErrorComponent {
  /*
   * This class manages the display of validation errors for a specific form control.
   */

  @Input({ required: true })
  control!: AbstractControl | null;
  /*
   * The 'control' input receives a reference to the form control from the parent component.
   * It is required, as indicated by the '{ required: true }' metadata.
   * The input must be an instance of AbstractControl or null.
   */

  get errors(): ValidationErrors | null | undefined {
    /*
     * The 'errors' getter retrieves the validation errors associated with the form control.
     * If the control has no errors, it returns null or undefined.
     * If the control is invalid, it returns an object containing the validation errors.
     */
    return this.control?.errors;
  }
}
