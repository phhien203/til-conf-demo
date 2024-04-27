import { Type } from '@angular/core';
import { CtaButtonStrategy } from './CtaButton.strategy';
import { Course } from '../../model/course.model';

const startLearningComponent = () =>
  import('../variations/start-learning.component').then(
    ({ StartLearningComponent }) => StartLearningComponent
  );
const buyForPriceComponent = () =>
  import('../variations/buy-for-price.component').then(
    ({ BuyForPriceComponent }) => BuyForPriceComponent
  );

export class CtaButtonOnlineStrategy implements CtaButtonStrategy {
  async getComponent(courseDetails: Course): Promise<Type<any> | null> {
    if (courseDetails.price === 0) {
      return startLearningComponent();
    }

    if (courseDetails.price > 0) {
      return buyForPriceComponent();
    }

    return null;
  }
}
