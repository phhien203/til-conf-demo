import { Injectable } from '@angular/core';
import { BookDetails } from '../book-details.model';
import { STRATEGY_MAP } from './constants';

@Injectable({
  providedIn: 'root',
})
export class CtaButtonService {
  getComponent(bookDetails: BookDetails) {
    const strategy = STRATEGY_MAP[bookDetails.category];
    return strategy.getComponent(bookDetails);
  }
}
