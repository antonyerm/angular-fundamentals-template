import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from '@shared/shared.module';
import { CoursesListComponent } from './courses-list.component';

@NgModule({
  declarations: [CoursesListComponent],
  imports: [
    BrowserModule,
    SharedModule,
    FontAwesomeModule
  ]
})
export class CourseListModule {}
