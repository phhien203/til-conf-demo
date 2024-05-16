import { Component, input } from '@angular/core';
import { Course } from '../../model/course.model';

@Component({
  standalone: true,
  imports: [],
  selector: 'app-enroll-now',
  template: `<button (click)="goToEnroll()">Enroll Now</button>`,
})
export class EnrollNowComponent {
  courseDetails = input.required<Course>();

  goToEnroll() {
    console.log(`Navigating to enroll page for ${this.courseDetails().title}`);
    window.alert(`Navigating to enroll page for ${this.courseDetails().title}`);
  }
}
