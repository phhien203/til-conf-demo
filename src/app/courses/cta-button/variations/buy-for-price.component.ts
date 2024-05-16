import { Component, input } from '@angular/core';
import { Course } from '../../model/course.model';
import { CurrencyPipe } from '@angular/common';

@Component({
  standalone: true,
  imports: [CurrencyPipe],
  selector: 'app-buy-for-price',
  template: `
    <button (click)="goToPayment()">
      Buy for {{ courseDetails().price | currency }}
    </button>
  `,
})
export class BuyForPriceComponent {
  courseDetails = input.required<Course>();

  goToPayment() {
    console.log(`Navigating to payment page for ${this.courseDetails().title}`);
    window.alert(
      `Navigating to payment page for ${this.courseDetails().title}`
    );
  }
}
