import {AbstractControl, ValidatorFn} from '@angular/forms';

export const weekAfter = (): ValidatorFn | null => {
  return (control: AbstractControl) => {

    if (!control) {
      return null;
    }

    let today: Date = new Date();
    let choiceDay: Date = new Date(control.value);
    let nextWeek: Date = new Date(today.setDate(today.getDate() + 7));

    if (today <= nextWeek) {
      return null;
    }

    return {weekAfter: true}
  }
}
