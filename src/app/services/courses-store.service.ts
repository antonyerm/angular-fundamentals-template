import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class CoursesStoreService {
    constructor(private http: HttpClient) { }

    getAll(): Observable<any> {
        // Add your code here
        return this.http.get('http://localhost:4000/api/courses/all');
    }

    createCourse(course: any): Observable<any> { // replace 'any' with the required interface
        // Add your code here
        return this.http.post('http://localhost:4000/api/courses/all', 
            { title: course.title, description: course.description, duration: course.duration, authors: course.authors });
    }

    getCourse(id: string): Observable<any> {
        // Add your code here
        return this.http.get('http://localhost:4000/api/courses/' + id);
    }

    editCourse(id: string, course: any): Observable<any> { // replace 'any' with the required interface
        // Add your code here
        return this.http.put('http://localhost:4000/api/courses/' + id, 
            { title: course.title, description: course.description, duration: course.duration, authors: course.authors });
    }

    deleteCourse(id: string): Observable<any> {
        // Add your code here
        return this.http.delete('http://localhost:4000/api/courses/' + id);
    }

    filterCourses(filter: any) {
        // Add your code here
        return this.http.put('http://localhost:4000/api/courses/filter', 
            { title: filter.title, description: filter.description, duration: filter.duration, creationDate: filter.creationDate });
    }

    getAllAuthors() {
        // Add your code here
    }

    createAuthor(name: string) {
        // Add your code here
    }

    getAuthorById(id: string) {
        // Add your code here
    }
}
