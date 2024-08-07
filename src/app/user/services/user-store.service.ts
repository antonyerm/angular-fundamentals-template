import { Injectable } from '@angular/core';
import { User, UserService } from './user.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UserStoreService {
    private name$$ = new BehaviorSubject<string>('');
    private isAdmin$$ = new BehaviorSubject<boolean>(false);
    public name$: Observable<string> = this.name$$.asObservable();
    public isAdmin$: Observable<boolean> = this.isAdmin$$.asObservable();

    constructor(private userService: UserService) { }

    getUser() {
        // Add your code here
        this.userService.getUser()
            .subscribe((user: User) => {
                this.name = user.name;
                this.isAdmin = user.isAdmin;
            });
    }

    get isAdmin() {
        // Add your code here. Get isAdmin$$ value
        return this.isAdmin$$.getValue();
    }

    set isAdmin(value: boolean) {
        // Add your code here. Change isAdmin$$ value
        this.isAdmin$$.next(value);
    }

    get name() {
        return this.name$$.getValue();
    }

    set name(value: string) {
        this.name$$.next(value);
    }
}
