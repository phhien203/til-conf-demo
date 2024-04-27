import { Component, inject } from '@angular/core';
import { CoursesService } from '../courses.service';
import { AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [AsyncPipe, RouterLink],
  template: `
    <h1>Course List</h1>

    <ul>
      @for(course of courses | async; track course.id){
      <li>
        <div>
          Title:
          <a [routerLink]="['/courses', course.id]">{{ course.title }}</a>
        </div>
        <div>Price: {{ course.price }}</div>
      </li>
      }
    </ul>
  `,
})
export class CourseListPage {
  courses = inject(CoursesService).getCourses();
}
