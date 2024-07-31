import { Injectable } from '@angular/core';
import { SessionStorageService } from './session-storage.service';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

interface User {
    "name": "string",
    "email": "string",
    "password": "string"
}

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private isAuthorized$$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    public isAuthorized$: Observable<boolean> = this.isAuthorized$$.asObservable();

    constructor(private sessionStorageService: SessionStorageService,
        private http: HttpClient
    ) { }

    login(user: User) { // replace 'any' with the required interface
        // Add your code here
        this.http.post('http://localhost:4000/api/login', user)
        .pipe(
            retry(1),
            catchError(this.handleError)
        ).subscribe(response => {
            if ((response as HttpResponse<any>).status === 201) {
                this.isAuthorised = true;
            }
        });
    }

    logout() {
        // Add your code here
        const headers = new HttpHeaders({
            'Authorization': `Bearer ${this.sessionStorageService.getToken()}`
        });

        this.http.delete('http://localhost:4000/api/logout', { headers })
            .pipe(
                retry(1),
                catchError(this.handleError)
            ).subscribe(response => {
                if ((response as HttpResponse<any>).status === 200) {
                    this.isAuthorised = false;
                }
            });
    }

    register(user: User) { // replace 'any' with the required interface
        // Add your code here
        this.http.post('http://localhost:4000/api/register', user)
        .pipe(
            retry(1),
            catchError(this.handleError)
        ).subscribe(response => {
            if ((response as HttpResponse<any>).status === 201) {
                // do nothing
            }
        });
    }

    get isAuthorised() {
        // Add your code here. Get isAuthorized$$ value
        return this.isAuthorized$$.getValue();
    }

    set isAuthorised(value: boolean) {
        // Add your code here. Change isAuthorized$$ value
        this.isAuthorized$$.next(value);
    }

    getLoginUrl() {
        // Add your code here
    }

    private handleError(error: any) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // client-side error
            errorMessage = `Error: ${error.error.message}`;
        } else {
            // server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        return throwError(() => new Error(errorMessage));
    }
}
