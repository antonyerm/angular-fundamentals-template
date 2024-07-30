import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseFormComponent, LoginFormComponent, RegistrationFormComponent, SearchComponent } from './shared/components';
import { CoursesComponent } from './features/courses/courses.component';

export const routes: Routes = [
    /* Add your code here */
    {
        path: '/login',
        component: LoginFormComponent
    },
    {
        path: '/registration',
        component: RegistrationFormComponent
    },
    {
        path: '/courses',
        component: CoursesComponent
    },
    {
        path: '/courses/add',
        component: CourseFormComponent
    },
    {
        path: '/courses/edit',
        component: CourseFormComponent
    },
    {
        path: '/',
        redirectTo: '/courses', pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
