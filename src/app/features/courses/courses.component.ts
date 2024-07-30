import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  id?: string;

  constructor (private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe( params => {
      this.id = params['id'];
    })
  }
}
