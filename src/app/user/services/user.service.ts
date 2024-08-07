import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface User {
    name: string;
    email: string;
    password: string;
    isAdmin: boolean;
}

@Injectable({
    providedIn: 'root'
})
export class UserService {
    constructor(private http: HttpClient) { }

    getUser(): Observable<User> {
        // Add your code here
        return this.http.get<User>('http://localhost:4000/api/user/me');
    }
}
