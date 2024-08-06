import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from '@shared/shared.module';
import { AppComponent } from '@app/app.component';
import { NotAuthorizedGuard } from '@app/auth/guards/not-authorized.guard';
import { AuthorizedGuard } from '@app/auth/guards/authorized.guard';
import { CoursesStoreService } from '@app/services/courses-store.service';
import { CoursesService } from '@app/services/courses.service';
import { CoursesModule } from '@app/features/courses/courses.module';
import { CourseInfoModule } from '@features/course-info/course-info.module';
import { AppRoutingModule } from '@app/app-routing.module';
import { StoreModule } from '@ngrx/store';
import * as fromCourses from '@app/store/courses/courses.reducer';
import { EffectsModule } from '@ngrx/effects';
import { effects, reducers } from './store';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    SharedModule,
    FontAwesomeModule,
    CoursesModule,
    CourseInfoModule,
    AppRoutingModule,
    StoreModule.forFeature(
      fromCourses.coursesFeatureKey,
      fromCourses.reducer
    ),
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot(effects)
  ],
  providers: [AuthorizedGuard, NotAuthorizedGuard, CoursesService, CoursesStoreService],
  bootstrap: [AppComponent]
})
export class AppModule {}
