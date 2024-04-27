import { Routes } from '@angular/router';

import { CourseListPage } from './pages/course-list.page';
import { CourseDetailsPage } from './pages/course-details.page';

export const routes: Routes = [
  {
    path: '',
    component: CourseListPage,
  },
  {
    path: ':courseId',
    component: CourseDetailsPage,
  },
];
