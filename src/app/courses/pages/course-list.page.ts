import { Component, inject } from '@angular/core';
import { CoursesService } from '../courses.service';
import { AsyncPipe, CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CourseType } from '../model/course.model';

@Component({
  standalone: true,
  imports: [AsyncPipe, RouterLink, CurrencyPipe],
  styles: [
    `
      li {
        padding: 10px;
      }
    `,
  ],
  template: `
    <h1>Course List</h1>

    <ul>
      @for(course of courses | async; track course.id){
      <li>
        <div>
          Title:
          <a [routerLink]="['/courses', course.id]">{{ course.title }}</a>
        </div>
        <div>Price: {{ course.price | currency }}</div>
        <div>
          Type: {{ course.type === CourseType.Online ? 'Online' : 'Workshop' }}
        </div>
      </li>
      }
    </ul>
  `,
})
export class CourseListPage {
  CourseType = CourseType;
  courses = inject(CoursesService).getCourses();
}
