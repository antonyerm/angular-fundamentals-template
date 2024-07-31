import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
    providedIn: 'root'
})
export class NotAuthorizedGuard implements CanActivate {
    // Add your code here
    constructor(private authService: AuthService, private router: Router) { }

    canActivate(): boolean | UrlTree {
        if (!this.authService.isAuthorised) {
            return true;
        } else {
            return this.router.createUrlTree(['/courses']);
        }
    }
}

