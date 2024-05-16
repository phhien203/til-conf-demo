import { Component, input } from '@angular/core';
import { Course } from '../../model/course.model';

@Component({
  standalone: true,
  imports: [],
  selector: 'app-register',
  template: `<button (click)="goToRegisterForm()">Register</button>`,
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
