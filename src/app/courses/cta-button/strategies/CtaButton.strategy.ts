import { Type } from '@angular/core';
import { Course } from '../../model/course.model';

export interface CtaButtonStrategy {
  getComponent(courseDetails: Course): Promise<Type<any> | null>;
}
