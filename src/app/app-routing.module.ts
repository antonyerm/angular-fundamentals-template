import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseFormComponent, LoginFormComponent, RegistrationFormComponent, SearchComponent } from './shared/components';
import { CoursesComponent } from './features/courses/courses.component';
import { AuthorizedGuard } from './auth/guards/authorized.guard';
import { CourseInfoComponent } from './features/course-info/course-info.component';
import { NotAuthorizedGuard } from './auth/guards/not-authorized.guard';

export const routes: Routes = [
    /* Add your code here */
    {
        path: 'login',
        component: LoginFormComponent,
        canActivate: [NotAuthorizedGuard]
    },
    {
        path: 'registration',
        component: RegistrationFormComponent,
        canActivate: [NotAuthorizedGuard]
    },
    {
        path: 'courses',
        component: CoursesComponent,
        canLoad: [AuthorizedGuard]
    },
    {
        path: 'courses/add',
        component: CourseFormComponent,
        canLoad: [AuthorizedGuard]
    },
    {
        path: 'courses/edit',
        component: CourseFormComponent,
        canLoad: [AuthorizedGuard]
    },
    {
        path: 'courses/edit/:id',
        component: CourseFormComponent,
        canLoad: [AuthorizedGuard]
    },
    {
        path: 'course/:id',
        component: CourseInfoComponent,
        canLoad: [AuthorizedGuard]
    },
    {
        path: '',
        redirectTo: '/courses', pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
