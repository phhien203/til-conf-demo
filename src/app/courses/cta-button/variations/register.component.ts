import { Component, input } from '@angular/core';
import { Course } from '../../model/course.model';
import { CurrencyPipe } from '@angular/common';

@Component({
  standalone: true,
  imports: [CurrencyPipe],
  selector: 'app-register',
  template: `<button (click)="goToRegisterForm()">
    Register for {{ courseDetails().price | currency }}
  </button>`,
})
export class RegisterComponent {
  courseDetails = input.required<Course>();

  goToRegisterForm() {
    console.log(
      `Navigating to register form for ${this.courseDetails().title}`
    );
    window.alert(
      `Navigating to register form for ${this.courseDetails().title}`
    );
  }
}
