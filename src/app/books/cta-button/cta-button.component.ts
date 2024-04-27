import { AsyncPipe, NgComponentOutlet } from '@angular/common';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import {
  Component,
  Input,
  Signal,
  Type,
  effect,
  inject,
  input,
  signal,
} from '@angular/core';
import { derivedAsync } from 'ngxtension/derived-async';
import { BookDetails } from '../book-details.model';
import { CtaButtonService } from './cta-button.service';
import { BehaviorSubject, filter, switchMap } from 'rxjs';

@Component({
  standalone: true,
  imports: [NgComponentOutlet, AsyncPipe],
  selector: 'app-cta-button',
  template: `
    <ng-container
      *ngComponentOutlet="
        ctaButtonComponent();
        inputs: { bookDetails: bookDetails() }
      "
    ></ng-container>
  `,
})
export class CtaButtonComponent {
  service = inject(CtaButtonService);
  // _bookDetails$ = new BehaviorSubject<BookDetails | null>(null);

  // get bookDetails() {
  //   return this._bookDetails$.value!;
  // }

  // @Input() set bookDetails(bookDetails: BookDetails) {
  //   this._bookDetails$.next(bookDetails);
  // }

  // ctaButtonComponent = this._bookDetails$.pipe(
  //   filter((bookDetails) => !!bookDetails),
  //   switchMap((bookDetails) => this.service.getComponent(bookDetails!))
  // );

  bookDetails = input.required<BookDetails>();
  ctaButtonComponent = derivedAsync(
    () => this.service.getComponent(this.bookDetails()),
    { initialValue: null }
  );

  // get ctaButtonComponent() {
  //   return this.service.getComponent(this.bookDetails);
  // }

  // ctaButtonComponent = signal<Type<any> | null>(null);

  // constructor() {
  //   effect(async () => {
  //     const component = await this.service.getComponent(this.bookDetails());
  //     this.ctaButtonComponent.set(component);
  //   });
  // }

  // ctaButtonComponent = toSignal(
  //   toObservable(this.bookDetails).pipe(
  //     switchMap((bookDetails) => this.service.getComponent(bookDetails))
  //   ),
  //   { initialValue: null }
  // );
}
