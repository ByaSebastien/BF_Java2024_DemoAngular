import { Component } from '@angular/core';
import {MeetingType} from '../../shared/enums/meeting-type';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {afterOneWeek} from '../../shared/validators/after-one-week';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {

  protected readonly MeetingType = MeetingType;
  fullForm: FormGroup;
  contactForm: FormGroup;
  addressForm: FormGroup;
  availabilities: FormArray;

  constructor(
    private readonly _fb: FormBuilder,
  ) {
    this.availabilities = this._fb.array([
      new FormControl(
        null,
        Validators.compose([Validators.required,afterOneWeek()]),
      ),
    ]);
    this.contactForm = this._fb.group({
      firstName: [null, [Validators.required,Validators.maxLength(123)]],
      lastName: [null, [Validators.required,Validators.maxLength(80)]],
      email: [null, [Validators.required,Validators.email]],
      meetingType: [null,[]],
      description: [null, [Validators.required]],
      availabilities: this.availabilities,
      atHome: [false,[]],
    });
    this.addressForm = _fb.group({
      street: [null, [Validators.required]],
      city: [null, [Validators.required]],
      zipCode: [null, [Validators.required,Validators.minLength(4), Validators.maxLength(4)]],
    });
    this.fullForm = this._fb.group({
      contactForm: this.contactForm,
      addressForm: this.addressForm,
    });
    this.addressForm.disable();
  }

  toggleAddressForm() {
    if(this.addressForm.enabled){
      this.addressForm.disable();
      this.addressForm.reset();
    }else{
      this.addressForm.enable();
    }
  }

  addAvailability() {
    if(this.availabilities.length >= 5){
      return;
    }
    this.availabilities.push(new FormControl(
      null,
      Validators.compose([Validators.required,afterOneWeek()])
    ));
  }

  removeAvailability(index: number) {
    if(this.availabilities.length <= 1){
      return;
    }
    this.availabilities.removeAt(index);
  }

  submit() {
    this.fullForm.markAllAsTouched();
    if(this.fullForm.valid){
      console.log("Valid");
    } else {
      console.log("No valid");
    }
  }
}
