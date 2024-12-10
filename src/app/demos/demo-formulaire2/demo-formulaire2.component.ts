import {Component} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {beforeToday} from '../../shared/validators/before-today';
import {log} from '@angular-devkit/build-angular/src/builders/ssr-dev-server';

interface Permis {
  name: string;
}

@Component({
  selector: 'app-demo-formulaire2',
  templateUrl: './demo-formulaire2.component.html',
  styleUrl: './demo-formulaire2.component.scss'
})
export class DemoFormulaire2Component {

  registerForm!: FormGroup;
  countries: string[] = ['Belgium', 'Spain', 'Portugal'];
  permis: Permis[] = [
    {
      name: 'A'
    },
    {
      name: 'B'
    },
    {
      name: 'C'
    }
  ];

  constructor(
    private readonly _fb: FormBuilder,
  ) {

    this.registerForm = this._fb.group({
      firstname: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(80)]],
      lastname: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(80)]],
      birthdate: [null, [Validators.required, beforeToday()]],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]],
      country: [null, [Validators.required]],
      permis: [null, []],
    });
  }

  submit() {
    if(this.registerForm.invalid){
      this.registerForm.markAllAsTouched();
      return;
    }
    let person = this.registerForm.value;
    // authService.register(person).subscribe({
    //   next: (result) => log('all good!'),
    //   error: (error) => {log(error)}
    // });
  }
}
