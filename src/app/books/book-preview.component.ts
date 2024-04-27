import { Component, computed, input } from '@angular/core';
import { CtaButtonComponent } from './cta-button/cta-button.component';
import { BookDetails } from './book-details.model';

const books: BookDetails[] = [
  {
    id: '1',
    title: 'Vue',
    description: 'The modern web developers platform',
    category: 'technical',
  },
  {
    id: '2',
    title: 'Svelte',
    description: 'A JavaScript library for building user interfaces',
    category: 'technical',
  },
  {
    id: '3',
    title: 'Angular',
    description: 'A novel by Brazilian author Paulo Coelho',
    category: 'nonTechnical',
  },
  {
    id: '4',
    title: 'React',
    description: 'The Progressive JavaScript Framework',
    category: 'nonTechnical',
  },
];

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
  bookId = input.required<string>();
  bookDetails = computed(() => {
    return (
      books.find((book) => book.id === this.bookId()) || {
        id: '',
        title: '',
        description: '',
        category: 'technical' as const,
      }
    );
  });
}
