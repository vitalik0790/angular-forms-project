import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
})
export class HomepageComponent {
  constructor(private readonly router: Router) {}

  goToRegistration() {
    this.router.navigate(['/registration']);
  }
}
