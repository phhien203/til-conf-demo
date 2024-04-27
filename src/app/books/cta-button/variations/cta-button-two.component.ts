import { Component, input } from '@angular/core';
import { BookDetails } from '../../book-details.model';

@Component({
  standalone: true,
  imports: [],
  selector: 'app-cta-button-two',
  template: ` <button>Preview {{ bookDetails().title }}</button> `,
})
export class CtaButtonTwoComponent {
  bookDetails = input.required<BookDetails>();
}
