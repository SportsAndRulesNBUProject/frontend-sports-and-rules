import { FormGroup } from '@angular/forms';

export function matchingPasswords(newPassword: string, confPassword: string) {
  return (group: FormGroup) => {
    // group.controls);
    const password = group.controls[newPassword];
    const confirmPassword = group.controls[confPassword];
    // password.value);
    // confirmPassword.value);

    if (confirmPassword.errors || password.errors /*&& !confirmPassword.errors.matchingPasswords*/) {
      // return if another validator has already found an error on the matchingControl
      return;
  }

    // group.errors);
    if (password.value !== confirmPassword.value) {
      confirmPassword.setErrors({ matchingPasswords: true });
    } else if (confirmPassword.value === '') {
      confirmPassword.setErrors({ required: true });
    }

  };
}
