import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'courses-app';
  headerButtonText = 'Logout';
  infoButtonText = 'Add new course';
  infoTitleText = 'Your List Is Empty';
  infoText = "Please use 'Add New Course' button to add your first course";
}
