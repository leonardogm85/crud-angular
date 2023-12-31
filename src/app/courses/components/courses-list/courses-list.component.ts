import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Course } from '../../models/course';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent {

  @Input() courses: Course[] = [];

  @Output() add: EventEmitter<void> = new EventEmitter<void>();
  @Output() edit: EventEmitter<Course> = new EventEmitter<Course>();
  @Output() delete: EventEmitter<Course> = new EventEmitter<Course>();

  readonly displayedColumns: string[] = [
    'name',
    'category',
    'actions'
  ];

  onAdd(): void {
    this.add.emit();
  }

  onEdit(course: Course): void {
    this.edit.emit(course);
  }

  onDelete(course: Course): void {
    this.delete.emit(course);
  }

}
