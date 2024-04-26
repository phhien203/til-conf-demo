import { Type } from '@angular/core';
import { BookDetails } from '../../book-details.model';
import { CtaButtonStrategy } from './strategy';

const componentThree = () =>
  import('../../cta-button/variations/cta-button-three.component').then(
    ({ CtaButtonThreeComponent }) => CtaButtonThreeComponent
  );

const componentFour = () =>
  import('../../cta-button/variations/cta-button-four.component').then(
    ({ CtaButtonFourComponent }) => CtaButtonFourComponent
  );

export class CtaButtonStrategyOne implements CtaButtonStrategy {
  async getComponent(
    bookDetails: BookDetails
  ): Promise<Type<any> | null> {
    if (bookDetails.title === 'Vue') {
      return componentThree();
    }
    if (bookDetails.title === 'Svelte') {
      return componentFour();
    }
    return Promise.resolve(null);
  }
}
