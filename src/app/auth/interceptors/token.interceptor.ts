import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { catchError, Observable, throwError } from 'rxjs';
import { SessionStorageService } from '../services/session-storage.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    // Add your code here
    constructor(private authService: AuthService, private sessionStorage: SessionStorageService, private router: Router) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
        const token = this.sessionStorage.getToken();

        if (token) {
            req = req.clone({
                setHeaders: {
                    Authorization: `Bearer ${token}`
                }
            });
        }

        return next.handle(req).pipe(
            catchError((error: HttpErrorResponse) => {
                if (error.status == 401) {
                    this.authService.logout();
                    this.router.navigate(['/login']);
                }
                return throwError(() => new Error(error.message));
            })
        )

        
    }
}
