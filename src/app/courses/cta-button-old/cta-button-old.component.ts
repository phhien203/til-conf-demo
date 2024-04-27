import { Component, input } from '@angular/core';
import { Course, CourseType } from '../model/course.model';

@Component({
  standalone: true,
  selector: 'cta-button-old',
  templateUrl: './cta-button-old.component.html',
})
export class CtaButtonOldComponent {
  readonly CourseType = CourseType;
  courseDetails = input.required<Course>();

  goToStartLearning() {
    console.log(`Go to start learning for course ${this.courseDetails().id}`);
  }

  goToPayment() {
    console.log(`Go to payment for course ${this.courseDetails().id}`);
  }

  goToEnroll() {
    console.log(`Navigating to enroll page for ${this.courseDetails().title}`);
  }

  goToRegisterForm() {
    console.log(
      `Navigating to register form for ${this.courseDetails().title}`
    );
  }
}
