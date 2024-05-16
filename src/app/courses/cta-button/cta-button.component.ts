import { AsyncPipe, NgComponentOutlet } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { switchMap } from 'rxjs';

import { Course } from '../model/course.model';
import { CtaButtonService } from './cta-button.service';

@Component({
  standalone: true,
  imports: [NgComponentOutlet, AsyncPipe],
  selector: 'app-cta-button',
  template: `
    <ng-container
      *ngComponentOutlet="
        ctaButtonComponent$ | async;
        inputs: {
          courseDetails: courseDetails()
        }
      "
    />
  `,
})
export class CtaButtonComponent {
  #service = inject(CtaButtonService);

  courseDetails = input.required<Course>();

  ctaButtonComponent$ = toObservable(this.courseDetails).pipe(
    switchMap((courseDetails) => this.#service.getComponent(courseDetails))
  );
}
