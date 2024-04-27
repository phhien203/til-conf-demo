import { Component, input } from '@angular/core';
import { BookDetails } from '../../book-details.model';

@Component({
  standalone: true,
  imports: [],
  selector: 'app-cta-button-four',
  template: ` <button>Start {{ bookDetails().title }}</button>`,
})
export class CtaButtonFourComponent {
  bookDetails = input.required<BookDetails>();
}
