import { Type } from '@angular/core';
import { BookDetails } from '../../book-details.model';
import { CtaButtonStrategy } from './strategy';

const componentOne = () =>
  import('../../cta-button/variations/cta-button-one.component').then(
    ({ CtaButtonOneComponent }) => CtaButtonOneComponent
  );
const componentTwo = () =>
  import('../../cta-button/variations/cta-button-two.component').then(
    ({ CtaButtonTwoComponent }) => CtaButtonTwoComponent
  );

export class CtaButtonStrategyTwo implements CtaButtonStrategy {
  getComponent(
    bookDetails: BookDetails
  ): Promise<Type<any> | null | undefined> {
    if (bookDetails.title === 'Angular') {
      return componentOne();
    }
    if (bookDetails.title === 'React') {
      return componentTwo();
    }

    return Promise.resolve(null);
  }
}
