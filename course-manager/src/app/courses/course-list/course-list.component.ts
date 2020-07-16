import { Component, OnInit } from '@angular/core';
import { Course } from './couses';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  courses: Course[] = [];

  constructor() { }

  ngOnInit(): void {
    this.courses = [
      {
        id: 1,
        name: 'Edgar',
        imageUrl: '',
        price: 99.99,
        code: 'XPS-8796',
        duration: 120,
        rating: 5.4,
        releaseDate: 'December, 2, 2019'
      },
      {
        id: 2,
        name: 'Edgar Lopes da Silva',
        imageUrl: '',
        price: 45.99,
        code: 'XPS-8796',
        duration: 100,
        rating: 3.9,
        releaseDate: 'December, 4, 2019'
      }
    ]
  }
}
