import { Type } from '@angular/core';
import { Course } from '../../model/course.model';
import { CtaButtonStrategy } from './CtaButton.strategy';

type LazyLoadComponent = () => Promise<Type<any>>;

const enrollNowComponent = () =>
  import('../variations/enroll-now.component').then(
    ({ EnrollNowComponent }) => EnrollNowComponent
  );

const registerComponent = () =>
  import('../variations/register.component').then(
    ({ RegisterComponent }) => RegisterComponent
  );

const componentMap: Record<string, LazyLoadComponent> = {
  free: enrollNowComponent,
  paid: registerComponent,
};

export class CtaButtonWorkshopStrategy implements CtaButtonStrategy {
  async getComponent(courseDetails: Course): Promise<Type<any> | null> {
    const key = courseDetails.price === 0 ? 'free' : 'paid';
    const component = componentMap[key];

    if (component) {
      return component();
    }

    return null;
  }
}
