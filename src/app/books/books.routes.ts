import { Routes } from '@angular/router';
import { BookListComponent } from './book-list.component';
import { BookPreviewComponent } from './book-preview.component';
// import { bookPreviewResolverFn } from './book-preview.resolver';

export const routes: Routes = [
  {
    path: '',
    component: BookListComponent,
  },
  {
    path: ':bookId',
    component: BookPreviewComponent,
    // resolve: {
    //   bookPreview: bookPreviewResolverFn,
    // }
  },
];
