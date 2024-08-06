import { Action, createReducer, on } from '@ngrx/store';
import * as CoursesActions from './courses.actions';
import { state } from '@angular/animations';

// Add your code here
export const coursesFeatureKey = 'courses';

export interface CoursesState {
    // Add your code here
    allCourses: any[];
    course: any;
    isAllCoursesLoading: boolean;
    isSingleCourseLoading: boolean;
    isSearchState: boolean;
    errorMessage: string;
}

export const initialState: CoursesState = {
    // Add your code here
    allCourses: [],
    course: null,
    isAllCoursesLoading: false,
    isSingleCourseLoading: false,
    isSearchState: false,
    errorMessage: ''
};

export const coursesReducer = createReducer( // Add your code here
    initialState,
    on(CoursesActions.requestAllCourses, (state: CoursesState) => ({
        ...state,
        isAllCoursesLoading: true
    })),
    on(CoursesActions.requestAllCoursesSuccess, (state: CoursesState, { courses }) => ({
        ...state,
        allCourses: courses,
        isAllCoursesLoading: false
    })),
    on(CoursesActions.requestAllCoursesFail, (state: CoursesState, { error }) => ({
        ...state,
        isAllCoursesLoading: false,
        errorMessage: error
    })),
    on(CoursesActions.requestSingleCourse, (state: CoursesState, { id }) => ({
        ...state,
        isSingleCourseLoading: true
    })),
    on(CoursesActions.requestSingleCourseSuccess, (state: CoursesState, { course }) => ({
        ...state,
        course: course,
        isSingleCourseLoading: false
    })),
    on(CoursesActions.requestSingleCourseFail, (state: CoursesState, { error }) => ({
        ...state,
        isSingleCourseLoading: false,
        errorMessage: error
    })),
    on(CoursesActions.requestFilteredCourses, (state: CoursesState, { searchValue }) => ({
        ...state,
        isSearchState: true
    })),
    on(CoursesActions.requestFilteredCoursesSuccess, (state: CoursesState, { courses }) => ({
        ...state,
        allCourses: courses,
        isSearchState: false,
        isAllCoursesLoading: false
    })),
    on(CoursesActions.requestFilteredCoursesFail, (state: CoursesState, { error }) => ({
        ...state,
        isSearchState: false,
        isAllCoursesLoading: false,
        errorMessage: error
    })),
    on(CoursesActions.requestDeleteCourse, (state: CoursesState, { id }) => ({
        ...state,
        isSingleCourseLoading: false,
        isAllCoursesLoading: false
    })),
    on(CoursesActions.requestDeleteCourseSuccess, (state: CoursesState) => ({
        ...state,
        isSingleCourseLoading: false,
        isAllCoursesLoading: false
    })),
    on(CoursesActions.requestDeleteCourseFail, (state: CoursesState, { error }) => ({
        ...state,
        isSingleCourseLoading: false,
        isAllCoursesLoading: false,
        errorMessage: error
    })),
    on(CoursesActions.requestEditCourse, (state: CoursesState, { id, course }) => ({
        ...state,
        isSingleCourseLoading: true
    })),
    on(CoursesActions.requestEditCourseSuccess, (state: CoursesState, { course }) => ({
        ...state,
        course: course,
        isSingleCourseLoading: false
    })),
    on(CoursesActions.requestEditCourseFail, (state: CoursesState, { error }) => ({
        ...state,
        isSingleCourseLoading: false,
        errorMessage: error
    })),
    on(CoursesActions.requestCreateCourse, (state: CoursesState, { course }) => ({
        ...state,
        course: course,
        isSingleCourseLoading: true
    })),
    on(CoursesActions.requestCreateCourseSuccess, (state: CoursesState, { course }) => ({
        ...state,
        course: course,
        isSingleCourseLoading: false
    })),
    on(CoursesActions.requestCreateCourseFail, (state: CoursesState, { error }) => ({
        ...state,
        isSingleCourseLoading: false,
        errorMessage: error
    }))
);

export const reducer = (state: CoursesState, action: Action): CoursesState => coursesReducer(state, action);
