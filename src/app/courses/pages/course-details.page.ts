import { Component, inject, input } from '@angular/core';
import { derivedAsync } from 'ngxtension/derived-async';

import { CoursesService } from '../courses.service';
import { CtaButtonComponent } from '../cta-button/cta-button.component';

@Component({
  standalone: true,
  imports: [CtaButtonComponent],
  selector: 'app-course-details',
  template: `
    <h1>Course Details</h1>

    @if (courseDetails(); as course) {
    <app-cta-button [courseDetails]="course" />
    } @else {
    <p>No Course Found</p>
    }
  `,
})
export class CourseDetailsPage {
  #service = inject(CoursesService);

  courseId = input.required<string>();
  courseDetails = derivedAsync(() =>
    this.#service.getCourseById(this.courseId())
  );
}
