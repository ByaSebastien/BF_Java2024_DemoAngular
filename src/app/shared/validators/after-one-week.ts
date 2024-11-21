import {AbstractControl, ValidatorFn} from '@angular/forms';

declare global {
  interface Date {
    addDays(days: number): Date;
  }
}

Date.prototype.addDays = function (days) {
  this.setDate(this.getDate() + days);
  return this;
}

export const afterOneWeek = (): ValidatorFn | null => {
  return (control: AbstractControl) => {

    if (!control.value) {
      return null;
    }

    let controlDate = new Date(control.value);
    let limit = new Date().addDays(7);

    if (controlDate >= limit) {
      return null;
    }

    return {afterOneWeek: true};
  }
}
