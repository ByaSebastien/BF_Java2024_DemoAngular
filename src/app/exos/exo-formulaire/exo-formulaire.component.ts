import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Person} from '../../shared/models/person';
import {PersonRdv} from '../../shared/models/person-rdv';
import {weekAfter} from '../../shared/validators/week-after';

@Component({
  selector: 'app-exo-formulaire',
  templateUrl: './exo-formulaire.component.html',
  styleUrl: './exo-formulaire.component.scss'
})
export class ExoFormulaireComponent {

  rdvForm: FormGroup;
  addressForm: FormGroup;
  // fullForm: FormGroup;

  constructor(
    private readonly _fb: FormBuilder,
  ) {
    this.rdvForm = this._fb.group({

        firstName: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(123)]],
        lastName: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(80)]],
        description: [null, [Validators.required, Validators.maxLength(255)]],
        email: [null, [Validators.required, Validators.email]],
        rdvDate: [null, [Validators.required, weekAfter]],
        rdvHome: [false, []],
      }
    );
    this.addressForm = _fb.group({

      country: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(80)]],
      city: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(80)]],
      district: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(80)]],
      street: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(80)]],
      number: [null, [Validators.required, Validators.min(0)]],

    });

    // this.fullForm = this._fb.group({
    //   rdvForm: this.rdvForm,
    //   addressForm: this.addressForm
    // });



  }

  submit(): void {

    this.rdvForm.markAllAsTouched();

    console.log(this.rdvForm);

    if (this.rdvForm.invalid) {
      console.log("not valid");
      return;
    }

    if (this.rdvForm.get('rdvHome')?.value) {
      if (this.addressForm.invalid) {
        console.log("not valid");
        return;
      }
    }

    console.log("valid");

    let person: PersonRdv = this.rdvForm.value;

    console.log(person);

  }
}
