import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'courses',
    loadChildren: () =>
      import('./courses/courses.routes').then((m) => m.routes),
  },
  {
    path: '**',
    redirectTo: 'courses',
    pathMatch: 'full',
  },
];
