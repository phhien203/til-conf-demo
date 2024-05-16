import { Component, inject, input } from '@angular/core';
import { derivedAsync } from 'ngxtension/derived-async';

import { CoursesService } from '../courses.service';
import { CtaButtonComponent } from '../cta-button/cta-button.component';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [CtaButtonComponent, CurrencyPipe, RouterLink],
  selector: 'app-course-details',
  template: `
    <h1>Course Details</h1>

    <a routerLink="/courses">Back</a>

    @if (courseDetails(); as course) {
    <h2>{{ course.title }}</h2>
    <p>{{ course.price | currency }}</p>

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
