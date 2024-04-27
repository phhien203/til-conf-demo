import { Course, CourseType } from './courses/model/course.model';

export const emptyCourse: Course = {
  id: '',
  title: '',
  price: 0,
  type: CourseType.Online,
};

export const courses: Course[] = [
  {
    id: '1',
    title: 'Angular Fundamentals',
    price: 0,
    type: CourseType.Online,
  },
  {
    id: '2',
    title: 'Angular Advanced',
    price: 99,
    type: CourseType.Online,
  },
  {
    id: '3',
    title: 'Practical Angular with Real Projects',
    price: 0,
    type: CourseType.Workshop,
  },
  {
    id: '4',
    title: 'Angular Workshop',
    price: 299,
    type: CourseType.Workshop,
  },
];
