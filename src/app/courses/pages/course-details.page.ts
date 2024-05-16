import { Component, inject, input } from '@angular/core';
import { AsyncPipe, CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { toObservable } from '@angular/core/rxjs-interop';
import { switchMap } from 'rxjs';

import { CoursesService } from '../courses.service';
import { CtaButtonComponent } from '../cta-button/cta-button.component';

@Component({
  standalone: true,
  imports: [CtaButtonComponent, CurrencyPipe, RouterLink, AsyncPipe],
  selector: 'app-course-details',
  template: `
    <h1>Course Details</h1>

    <a routerLink="/courses">Back</a>

    @if (courseDetails$ | async; as course) {
    <h2>{{ course.title }}</h2>
    <p>{{ course.price | currency }}</p>

    <app-cta-button [courseDetails]="course" />
    } @else {
    <p>Course Not Found</p>
    }
  `,
})
export class CourseDetailsPage {
  #service = inject(CoursesService);

  courseId = input.required<string>();

  courseDetails$ = toObservable(this.courseId).pipe(
    switchMap((courseId) => this.#service.getCourseById(courseId))
  );
}
