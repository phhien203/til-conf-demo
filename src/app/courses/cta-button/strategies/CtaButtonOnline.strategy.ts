import { Type } from '@angular/core';
import { CtaButtonStrategy } from './CtaButton.strategy';
import { Course } from '../../model/course.model';

type LazyLoadComponent = () => Promise<Type<any>>;

const startLearningComponent: LazyLoadComponent = () =>
  import('../variations/start-learning.component').then(
    ({ StartLearningComponent }) => StartLearningComponent
  );
const buyForPriceComponent: LazyLoadComponent = () =>
  import('../variations/buy-for-price.component').then(
    ({ BuyForPriceComponent }) => BuyForPriceComponent
  );

const componentMap: Record<string, LazyLoadComponent> = {
  free: startLearningComponent,
  paid: buyForPriceComponent,
};

export class CtaButtonOnlineStrategy implements CtaButtonStrategy {
  async getComponent(courseDetails: Course): Promise<Type<any> | null> {
    const key = courseDetails.price === 0 ? 'free' : 'paid';

    const lazyLoadComponent = componentMap[key];

    if (lazyLoadComponent) {
      return lazyLoadComponent();
    }

    return null;
  }
}
