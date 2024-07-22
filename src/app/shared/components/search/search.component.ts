import { Component, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  // Use the name `placeholder` for the @Input.
  // Use the name `search` for the @Output.
  @Input() placeholder: string = '';
  @Output() searchClick = new EventEmitter<string>();
  searchButtonText = 'Search';
  searchTerm = '';

  onClick() {
    this.searchClick.emit(this.searchTerm);
  }
}

