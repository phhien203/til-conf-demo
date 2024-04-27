import { Injectable, Type } from '@angular/core';

import { CtaButtonStrategyMap } from './strategies/CtaButtonStrategyMap';
import { Course } from '../model/course.model';

@Injectable({
  providedIn: 'root',
})
export class CtaButtonService {
  async getComponent(course: Course): Promise<Type<any> | null> {
    const strategy = CtaButtonStrategyMap[course.type];

    if (!strategy) {
      console.error('No strategy found for course type:', course.type);
      return null;
    }

    return strategy.getComponent(course);
  }
}
