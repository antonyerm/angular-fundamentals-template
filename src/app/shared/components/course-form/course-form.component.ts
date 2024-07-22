import { Component } from '@angular/core';
import {
  FormBuilder, FormGroup, FormArray, Validators
} from '@angular/forms';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss'],
})
export class CourseFormComponent {
  constructor(public fb: FormBuilder, public library: FaIconLibrary) {
    library.addIconPacks(fas);
    this.buildForm();
  }
  courseForm!: FormGroup;
  isSubmitted = false;
  addCourseButtonText = 'Create course';
  createAuthorButtonText = 'Create author';

  // Use the names `title`, `description`, `author`, 'authors' (for authors list), `duration` for the form controls.
  buildForm() {
    this.courseForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(2)]],
      description: ['', [Validators.required, Validators.minLength(2)]],
      duration: ['', [Validators.required, Validators.min(0)]],
      author: ['', [Validators.minLength(2), Validators.pattern(/^[a-zA-Z0-9 ]*$/)]],
      authors: this.fb.array([])
    });
  }
  
  onSubmit() {     
    if (this.courseForm.valid) {
      this.isSubmitted = true;
      console.log(this.courseForm.value);
    } 
  }

  createAuthor() {
    if (this.author?.valid) {
      const currentAuthor = this.author?.value;
      const newAuthorObject = this.fb.control(currentAuthor);
      this.authors.push(newAuthorObject);
      this.author?.setValue("");
    }
  }

  get title() {
    return this.courseForm.get('title');
  }

  // Add the getter for the all keys of courseForm form control here.
  get description() {
    return this.courseForm.get('description');
  }

  get author() {
    return this.courseForm.get('author');
  }

  get duration() {
    return this.courseForm.get('duration');
  }

  get authors() {
    return this.courseForm.get('authors') as FormArray;
  }
}
