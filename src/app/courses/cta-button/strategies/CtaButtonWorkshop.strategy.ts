import { Type } from '@angular/core';
import { Course } from '../../model/course.model';
import { CtaButtonStrategy } from './CtaButton.strategy';

const enrollNowComponent = () =>
  import('../variations/enroll-now.component').then(
    ({ EnrollNowComponent }) => EnrollNowComponent
  );

const registerComponent = () =>
  import('../variations/register.component').then(
    ({ RegisterComponent }) => RegisterComponent
  );

export class CtaButtonWorkshopStrategy implements CtaButtonStrategy {
  async getComponent(courseDetails: Course): Promise<Type<any> | null> {
    if (courseDetails.price === 0) {
      return enrollNowComponent();
    }

    if (courseDetails.price > 0) {
      return registerComponent();
    }

    return null;
  }
}
