import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent {
  readonly form: FormGroup = this.fb.group({
    email: [null, [Validators.required, Validators.email]],
    password: [null, [Validators.required]],
  });

  constructor(
    private readonly router: Router,
    private readonly fb: FormBuilder
  ) {}

  goToHomepage() {
    this.router.navigate(['/']);
  }

  submitForm() {
    this.form.markAllAsTouched();

    if (this.form.invalid) {
      console.log('cannot submit invalid form');
      return;
    }
    console.log('submit', this.form.value);
    this.router.navigate(['/']);
  }
}
