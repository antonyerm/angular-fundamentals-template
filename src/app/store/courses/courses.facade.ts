import { Injectable } from '@angular/core';
import { CoursesState } from './courses.reducer';
import { select, Store } from '@ngrx/store';
import * as CoursesSelectors from './courses.selectors';
import * as CoursesActions from './courses.actions'; // Import the CoursesActions module

@Injectable({
    providedIn: 'root'
})
export class CoursesStateFacade {
    // Add your code here
    constructor(private store: Store<CoursesState>) { }

    isAllCoursesLoading$ = this.store.pipe(select(CoursesSelectors.isAllCoursesLoadingSelector));
    isSingleCourseLoading$ = this.store.pipe(select(CoursesSelectors.isSingleCourseLoadingSelector));
    isSearchingState$ = this.store.pipe(select(CoursesSelectors.isSearchingStateSelector));
    courses$ = this.store.pipe(select(CoursesSelectors.getCourses));
    allCourses$ = this.store.pipe(select(CoursesSelectors.getCourses));
    course$ = this.store.pipe(select(CoursesSelectors.getCourse));
    errorMessage$ = this.store.pipe(select(CoursesSelectors.getErrorMessage));

    getAllCourses() {
        this.store.dispatch(CoursesActions.requestAllCourses());
    };

    getSingleCourse(id: string) {
        this.store.dispatch(CoursesActions.requestSingleCourse({ id: id }));
    };

    getFilteredCourses(searchValue: any) {
        this.store.dispatch(CoursesActions.requestFilteredCourses({ searchValue: searchValue }));
    };

    editCourse(id: string, body: any) {
        this.store.dispatch(CoursesActions.requestEditCourse({ id: id, course: body }));
    }

    createCourse(body: any) {
        this.store.dispatch(CoursesActions.requestCreateCourse({ course: body }));
    };

    deleteCourse(id: string) {
        this.store.dispatch(CoursesActions.requestDeleteCourse({ id: id }));
    };
}
