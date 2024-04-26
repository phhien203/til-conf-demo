import { Component, input } from '@angular/core';
import { CtaButtonComponent } from './cta-button/cta-button.component';
import { BookDetails } from './book-details.model';

const books: Record<string, BookDetails> = {
  one: {
    title: 'Vue',
    description: 'The modern web developers platform',
    category: 'technical',
  },
  two: {
    title: 'Svelte',
    description: 'A JavaScript library for building user interfaces',
    category: 'technical',
  },
  three: {
    title: 'Angular',
    description: 'A novel by Brazilian author Paulo Coelho',
    category: 'nonTechnical',
  },
  four: {
    title: 'React',
    description: 'The Progressive JavaScript Framework',
    category: 'nonTechnical',
  },
};

@Component({
  standalone: true,
  imports: [CtaButtonComponent],
  selector: 'app-book-preview',
  template: `
    <h2>Book Preview</h2>
    <p>Here is the book!</p>
    <app-cta-button [bookDetails]="bookDetails()" />
  `,
})
export class BookPreviewComponent {
  bookDetails = input.required<BookDetails>();
}
