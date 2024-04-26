import { AsyncPipe, NgComponentOutlet } from '@angular/common';
import { Component, computed, inject, input } from '@angular/core';
import { BookDetails } from '../book-details.model';
import { CtaButtonService } from './cta-button.service';

@Component({
  standalone: true,
  imports: [NgComponentOutlet, AsyncPipe],
  selector: 'app-cta-button',
  template: `
    <ng-container
      *ngComponentOutlet="
        ctaButtonComponent() | async;
        inputs: { bookDetails: bookDetails() }
      "
    ></ng-container>
  `,
})
export class CtaButtonComponent {
  bookDetails = input.required<BookDetails>();
  ctaButtonComponent = computed(() => {
    return inject(CtaButtonService).getComponent(this.bookDetails());
  });
}
