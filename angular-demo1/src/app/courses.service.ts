import { Injectable } from '@angular/core';

@Injectable()
export class CoursesService {
    getCourses() : string[] {
         return ["Course1", "Course2", "Course3"];
    } 
  constructor() { }

}
