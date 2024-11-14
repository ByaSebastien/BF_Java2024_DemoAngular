import {AbstractControl, ValidatorFn} from '@angular/forms';

export const samePassword = (): ValidatorFn | null => {
  return (control: AbstractControl) => {

    let password: string | undefined = control.get('password')?.value;
    let confirmPassword: string | undefined = control.get('confirmPassword')?.value;

    if (!password || !confirmPassword) {
      return null;
    }

    if (password === confirmPassword) {
      return null;
    }

    return {samePassword: true};
  }
}
