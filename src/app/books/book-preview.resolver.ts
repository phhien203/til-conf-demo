// import { inject } from '@angular/core';
// import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
// import { BookDetailsService } from './book-details.service';
// import { from, map, switchMap } from 'rxjs';
// import { CtaButtonService } from './cta-button/cta-button.service';

// export const bookPreviewResolverFn: ResolveFn<any> = (
//   route: ActivatedRouteSnapshot
// ) => {
//   const bookId = route.paramMap.get('bookId');
//   const bookDetailsService = inject(BookDetailsService);
//   const ctaButtonService = inject(CtaButtonService);

//   return bookDetailsService.getBookDetails(bookId!).pipe(
//     switchMap((bookDetails) => {
//       return from(ctaButtonService.getComponent(bookId! as 'one' | 'two')).pipe(
//         map((ctaButtonComponent) => {
//           return {
//             bookDetails,
//             ctaButtonComponent,
//           };
//         })
//       );
//     })
//   );
// };
