import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
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
  imports: [RouterLink],
  selector: 'app-book-list',
  template: `
    <h2>Book List</h2>
    <p>Here are the books!</p>
    <ul>
      @for (book of books; track book.title) {
      <li [routerLink]="['/books', book.id]">{{ book.title }}</li>
      }
    </ul>
  `,
})
export class BookListComponent {
  books = books;
}
