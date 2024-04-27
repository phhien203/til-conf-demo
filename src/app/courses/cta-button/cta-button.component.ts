import { NgComponentOutlet } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { derivedAsync } from 'ngxtension/derived-async';

import { Course } from '../model/course.model';
import { CtaButtonService } from './cta-button.service';

@Component({
  standalone: true,
  imports: [NgComponentOutlet],
  selector: 'app-cta-button',
  template: `
    <ng-container
      *ngComponentOutlet="
        ctaButtonComponent();
        inputs: { courseDetails: courseDetails() }
      "
    />
  `,
})
export class CtaButtonComponent {
  #service = inject(CtaButtonService);

  courseDetails = input.required<Course>();
  ctaButtonComponent = derivedAsync(
    () => this.#service.getComponent(this.courseDetails()),
    { initialValue: null }
  );
}
