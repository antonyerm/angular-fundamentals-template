import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { CoursesStoreService } from '@app/services/courses-store.service';
import * as CoursesActions from './courses.actions';
import { of } from 'rxjs';
import { Router } from '@angular/router';
import { CoursesStateFacade } from './courses.facade';

@Injectable()
export class CoursesEffects {
    getAll$ = createEffect(() => this.actions$.pipe(
        ofType(CoursesActions.requestAllCourses),
        mergeMap(() => this.coursesStoreService.getAll()
            .pipe(
                map((courses) => CoursesActions.requestAllCoursesSuccess({ courses: courses })),
                catchError(error => of(CoursesActions.requestAllCoursesFail({ error })))
            )
        )
    ));

    filteredCourses$ = createEffect(() => this.actions$.pipe(
        ofType(CoursesActions.requestFilteredCourses),
        mergeMap(({ searchValue }) => this.coursesStateFacade.allCourses$
            .pipe(
                map((courses) => CoursesActions.requestFilteredCoursesSuccess({ courses: courses })),
                catchError(error => of(CoursesActions.requestFilteredCoursesFail({ error })))
            )
        )
    ));

    getSpecificCourses$ = createEffect(() => this.actions$.pipe(
        ofType(CoursesActions.requestSingleCourse),
        mergeMap(({ id }) => this.coursesStoreService.getCourse(id)
            .pipe(
                map((course) => CoursesActions.requestSingleCourseSuccess({ course: course })),
                catchError(error => of(CoursesActions.requestSingleCourseFail({ error })))
            )
        )
    ));

    deleteCourse$ = createEffect(() => this.actions$.pipe(
        ofType(CoursesActions.requestDeleteCourse),
        mergeMap(({ id }) => this.coursesStoreService.deleteCourse(id)
            .pipe(
                map(() => CoursesActions.requestDeleteCourseSuccess()),
                catchError(error => of(CoursesActions.requestDeleteCourseFail({ error })))
            )
        )
    ));

    editCourse$ = createEffect(() => this.actions$.pipe(
        ofType(CoursesActions.requestEditCourse),
        mergeMap(({ id, course }) => this.coursesStoreService.editCourse(id, course)
            .pipe(
                map(() => CoursesActions.requestEditCourseSuccess( { course })),
                catchError(error => of(CoursesActions.requestEditCourseFail({ error })))
            )
        )
    ));

    createCourse$ = createEffect(() => this.actions$.pipe(
        ofType(CoursesActions.requestCreateCourse),
        mergeMap(({ course }) => this.coursesStoreService.createCourse(course)
            .pipe(
                map(() => CoursesActions.requestCreateCourseSuccess({ course})),
                catchError(error => of(CoursesActions.requestCreateCourseFail({ error })))
            )
        )
    ));

    redirectToTheCoursesPage$ = createEffect(() => this.actions$.pipe(
        ofType(CoursesActions.requestCreateCourseSuccess, CoursesActions.requestEditCourseSuccess, CoursesActions.requestSingleCourseFail),
        map(() => {
            return this.router.navigate(['/courses']);
        })
    ), { dispatch: false});


    constructor(
        private actions$: Actions,
        private coursesStoreService: CoursesStoreService,
        private router: Router,
        private coursesStateFacade: CoursesStateFacade
    ) {}

    // Add your code here
}
