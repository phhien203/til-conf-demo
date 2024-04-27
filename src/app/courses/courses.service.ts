import { Injectable } from '@angular/core';
import { of } from 'rxjs';

import { courses } from '../constants';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  getCourses() {
    return of(courses);
  }

  getCourseById(id: string) {
    return of(courses.find((course) => course.id === id));
  }
}
