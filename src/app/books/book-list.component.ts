import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterLink],
  selector: 'app-book-list',
  template: `
    <h2>Book List</h2>
    <p>Here are the books!</p>
    <ul>
      <li [routerLink]="['/books', 'one']">Book 1</li>
      <li [routerLink]="['/books', 'two']">Book 2</li>
    </ul>
  `,
})
export class BookListComponent {}
