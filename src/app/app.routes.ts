import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'books',
    loadChildren: () => import('./books/books.routes').then((m) => m.routes),
  },
  {
    path: '**',
    redirectTo: 'books',
    pathMatch: 'full',
  },
];
