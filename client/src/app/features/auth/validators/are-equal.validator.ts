import { AbstractControl } from '@angular/forms';

export default function validateAreEqual(control: AbstractControl) {
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');

  if (password?.value !== confirmPassword?.value) {
    confirmPassword?.setErrors({ notsame: true });

    return { notsame: true };
  }

  return null;
}
