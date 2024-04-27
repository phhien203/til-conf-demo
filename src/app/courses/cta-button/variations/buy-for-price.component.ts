import { Component, input } from '@angular/core';
import { Course } from '../../model/course.model';

@Component({
  standalone: true,
  imports: [],
  selector: 'app-buy-for-price',
  template: `
    <button (click)="goToPayment()">Buy for {{ courseDetails().price }}</button>
  `,
})
export class BuyForPriceComponent {
  courseDetails = input.required<Course>();

  goToPayment() {
    console.log(`Navigating to payment page for ${this.courseDetails().title}`);
  }
}
