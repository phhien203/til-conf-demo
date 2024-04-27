import { Injectable } from '@angular/core';
import { BookDetails } from '../book-details.model';
import { STRATEGY_MAP } from './strategies/strategy-map';

@Injectable({
  providedIn: 'root',
})
export class CtaButtonService {
  getComponent(bookDetails: BookDetails) {
    if (!bookDetails) return Promise.resolve(null);

    const strategy = STRATEGY_MAP[bookDetails.category];

    if (!strategy) return Promise.resolve(null);

    return strategy.getComponent(bookDetails);
  }
}
