import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Person} from '../../shared/models/person';
import {beforeToday} from '../../shared/validators/before-today';
import {samePassword} from '../../shared/validators/same-password';

@Component({
  selector: 'app-demo-formulaire',
  templateUrl: './demo-formulaire.component.html',
  styleUrl: './demo-formulaire.component.scss'
})
export class DemoFormulaireComponent {

  personForm: FormGroup;

  constructor(
    private readonly _fb: FormBuilder,
  ) {
    this.personForm = this._fb.group({
      firstName: [null, [Validators.required,Validators.minLength(2), Validators.maxLength(123)]],
      lastName: [null, [Validators.required,Validators.minLength(2), Validators.maxLength(80)]],
      birthDate: [null,[Validators.required,beforeToday()]],
      email: [null, [Validators.required,Validators.email]],
      password: [null, [Validators.required,Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-=]).{8,}$/)]],
      confirmPassword: [null, [Validators.required]],
      phoneNumber: [null, []],
      siblings: [0,[Validators.required,Validators.min(0)]],
      country: [null, [Validators.required]],
      single: [false,[]],
    }, {validators: samePassword()});
  }

  submit() {

    this.personForm.markAllAsTouched();

    console.log(this.personForm);

    if(this.personForm.invalid) {
      console.log("Pas valid");
      return;
    }
    console.log("Valid");

    // let person: Person = {
    //   firstName: this.personForm.get('firstName')?.value,
    // };

    let person = this.personForm.value;

    console.log(person);
  }
}
