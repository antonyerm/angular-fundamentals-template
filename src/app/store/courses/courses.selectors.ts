// Add your code here
import { createSelector } from "@ngrx/store";
import { CoursesState } from "./courses.reducer";

export const selectCoursesState = (state: CoursesState) => state;
// export const selectIsAllCoursesLoading = (state: CoursesState) => state.isAllCoursesLoading;
// export const selectIsSingleCourseLoading = (state: CoursesState) => state.isSingleCourseLoading;
// export const selectIsSearchState = (state: CoursesState) => state.isSearchState;
// export const selectGetCourses = (state: CoursesState) => state.allCourses;
// export const selectGetCourse = (state: CoursesState) => state.course;
// export const selectGetErrorMessage = (state: CoursesState) => state.errorMessage;

export const isAllCoursesLoadingSelector = createSelector(
    selectCoursesState,
    (state) => state.isAllCoursesLoading
    );
export const isSingleCourseLoadingSelector = createSelector(
    selectCoursesState,
    (state) => state.isSingleCourseLoading
    );
export const isSearchingStateSelector = createSelector(
    selectCoursesState,
    (state) => state.isSearchState
    );
export const getAllCourses = createSelector(
    selectCoursesState,
    (state) => state.allCourses
    );
export const getCourse = createSelector(
    selectCoursesState,
    (state) => state.course
    );
export const getErrorMessage = createSelector(
    selectCoursesState,
    (state) => state.errorMessage
    );
