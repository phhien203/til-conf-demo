import { Component, input } from '@angular/core';
import { Course } from '../../model/course.model';

@Component({
  standalone: true,
  imports: [],
  selector: 'app-start-learning',
  template: `<button (click)="goToLearningPage()">Start Learning</button>`,
})
export class StartLearningComponent {
  courseDetails = input.required<Course>();

  goToLearningPage() {
    console.log(
      `Navigating to learning page for ${this.courseDetails().title}`
    );
  }
}
