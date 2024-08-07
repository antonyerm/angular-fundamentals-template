import { Injectable } from '@angular/core';
import { Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { AuthService } from '@app/auth/services/auth.service';

@Injectable({
    providedIn: 'root'
})
export class AdminGuard {
    constructor(private authService: AuthService, private router: Router) { }
    canLoad(route: Route, segments: UrlSegment[]): boolean | UrlTree {
        if (this.authService.isAuthorised) {
            return true;
        } else {
            return this.router.createUrlTree(['/courses']);
        }
    }
}
