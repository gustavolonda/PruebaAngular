import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICourse } from './course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
url: string = "assets/data/courses.json";
  constructor(private http: HttpClient ) { }
  getCourses() :Observable<ICourse[]>{
    return this.http.get<ICourse[]>(this.url)
  }
}
