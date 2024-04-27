import { Type } from '@angular/core';
import { BookDetails } from '../../book-details.model';

export interface CtaButtonStrategy {
  getComponent(bookDetails: BookDetails): Promise<Type<any> | null>;
}
