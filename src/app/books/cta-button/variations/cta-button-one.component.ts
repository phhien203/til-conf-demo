import { Component, input } from '@angular/core';
import { BookDetails } from '../../book-details.model';

@Component({
  standalone: true,
  imports: [],
  selector: 'app-cta-button-one',
  template: ` <button>Buy {{ bookDetails().title }}</button>`,
})
export class CtaButtonOneComponent {
  bookDetails = input.required<BookDetails>();
}
