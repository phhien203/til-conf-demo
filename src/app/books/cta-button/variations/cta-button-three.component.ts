import { Component, input } from '@angular/core';
import { BookDetails } from '../../book-details.model';

@Component({
  standalone: true,
  imports: [],
  template: ` <button>Enroll {{ bookDetails().title }}</button>`,
})
export class CtaButtonThreeComponent {
  bookDetails = input.required<BookDetails>();
}
