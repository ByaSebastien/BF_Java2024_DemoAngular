// Importing necessary Angular features and custom models.
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Person } from '../../shared/models/person';
import {beforeToday} from '../../shared/validators/before-today';
import {samePassword} from '../../shared/validators/same-password';

@Component({
  selector: 'app-demo-formulaire',
  /*
   * The 'selector' specifies the custom HTML tag associated with this component.
   * The tag <app-demo-formulaire> can be used in templates to include this component.
   */

  templateUrl: './demo-formulaire.component.html',
  /*
   * The 'templateUrl' points to the external HTML file defining the structure of this component.
   * This file contains the layout for the demo form.
   */

  styleUrl: './demo-formulaire.component.scss'
  /*
   * The 'styleUrl' points to the external SCSS file for styling this component.
   * These styles are scoped specifically to this component.
   */
})
export class DemoFormulaireComponent {
  /*
   * This class contains the logic for the DemoFormulaireComponent,
   * which manages a reactive form for capturing user information.
   */

  personForm: FormGroup;
  /*
   * The 'personForm' property is a FormGroup instance that manages the form's structure and state.
   * It contains various form controls with validation rules.
   */

  constructor(
    private readonly _fb: FormBuilder,
    /*
     * The 'FormBuilder' is injected to simplify the creation and initialization of the reactive form.
     * It provides a convenient way to build form groups and controls.
     */
  ) {
    this.personForm = this._fb.group({
      /*
       * Initializes the form group with controls and their respective validation rules.
       */

      // First name: Required, 2-123 characters.
      firstName: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(123)]],

      // Last name: Required, 2-80 characters.
      lastName: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(80)]],

      // Birthdate: Required.
      birthDate: [null, [Validators.required, beforeToday]],

      // Email: Required, must be a valid email format.
      email: [null, [Validators.required, Validators.email]],

      // Password: Required, must contain uppercase, lowercase, number, special character, and be at least 8 characters long.
      password: [null, [Validators.required, Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[#?!@$%^&*-=]).{8,}$/)]],

      // Confirm password: Required.
      confirmPassword: [null, [Validators.required]],

      // Phone number: Optional, no validation rules.
      phoneNumber: [null, []],

      // Siblings: Required, minimum value of 0.
      siblings: [0, [Validators.required, Validators.min(0)]],

      // Country: Required.
      country: [null, [Validators.required]],

      // Single (checkbox): Optional, no validation rules.
      single: [null, []],
    }, {validators: samePassword()}
    );
  }

  submit(): void {
    /*
     * The 'submit' method is called when the form is submitted.
     * It validates the form and logs the submitted data if valid.
     */

    // Mark all form controls as touched to trigger validation messages.
    this.personForm.markAllAsTouched();

    // Log the form group for debugging purposes.
    console.log(this.personForm);

    // If the form is invalid, log an error message and stop execution.
    if (this.personForm.invalid) {
      console.log("not valid");
      return;
    }

    console.log("Valid");
    // If the form is valid, assign its value to a 'Person' object.
    let person: Person = this.personForm.value;

    // Log the valid person object for debugging.
    console.log(person);
  }
}
